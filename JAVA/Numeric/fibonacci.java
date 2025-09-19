import java.util.*;

public class fibonacci {

  public static void main(String[] args) {
    
    int n = 0;
    int m = 1;
    int f = 0;
    int sum = 0;

    System.out.println(n);
    System.out.println(m);
    for (int i = 0; i < 5; i++) {

      f = n + m; 
      sum += f;
      n = m;
      m = f;
      System.out.println(f);
    }

    System.out.println("Sum is :-"+sum);

  }
}