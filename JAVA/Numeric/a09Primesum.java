public class a09Primesum {
    // Function to check if a number is prime
    static boolean isPrime(int m) {
        if (m < 2) return false;
        for (int i = 2; i * i <= m; i++) {
            if (m % i == 0) return false;
        }
        return true;
    }

    // Function to check if N can be expressed as the sum of two primes
    static String isSumOfTwo(int N) {
        for (int i = 2; i <= N / 2; i++) {
            if (isPrime(i) && isPrime(N - i)) {
                return "Yes"; // Found a valid pair
            }
        }
        return "No"; // No valid pair found
    }

    // Main method to test the function
    public static void main(String[] args) {
        int N1 = 34;
        int N2 = 23;

        System.out.println("Input: N = " + N1 + " -> Output: " + isSumOfTwo(N1));
        System.out.println("Input: N = " + N2 + " -> Output: " + isSumOfTwo(N2));
    }
}
 {
    
}
