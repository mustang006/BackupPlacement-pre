class shape{
    String color;
    public void area(){
        System.out.println("displays area");
    }

}
class triangle extends shape{
    public void area(int l , int h){
        System.out.println(1/2*l*h);
    }

}
class equilateraltriangle extends triangle{
    public void area(int l, int h){
        System.out.println(1/2*l*h);
    }
}



public class inheritance3 {
    public static void main(String[] args) {
        triangle t1 = new triangle();
        t1.color = "big";
    }
}
