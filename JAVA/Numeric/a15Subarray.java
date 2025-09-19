import java.util.*;

public class a15Subarray {
    public static void subarray(int arr[], int k) {
        HashMap<Integer, Integer> map = new HashMap<>();
        int currsum = 0;
        int start = 0;
        int end = -1;

        for (int i = 0; i < arr.length; i++) {
            currsum += arr[i];

            // Case 1: sum from 0 to i equals k
            if (currsum - k == 0) {
                start = 0;
                end = i;
                break; // Found, exit
            }

            // Case 2: If (currsum - k) seen before
            if (map.containsKey(currsum - k)) {
                start = map.get(currsum - k) + 1;
                end = i;
                break; // Found, exit
            }

            // Store current sum with index
            map.put(currsum, i);
        }

        if (end == -1) {
            System.out.println("Not found");
        } else {
            System.out.println("Subarray found from index " + start + " to " + end);
        }
    }

    public static void main(String[] args) {
        int arr[] = {1, 1, 3, 5, 6, 4, 4, 7};
        subarray(arr, 5); // Example: output will be subarray starting and ending index
    }
}
