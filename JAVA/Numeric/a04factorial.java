import java.util.Scanner;

public class a04factorial {
  public static int factorial(int n) {
        int fac = 1;
        for(int i =1; i<=n ; i++){
             fac = fac * i;
            
        }
        return fac;
        
        // code here
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n =  sc.nextInt();
        int ans = factorial(n);
        System.out.println("The answer is " + ans);
    }
}