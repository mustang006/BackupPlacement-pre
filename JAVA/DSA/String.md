# 📘 Java String Methods

A list of all commonly used methods from the `String` class in Java.

---

## 🔤 Basic Methods

- `length()` – Returns the number of characters in the string.
- `charAt(int index)` – Returns the character at the specified index.
- `isEmpty()` – Checks if the string is empty (`length() == 0`).
- `isBlank()` – Checks if the string is empty or only contains whitespace (Java 11+).
- `equals(String anotherString)` – Compares two strings for exact match (case-sensitive).
- `equalsIgnoreCase(String anotherString)` – Compares two strings, ignoring case.

---

## 🔍 Searching

- `indexOf(String str)` – Returns the index of the first occurrence.
- `lastIndexOf(String str)` – Returns the index of the last occurrence.
- `contains(CharSequence s)` – Checks if the string contains a sequence.

---

## 🔧 Modification

- `toUpperCase()` – Converts all characters to uppercase.
- `toLowerCase()` – Converts all characters to lowercase.
- `trim()` – Removes leading and trailing whitespace.
- `replace(char oldChar, char newChar)` – Replaces all occurrences of a character.
- `replace(CharSequence target, CharSequence replacement)` – Replaces all occurrences of a sequence.
- `replaceAll(String regex, String replacement)` – Replaces using regular expressions.
- `replaceFirst(String regex, String replacement)` – Replaces the first match of the regex.
- `substring(int beginIndex)` – Returns substring from given index to end.
- `substring(int beginIndex, int endIndex)` – Returns substring from begin to end index.

---

## 🔗 Combining Strings

- `concat(String str)` – Concatenates the specified string.
- `join(CharSequence delimiter, CharSequence... elements)` – Joins multiple elements with a delimiter (Java 8+).

---

## 🔠 Comparison

- `compareTo(String anotherString)` – Lexicographically compares two strings.
- `compareToIgnoreCase(String anotherString)` – Compares lexicographically ignoring case.
- `matches(String regex)` – Tests if the string matches the given regular expression.

---

## 🔡 Conversion

- `toCharArray()` – Converts the string to a character array.
- `valueOf(primitive type)` – Converts a primitive type to string.
- `format(String format, Object... args)` – Returns formatted string (like printf).
- `intern()` – Returns the canonical representation from the string pool.

---

## 🔄 Splitting & Joining

- `split(String regex)` – Splits the string using a regex delimiter.
- `split(String regex, int limit)` – Splits with a limit on number of substrings.

---

## 🚦 Check Start/End

- `startsWith(String prefix)` – Checks if the string starts with the given prefix.
- `endsWith(String suffix)` – Checks if the string ends with the given suffix.









# 📌 StringBuilder and StringBuffer in Java

## ✅ What is `StringBuilder`?

- `StringBuilder` is a **mutable** sequence of characters.
- Used for **modifying strings frequently** (e.g., in loops).
- **Not thread-safe**, but **faster** than `StringBuffer`.

### 🔧 Properties of `StringBuilder`

- Mutable – can change content without creating new objects.
- Not synchronized – not safe for multi-threaded environments.
- Faster than `StringBuffer` in single-threaded tasks.
- Belongs to `java.lang` package.

---

## ✅ What is `StringBuffer`?

- `StringBuffer` is a **mutable** sequence of characters.
- **Thread-safe** – all methods are synchronized.
- **Slower** than `StringBuilder` due to synchronization overhead.

### 🔧 Properties of `StringBuffer`

- Mutable – content can be changed.
- Synchronized – safe in multi-threaded environments.
- Slightly slower than `StringBuilder`.

---

## ✅ Common Methods (Both Support)

| Method                                  | Description                               |
| --------------------------------------- | ----------------------------------------- |
| `append(String s)`                      | Adds text at the end                      |
| `insert(int offset, String s)`          | Inserts text at a given index             |
| `replace(int start, int end, String s)` | Replaces characters from `start` to `end` |
| `delete(int start, int end)`            | Deletes characters in range               |
| `reverse()`                             | Reverses the string                       |
| `toString()`                            | Converts to `String` object               |

---

## 🔄 Example (Same for Both)

```java
public class BuilderBufferExample {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello");

        sb.append(" World");
        sb.insert(5, ",");
        sb.replace(0, 5, "Hi");
        sb.delete(2, 3);
        sb.reverse();

        System.out.println(sb.toString()); // Output: dlroW ,iH
    }
}
