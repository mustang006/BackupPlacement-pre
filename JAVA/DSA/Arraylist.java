import java.util.ArrayList;
import java.util.Collections;

public class Arraylist {
    public static void main(String[] args) {
        ArrayList<String> fruits = new ArrayList<>();

        // Add elements
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Mango");

        // Access elements
        System.out.println("First fruit: " + fruits.get(0));
        System.out.println("Size: " + fruits.size());

        // Check for element
        System.out.println("Contains Banana? " + fruits.contains("Banana"));

        // Update
        fruits.set(1, "Orange");

        // Sort and Reverse
        Collections.sort(fruits);
        System.out.println("Sorted: " + fruits);
        Collections.reverse(fruits);
        System.out.println("Reversed: " + fruits);

        // Remove
        fruits.remove("Mango");

        // Convert to Array
        Object[] arr = fruits.toArray();
        System.out.println("Array version: ");
        for (Object fruit : arr) {
            System.out.println(fruit);
        }

        // Clear
        fruits.clear();
        System.out.println("Is list empty? " + fruits.isEmpty());
    }
}
