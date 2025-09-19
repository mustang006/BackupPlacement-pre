# 📘 Java StringBuffer Methods

A list of commonly used methods in the `StringBuffer` class.

---

## 🔧 Modification Methods

- `append(String s)` – Adds the specified string at the end.
- `insert(int offset, String s)` – Inserts the specified string at the given index.
- `replace(int start, int end, String s)` – Replaces characters between start (inclusive) and end (exclusive) with the given string.
- `delete(int start, int end)` – Removes characters between start (inclusive) and end (exclusive).
- `deleteCharAt(int index)` – Deletes the character at the specified index.
- `reverse()` – Reverses the sequence of characters.
- `setCharAt(int index, char ch)` – Sets the character at the specified index.
- `setLength(int newLength)` – Sets the length of the character sequence. Truncates or pads with `\0` as needed.

---

## 🔍 Information Methods

- `charAt(int index)` – Returns the character at the specified index.
- `length()` – Returns the length (number of characters) of the sequence.
- `capacity()` – Returns the current capacity of the sequence.
- `indexOf(String str)` – Returns the index of the first occurrence of the specified substring.
- `lastIndexOf(String str)` – Returns the index of the last occurrence of the specified substring.

---

## ⚙️ Utility Methods

- `ensureCapacity(int minimumCapacity)` – Ensures that the capacity is at least equal to the specified minimum.
- `toString()` – Converts the `StringBuffer` to a `String` object.

---

