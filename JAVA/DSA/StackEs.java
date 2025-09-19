import java.util.Stack;

public class StackEs {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();

        // 1. push(E item): Add elements to the stack
        stack.push(10);
        stack.push(20);
        stack.push(30);
        System.out.println("Stack after pushes: " + stack);

        // 2. peek(): View the top element without removing it
        System.out.println("Top element (peek): " + stack.peek());

        // 3. pop(): Remove and return the top element
        System.out.println("Popped element: " + stack.pop());
        System.out.println("Stack after pop: " + stack);

        // 4. search(Object o): Returns position from the top (1-based index)
        System.out.println("Position of 10 from top: " + stack.search(10)); // 2 means second from top

        // 5. isEmpty(): Checks if the stack is empty
        System.out.println("Is stack empty? " + stack.isEmpty());

        // 6. size(): Returns the number of elements in the stack
        System.out.println("Size of stack: " + stack.size());

        // 7. clear(): Remove all elements from the stack (custom via loop or clear all)
        stack.clear();  // you can also use: while (!stack.isEmpty()) { stack.pop(); }
        System.out.println("Stack after clear: " + stack);
    }
}
