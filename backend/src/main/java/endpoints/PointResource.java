package endpoints;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/point")
public class PointResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String sayHello() {
        return "{\"hello\":\"world\"}\"";
    }

}
