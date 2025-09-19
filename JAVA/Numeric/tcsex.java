import java.util.*;

public class tcsex {

  public static int calculateAns(int n) {
    int maxLeftover = 0;
    int bestPacksize = 1;


    for (int i = 1; i <=n; i++) {
      int leftover = n%i;
      if(leftover>maxLeftover){
        maxLeftover=leftover;
        bestPacksize = i;
      }
    }
    return bestPacksize;

    
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    sc.close();
    System.out.println(calculateAns(n));


  }
  
}
