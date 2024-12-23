package endpoints;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/point")
public class PointResource {


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String sayHello() {
        return "{\"hello\":\"world\"}\"";
    }

}
