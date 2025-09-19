class Pen {
    String color;
    String type;

    public void write() {
        System.out.println("writitng somthing");

    }
    public void printColor(){
        System.out.println(this.color+" , "+ this.type);
    }
}

public class oops1 {
    public static void main (String args[]){
        Pen pen1 = new Pen();
        pen1.color = "blue";
        pen1.type = "Gel";
        pen1.printColor();
        
        Pen pen2 = new Pen();
        pen2.color = "Green";
        pen2.type = "Ballpoint";
        pen2.printColor();
    }

}