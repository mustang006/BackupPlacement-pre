public class a12missingNumber {

   public static int missingNumber(int arr[]) {
        int n = arr.length + 1; // Since one number is missing, size should be n+1

        long expectedSum = (long) n * (n + 1) / 2; // Use long to avoid overflow
        long actualSum = 0;

        for (int num : arr) {
            actualSum += num; // Sum up all elements
        }

        return (int) (expectedSum - actualSum); // Convert result back to int
    }

    public static void main(String[] args) {
        int arr[]={1,2,3,6,4,5,8};
        System.out.println(missingNumber(arr));

    }
}
