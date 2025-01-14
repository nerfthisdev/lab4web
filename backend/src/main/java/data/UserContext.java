package data;

import jakarta.enterprise.context.RequestScoped;

@RequestScoped
public class UserContext {
    private String username;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}