package data;

public class Point {
    double x;
    double y;
    int r;
    boolean flag;
    String username;

    public Point(double x, double y, int r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.flag = false;
        this.username = null;
    }

    public Point() {

    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public int getR() {
        return r;
    }

    public void setR(int r) {
        this.r = r;
    }

    public boolean isFlag() {
        return flag;
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public void setFlag(boolean flag) {
        this.flag = flag;
    }

    @Override
    public String toString() {
        return "Point [x=" + x + ", y=" + y + ", r=" + r + ", flag=" + flag + ", username=" + username + "]";
    }
}
