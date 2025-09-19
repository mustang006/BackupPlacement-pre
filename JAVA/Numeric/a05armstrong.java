public class a05armstrong {
    static boolean armstrongNumber(int n) {
        int or = n;
        int sum = 0;
        int an = 0;
        while(n>0){
            an= n%10;
            sum =an*an*an + sum;
            
            n=n/10;
            
            
        }
        return sum== or;
        // code here
    }
}