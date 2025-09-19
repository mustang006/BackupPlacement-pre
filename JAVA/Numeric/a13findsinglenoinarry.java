import java.util.*;
public class a13findsinglenoinarry {

    public static int findOnce(int[] arr) {
        HashSet<Integer> set = new HashSet<>();
        for (int num : arr) {
            if (set.contains(num)) {
                set.remove(num);
            } else {
                set.add(num);
            }
        }

        for (int num : set)
            return num;

        return -1;

        // Complete this function
    }
    public static void main(String[] args) {
        int arr[]= {11,11,33,4,4,55,55};
        System.out.println(findOnce(arr));
    }
}
