public class a11Secondlargest {

    
        public static int getSecondLargest(int[] arr) {
           int largest = Integer.MIN_VALUE;
           int secondLargest = Integer.MIN_VALUE;
           for(int i= 0; i<arr.length; i++){
               if(arr[i]>largest){
                   secondLargest = largest;
                   largest = arr[i];
                   System.out.println(largest + "   " + secondLargest);
               }
           }
           return secondLargest;
            
            // Code Here
        }
        public static void main(String[] args) {
            int arr[] = {1,1,5,6,10,9,10,110,200,700,77,88,99,99};
            getSecondLargest(arr);

        }
    }
    
