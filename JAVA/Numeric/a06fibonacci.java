public class a06fibonacci {

    public static void nthFibonacci(int n) {
        int a = 0;
        int b = 1;
        int m= 7;
        System.out.println(a);
        System.out.println(b);
        for (int i = 2; i <= n; i++) {
           
            int c = a + b;
            a = b;
            b = c;
            System.out.println(c);
            if(i==m){
                System.out.println(c);
            }

        }


        // code here
    }

    public static void main(String[] args) {
        nthFibonacci(10);
    }
}
