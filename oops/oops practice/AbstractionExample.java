// Abstract class
abstract class Shape {
    // Abstract method (no body)
    abstract void draw();

    // Concrete method
    void display() {
        System.out.println("This is a shape.");
    }
}
// Abstraction means showing only the necessary things to the user and hiding the complex background logic.

// Subclass 1                                                                                                                                                                                                                                                                                                                         []
class Circle extends Shape {
    void draw() {
        System.out.println("Drawing a Circle");
    }
}

// Subclass 2
class Rectangle extends Shape {
    void draw() {
        System.out.println("Drawing a Rectangle");
    }
}

// Main class
public class AbstractionExample {
    public static void main(String[] args) {
        Shape s1 = new Circle();
        Shape s2 = new Rectangle();

        s1.draw();      // Output: Drawing a Circle
        s1.display();   // Output: This is a shape.

        s2.draw();      // Output: Drawing a Rectangle
        s2.display();   // Output: This is a shape.
    }
}
