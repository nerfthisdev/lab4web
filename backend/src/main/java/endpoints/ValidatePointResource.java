package endpoints;


import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import data.GeometryValidator;
import data.Point;
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

    @POST
    public Response validatePoint(String json) {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        Point point = gson.fromJson(json, Point.class);
        point.setFlag(GeometryValidator.isInsideArea(point.getX(), point.getY(), point.getR()));

        return Response.ok(gson.toJson(point)).build();
    }
}
