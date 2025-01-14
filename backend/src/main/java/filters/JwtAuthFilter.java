package filters;

import data.UserContext;
import jakarta.inject.Inject;
import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerRequestFilter;
import jakarta.ws.rs.core.HttpHeaders;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.Provider;
import util.JwtUtil;
import util.Protected;


@Provider
@Protected
public class JwtAuthFilter implements ContainerRequestFilter {
    @Inject
    UserContext userContext;

    @Override
    public void filter(ContainerRequestContext requestContext) {
        String authHeader = requestContext.getHeaderString(HttpHeaders.AUTHORIZATION);

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).build());
            return;
        }
        String token = authHeader.substring("Bearer ".length()).trim();
        String username = JwtUtil.validateToken(token);

        if (username == null) {
            requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).build());
        }

        requestContext.setProperty("username", username);
        userContext.setUsername(username);
    }
}
