package endpoints;


import co.elastic.clients.elasticsearch.core.IndexResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import data.GeometryValidator;
import data.Point;
import elasticlogic.ElasticClient;
import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;


@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Path("/validatepoint")
public class ValidatePointResource {
    @Inject
    ElasticClient elasticClient;

    @POST
    public Response validatePoint(String json) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {

            Point point = objectMapper.readValue(json, Point.class);
            point.setFlag(GeometryValidator.isInsideArea(point.getX(), point.getY(), point.getR()));
            IndexResponse response = elasticClient.addPoint(point);
            String responseJson = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(response.toString());
            return Response.ok(responseJson).build();
        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("{\"error\":\"" + e.getMessage() + "\"}")
                    .build();
        }
    }
}
