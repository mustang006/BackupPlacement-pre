import java.util.Scanner;

public class a07allprimefactors {
    public static int[] AllPrimeFactors(int n) {
        int k = 0;
        int[] arr = new int[10];
        for (int i = 2; i * i <= n; i++) {
            while (n % i == 0) {
                n = n / i;
                arr[k] = i;
                k++;
            }

        }
        if (n != 1) {
            arr[k] = n;
        }
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);

        }
        return arr;

    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        AllPrimeFactors(n);
        
    }
}