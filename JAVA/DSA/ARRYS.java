import java.util.Arrays;

public class ARRYS {
    public static void main(String[] args) {
        int[] arr = {3, 6, 1, 8, 2};

        // Sort
        Arrays.sort(arr);
        System.out.println("Sorted: " + Arrays.toString(arr)); // [1, 2, 3, 6, 8]

        // Binary Search
        int idx = Arrays.binarySearch(arr, 6); 
        System.out.println("Index of 6: " + idx);

        // Copy of
        int[] newArr = Arrays.copyOf(arr, 3);
        System.out.println("Copy of first 3: " + Arrays.toString(newArr)); // [1, 2, 3]

        // Copy of Range
        int[] subArr = Arrays.copyOfRange(arr, 1, 4); // indices 1 to 3
        System.out.println("Sub array: " + Arrays.toString(subArr)); // [2, 3, 6]

        // Fill
        Arrays.fill(newArr, 99);
        System.out.println("Filled array: " + Arrays.toString(newArr)); // [99, 99, 99]

        // Equals
        boolean isEqual = Arrays.equals(arr, newArr);
        System.out.println("Arrays equal? " + isEqual); // false

        // Set all (multiply index by 2)
        Arrays.setAll(arr, i -> i * 2);
        System.out.println("After setAll: " + Arrays.toString(arr)); // [0, 2, 4, 6, 8]
    }
}
