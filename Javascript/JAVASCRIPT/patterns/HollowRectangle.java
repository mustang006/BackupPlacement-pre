
public class HollowRectangle {
    public static void main(String[] args) {
        int rows = 5;
        int cols = 8;

        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= cols; j++) {
                // Print star if boundary, else space
                if (i == 1 || i == rows || j == 1 || j == cols) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");  // Space inside
                }
            }
            System.out.println();
        }
    }
}

