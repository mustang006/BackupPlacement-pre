public class a14pushZerosToEnd {

    // public static void pushZerosToEnd(int[] arr) {
    // int j=0;
    // for(int i=0;i<arr.length;i++){
    // if(arr[i]!=0){
    // if(i!=j){
    // int temp=arr[i];
    // arr[i]=arr[j];
    // arr[j]=temp;
    // }
    // j++;
    // }
    // }
    public static void pushZerosToEnd(int[] arr) {
        int notZeroes = 0;
        int count = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != 0) {
                arr[notZeroes++] = arr[i];
            }

        }
        for (int i = notZeroes; i < arr.length; i++) {
            arr[i] = 0;
        }

        // code here

        for (int num : arr) {
            System.out.print(num + " , ");
        }

        // code here
    }

    public static void main(String[] args) {
        int arr[] = { 3, 0, 5, 0, 0, 0, 7 };
        pushZerosToEnd(arr);
    }
}
