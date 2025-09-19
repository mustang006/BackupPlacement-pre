import java.util.*;

public class a08primefactors {
    public static int[] AllPrimeFactors(int N) {
        List<Integer> primeFactors = new ArrayList<>();

        // Check divisibility by 2
        if (N % 2 == 0) {
            primeFactors.add(2);
            while (N % 2 == 0) {
                N /= 2;
            }
        }

        // Check odd divisors from 3 to √N
        for (int i = 3; i * i <= N; i += 2) {
            if (N % i == 0) {
                primeFactors.add(i); // Add unique prime factor
                while (N % i == 0) {
                    N /= i;
                }
            }
        }

        // If N is still > 1, it's a prime factor itself
        if (N > 1) {
            primeFactors.add(N);
        }

        return primeFactors.stream().mapToInt(i -> i).toArray();
       
    }
    // code here
    public static void main(String[] args) {
        int N = 100;
        int[] result = AllPrimeFactors(N);
        
        // Print using Arrays.toString()
        System.out.println("Unique Prime Factors of " + N + ": " + Arrays.toString(result));
        
        // Print using loop
        System.out.print("Unique Prime Factors using loop: ");
        for (int num : result) {
            System.out.print(num + " ");
    }

}}