package endpoints;

import data.Credentials;
import data.UserDAO;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import util.JwtUtil;
import util.PasswordUtil;

@Path("/auth")
public class AuthResource {

    @POST
    @Path("/login")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response login(Credentials credentials) {
        String storedHash = UserDAO.getStoredHashFromDatabase(credentials.getUsername());
        if (storedHash == null) {
            return Response.status(Response.Status.UNAUTHORIZED).entity("User not found").build();
        }

        boolean passwordMatch = PasswordUtil.checkPassword(credentials.getPassword(), storedHash);

        if (!passwordMatch) {
            return Response.status(Response.Status.UNAUTHORIZED).entity("Invalid password").build();
        }

        String token = JwtUtil.generateToken(credentials.getUsername());
        return Response.ok("{\"token\":\"" + token + "\"}").build();
    }

    @POST
    @Path("/register")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response register(Credentials credentials) {
        String hashedPassword = PasswordUtil.hashPassword(credentials.getPassword());
        boolean success = UserDAO.registerUser(credentials.getUsername(), hashedPassword);

        if (success) {
            return Response.ok("{\"message\":\"User registered successfully\"}").build();
        } else {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("{\"error\":\"User registration failed\"}")
                    .build();
        }
    }
}
