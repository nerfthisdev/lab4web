package endpoints;

import data.UserContext;
import elasticlogic.ElasticClient;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import util.Protected;

import java.io.IOException;

@Path("/point")
public class PointResource {
    @Inject
    ElasticClient elasticClient;

    @Inject
    UserContext userContext;

    @GET
    @Protected
    @Produces(MediaType.APPLICATION_JSON)
    public String getPoints() throws IOException {
        return elasticClient.getPoints(userContext.getUsername());
    }

}
