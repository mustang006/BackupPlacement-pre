

import java.util.Scanner;

import java.util.*;

public class m4input {

    public static void main(String ar[]) {

        Scanner sc = new Scanner(System.in);

        String S = sc.nextLine();

        String input[] = S.replace("{", "").replace("}", "").split(",");

        int n = input.length;

        int arr[] = new int[n];

        for (int i = 0; i < n; i++) {

            arr[i] = Integer.parseInt(input[i].trim());

            System.out.print(arr[i] + " ");

        }

        // evenNum(arr);

    }

}