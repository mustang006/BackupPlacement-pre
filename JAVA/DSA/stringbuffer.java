public class stringbuffer {
    
    public static void main(String[] args) {
        // Create StringBuffer with initial content
        StringBuffer sb = new StringBuffer("Hello");

        // append(String s) - adds string to the end
        sb.append(" World");
        System.out.println("append: " + sb);

        // insert(int offset, String s) - inserts string at index
        sb.insert(5, ",");
        System.out.println("insert: " + sb);

        // replace(int start, int end, String s) - replaces substring
        sb.replace(0, 5, "Hi");
        System.out.println("replace: " + sb);

        // delete(int start, int end) - deletes substring
        sb.delete(2, 3);
        System.out.println("delete: " + sb);

        // deleteCharAt(int index) - deletes char at index
        sb.deleteCharAt(2);
        System.out.println("deleteCharAt: " + sb);

        // reverse() - reverses the sequence
        sb.reverse();
        System.out.println("reverse: " + sb);

        // setCharAt(int index, char ch) - sets char at index
        sb.setCharAt(0, 'D');
        System.out.println("setCharAt: " + sb);

        // setLength(int newLength) - sets the length of the sequence
        sb.setLength(5);
        System.out.println("setLength: " + sb);

        // capacity() - returns current capacity
        System.out.println("capacity: " + sb.capacity());

        // ensureCapacity(int minimumCapacity) - ensures capacity
        sb.ensureCapacity(50);
        System.out.println("capacity after ensureCapacity(50): " + sb.capacity());

        // charAt(int index) - returns char at index
        System.out.println("charAt(1): " + sb.charAt(1));

        // indexOf(String str) - first index of substring
        System.out.println("indexOf(\"ro\"): " + sb.indexOf("ro"));

        // lastIndexOf(String str) - last index of substring
        System.out.println("lastIndexOf(\"o\"): " + sb.lastIndexOf("o"));

        // toString() - converts to String
        String result = sb.toString();
        System.out.println("toString: " + result);
    }
}

