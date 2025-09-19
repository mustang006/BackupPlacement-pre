import java.util.*;
public class LinkedLists {
    public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<>();

        // Add elements
        list.add("Apple");            // add at end
        list.addFirst("Mango");       // add at beginning
        list.addLast("Banana");       // add at end
        list.add(1, "Orange");        // add at index 1

        System.out.println("List after additions: " + list);

        // Access elements
        System.out.println("First element: " + list.getFirst());
        System.out.println("Last element: " + list.getLast());
        System.out.println("Element at index 2: " + list.get(2));

        // Update element
        list.set(2, "Grapes");
        System.out.println("List after set at index 2: " + list);

        // Contains check
        System.out.println("Contains Banana? " + list.contains("Banana"));

        // Remove elements
        System.out.println("Removed first element: " + list.removeFirst());
        System.out.println("Removed element at index 1: " + list.remove(1));
        System.out.println("Removed last element: " + list.removeLast());

        System.out.println("List after removals: " + list);

        // Peek, poll, offer
        System.out.println("Peek (first element): " + list.peek());
        System.out.println("Poll (remove first): " + list.poll());
        list.offer("Pineapple");
        System.out.println("List after offer: " + list);

        // Other methods
        System.out.println("Size: " + list.size());
        System.out.println("Is empty? " + list.isEmpty());

        // Index methods
        list.add("Apple");
        list.add("Orange");
        System.out.println("List for index checks: " + list);
        System.out.println("First index of Apple: " + list.indexOf("Apple"));
        System.out.println("Last index of Orange: " + list.lastIndexOf("Orange"));

        // Clear list
        list.clear();
        System.out.println("List after clear: " + list);
        System.out.println("Is empty after clear? " + list.isEmpty());
    }

}
