## Java Arrays Utility Methods (from `java.util.Arrays`)

| Method                                | Description                                 |
| ------------------------------------- | ------------------------------------------- |
| `Arrays.toString(array)`              | Converts array to a readable string         |
| `Arrays.sort(array)`                  | Sorts the array in ascending order          |
| `Arrays.binarySearch(array, val)`     | Returns index of `val` in sorted array      |
| `Arrays.copyOf(array, newLength)`     | Returns a new copy with given size          |
| `Arrays.copyOfRange(array, from, to)` | Copies range `[from, to)`                   |
| `Arrays.equals(array1, array2)`       | Returns `true` if arrays are equal          |
| `Arrays.fill(array, value)`           | Fills array with the same value             |
| `Arrays.setAll(array, lambda)`        | Sets all elements using a function (lambda) |
| `Arrays.stream(array)`                | Converts array to `Stream` (Java 8+)        |
| `Arrays.asList(array)`                | Converts array to a fixed-size list         |
## Java Arrays Utility Methods

| Method                                | Description                            |
| ------------------------------------- | -------------------------------------- |
| `Arrays.toString(array)`              | Converts array to a readable string    |
| `Arrays.sort(array)`                  | Sorts the array in ascending order     |
| `Arrays.binarySearch(array, val)`     | Returns index of `val` in sorted array |
| `Arrays.copyOf(array, newLength)`     | Returns a new copy with given size     |
| `Arrays.copyOfRange(array, from, to)` | Copies range `[from, to)`              |
| `Arrays.equals(array1, array2)`       | Returns `true` if arrays are equal     |
| `Arrays.fill(array, value)`           | Fills array with the same value        |
| `Arrays.setAll(array, lambda)`        | Sets all elements using a function     |
| `Arrays.stream(array)`                | Converts array to Stream (Java 8+)     |
| `Arrays.asList(array)`                | Converts array to a fixed-size list    |





# Difference Between Array and ArrayList in Java

| Feature               | Array                                                                        | ArrayList                                                   |
| --------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **Size**              | Fixed size (defined at creation)                                             | Dynamic size (can grow/shrink)                              |
| **Data Type Support** | Supports both **primitive** and **object** types (e.g., `int[]`, `String[]`) | Only supports **object** types (e.g., `ArrayList<Integer>`) |
| **Syntax**            | `int[] arr = new int[5];`                                                    | `ArrayList<Integer> list = new ArrayList<>();`              |
| **Performance**       | Slightly faster for fixed-size data                                          | Slight overhead due to dynamic resizing                     |
| **Built-in Methods**  | Limited (length, access by index)                                            | Many methods (`add()`, `remove()`, `contains()`, etc.)      |
| **Resizing**          | Not possible (you must create a new array)                                   | Automatically resizes                                       |
| **Type Safety**       | Can be multi-dimensional and typed at compile-time                           | Requires wrapper classes and generics                       |
| **Memory Use**        | Less memory (especially for primitives)                                      | Slightly more memory due to objects and resizing mechanism  |
| **Usage**             | Best for fixed-size, performance-critical tasks                              | Best when size is unknown or frequently changes             |

---

## ✅ Example of Array

```java
int[] numbers = new int[3];
numbers[0] = 10;
System.out.println(numbers[0]);
