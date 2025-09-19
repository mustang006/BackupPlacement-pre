import java.util.*;

public class a16 {
    public static void subarray(int arr[], int k) {

        for (int start = 0; start < arr.length; start++) {
            int sum = 0;

            for (int end = start; end < arr.length; end++) {
                sum += arr[end];

                if (sum == k) {
                    System.out.println(start + " ," + end);

                }

            }
        }
        System.out.println("Not found");
    }

    public static void main(String[] args) {
        int arr[] = { 1, 11, 4, 5, 6, 4 };
        subarray(arr, 19);

    }
}