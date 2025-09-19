interface Printable {
    void print();
}

// An interface in Java is a blueprint of a class that contains abstract methods and is used to define a contract that other classes must follow.


// An abstract method is a method declared without an implementation (without a body). It must be implemented by a subclass.


interface Showable {
    void show();
}

class Demo implements Printable, Showable {
    public void print() {
        System.out.println("Printing...");
    }

    public void show() {
        System.out.println("Showing...");
    }
}

public class interfaces {
    public static void main(String[] args) {
        Demo d = new Demo();
        d.print();
        d.show();
    }
}
