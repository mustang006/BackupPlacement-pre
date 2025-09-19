import java.util.Scanner;

public class a02CountEvenDivisors {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        
        int count = countDividingDigits(n);
        System.out.println("Number of digits that divide " + n + " evenly: " + count);
    }

    static int countDividingDigits(int n) {
        int original = n;  // Store original number
        int count = 0;

        while (n > 0) {
            int digit = n % 10;  // Extract last digit
            if (digit != 0 && original % digit == 0) {  // Check divisibility
                count++;
            }
            n /= 10;  // Remove last digit
        }
        return count;
    }
}
