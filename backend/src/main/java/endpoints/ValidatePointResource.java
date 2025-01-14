package endpoints;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import data.GeometryValidator;
import data.Point;
import data.UserContext;
import elasticlogic.ElasticClient;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import util.Protected;


@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Path("/validatepoint")
public class ValidatePointResource {
    @Inject
    ElasticClient elasticClient;

    @Inject
    UserContext userContext;

    @POST
    @Protected
    public Response validatePoint(String json) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {

            String username = userContext.getUsername();
            Point point = objectMapper.readValue(json, Point.class);
            point.setUsername(username);
            System.out.println(point);
            point.setFlag(GeometryValidator.isInsideArea(point.getX(), point.getY(), point.getR()));
            elasticClient.addPoint(point);
            ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
            String jsonPoint = ow.writeValueAsString(point);
            return Response.ok(jsonPoint).build();
        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("{\"error\":\"" + e.getMessage() + "\"}")
                    .build();
        }
    }
    @OPTIONS
    public Response preflight() {
        return Response.ok()
                .header("Access-Control-Allow-Origin", "http://127.0.0.1:5173")
                .header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization")
                .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD")
                .build();
    }
}
