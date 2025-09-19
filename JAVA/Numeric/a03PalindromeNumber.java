import java.util.Scanner;

public class a03PalindromeNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        
        if (isPalindrome(num))
            System.out.println(num + " is a palindrome.");
        else
            System.out.println(num + " is not a palindrome.");
    }

    static boolean isPalindrome(int num) {
        int original = num, reversed = 0;
        
        while (num > 0) {
            int digit = num % 10;  // Get last digit
            reversed = reversed * 10 + digit;  // Build reversed number
            num /= 10;  // Remove last digit
        }

        return original == reversed;  // Compare original and reversed number
    }
}
