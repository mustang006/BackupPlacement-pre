# Java ArrayList Methods Summary

## ✅ 1. Creation & Adding Elements

| Method                | Description                        | Example                |
| --------------------- | ---------------------------------- | ---------------------- |
| `add(E e)`            | Adds element to the end            | `list.add("Apple")`    |
| `add(int index, E e)` | Inserts element at specified index | `list.add(1, "Mango")` |

---

## 🔍 2. Accessing Elements

| Method           | Description                | Example          |
| ---------------- | -------------------------- | ---------------- |
| `get(int index)` | Returns element at index   | `list.get(0)`    |
| `size()`         | Returns number of elements | `list.size()`    |
| `isEmpty()`      | Checks if list is empty    | `list.isEmpty()` |

---

## 🗑️ 3. Removing Elements

| Method              | Description                        | Example                |
| ------------------- | ---------------------------------- | ---------------------- |
| `remove(int index)` | Removes element at index           | `list.remove(2)`       |
| `remove(Object o)`  | Removes first occurrence of object | `list.remove("Apple")` |
| `clear()`           | Removes all elements               | `list.clear()`         |

---

## 🔁 4. Searching & Checking

| Method                  | Description                    | Example                     |
| ----------------------- | ------------------------------ | --------------------------- |
| `contains(Object o)`    | Checks if element exists       | `list.contains("Mango")`    |
| `indexOf(Object o)`     | Returns first index of element | `list.indexOf("Apple")`     |
| `lastIndexOf(Object o)` | Returns last index             | `list.lastIndexOf("Apple")` |

---

## 🔄 5. Updating & Replacing

| Method                | Description               | Example                 |
| --------------------- | ------------------------- | ----------------------- |
| `set(int index, E e)` | Replaces element at index | `list.set(0, "Orange")` |

---

## 📋 6. Conversion & Copying

| Method      | Description          | Example                                                      |
| ----------- | -------------------- | ------------------------------------------------------------ |
| `toArray()` | Converts to array    | `Object[] arr = list.toArray();`                             |
| `clone()`   | Makes a shallow copy | `ArrayList<String> copy = (ArrayList<String>) list.clone();` |

---

## 📚 7. Sorting (Using `Collections`)

```java
Collections.sort(list);    // Sort in ascending order
Collections.reverse(list); // Reverse order






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
