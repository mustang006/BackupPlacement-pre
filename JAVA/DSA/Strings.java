public class Strings {
    public static void main(String[] args) {
        String str = "  Hello Java World  ";

        // Basic methods
        System.out.println("Original: '" + str + "'");
        System.out.println("Length: " + str.length());
        System.out.println("Trimmed: '" + str.trim() + "'");
        System.out.println("To Upper Case: " + str.toUpperCase());
        System.out.println("To Lower Case: " + str.toLowerCase());
        System.out.println("Char at index 6: " + str.charAt(6));
        System.out.println("Index of 'Java': " + str.indexOf("Java"));
        System.out.println("Last index of 'l': " + str.lastIndexOf('l'));

        // Substring and replace
        System.out.println("Substring (2, 7): " + str.substring(2, 7));
        System.out.println("Replace 'Java' with 'Python': " + str.replace("Java", "Python"));

        // Comparison
        String s1 = "hello";
        String s2 = "HELLO";
        System.out.println("Equals: " + s1.equals(s2));
        System.out.println("Equals Ignore Case: " + s1.equalsIgnoreCase(s2));

        // Starts/Ends With
        System.out.println("Starts with '  He': " + str.startsWith("  He"));
        System.out.println("Ends with 'ld  ': " + str.endsWith("ld  "));

        // Contains
        System.out.println("Contains 'Java': " + str.contains("Java"));

        // isEmpty and isBlank
        String empty = "";
        String blank = "   ";
        System.out.println("Is Empty: " + empty.isEmpty());
        System.out.println("Is Blank (Java 11+): " + blank.isBlank());

        // Concatenation
        String concat = s1.concat(" World");
        System.out.println("Concatenation: " + concat);

        // ValueOf
        int num = 123;
        System.out.println("ValueOf: " + String.valueOf(num));

        // Split
        String[] parts = str.trim().split(" ");
        System.out.println("Split by space:");
        for (String part : parts) {
            System.out.println(part);
        }

        // Join (Java 8+)
        String joined = String.join("-", "2025", "05", "19");
        System.out.println("Joined: " + joined);

        // Format
        String formatted = String.format("Name: %s, Age: %d", "Alice", 25);
        System.out.println("Formatted: " + formatted);

        // Intern
        String a = new String("interned").intern();
        String b = "interned";
        System.out.println("Using intern(): " + (a == b)); // true

        // ReplaceAll (Regex)
        String dirty = "abc123xyz";
        System.out.println("ReplaceAll digits: " + dirty.replaceAll("\\d", "*"));

        // Matches
        System.out.println("Matches digits only: " + "12345".matches("\\d+"));

        // CompareTo
        System.out.println("CompareTo: " + "apple".compareTo("banana")); // negative if less
    }
}
