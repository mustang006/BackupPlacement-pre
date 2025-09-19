import java.util.*;

public class a10maxandminfind {
    public static int[] maxandminfind(int n) {
        int maxdigit = 0;
        int mindigit = 9;
        while (n > 0) {
            int digit = n % 10;
            maxdigit = Math.max(maxdigit, digit);
            mindigit = Math.min(digit, mindigit);
            n = n / 10;

        }
        return new int[] {maxdigit,mindigit};
       

    }

    public static void main(String[] args) {
        int n = 454;
        int[] result = maxandminfind(n);
        System.out.println(result[0]);
        System.out.println(result[1]);


    }

}
