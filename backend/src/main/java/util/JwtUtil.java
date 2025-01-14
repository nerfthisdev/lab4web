package util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.util.Date;

public class JwtUtil {
    private static final String SECRET_KEY = "bibabobabibaboba202!pasdlknasdJASDNASOIDZXCZXCsadasd";
    private static final long EXP_TIME = 864000;

    private static final Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());

    public static String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis()  + EXP_TIME))
                .signWith(key)
                .compact();
    }

    public static String validateToken(String token) {
        try {
            Jws<Claims> claimsJws = Jwts
                    .parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token);
            System.out.println(claimsJws.getBody().getSubject());
            return claimsJws.getBody().getSubject();
        } catch (JwtException e) {
            return null;
        }
    }
}
