import java.util.*;

public class m3input {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        String input =sc.nextLine();
        // "1,2,3,4,5"
        String ch[]= input.split(" ");
        // '1' '2' '3'
        ArrayList<Integer>arr=new ArrayList<>();

        for(String token : ch){
            //token ='1';
            int num = Integer.parseInt(token);
            arr.add(num);


        }
        for(int a:arr){
            System.out.print(a+" ");
        }






    }

    
}
