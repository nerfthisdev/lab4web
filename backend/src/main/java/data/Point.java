package data;

public class Point {
    double x;
    double y;
    int r;
    boolean flag;

    public Point(double x, double y, int r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.flag = false;
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

    public void setFlag(boolean flag) {
        this.flag = flag;
    }

    @Override
    public String toString() {
        return "Point [x=" + x + ", y=" + y + ", r=" + r + ", flag=" + flag + "]";
    }
}
