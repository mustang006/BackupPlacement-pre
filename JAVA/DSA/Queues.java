import java.util.LinkedList;
import java.util.Queue;

public class Queues {
    public static void main(String[] args) {
        // Create a queue of integers
        Queue<Integer> queue = new LinkedList<>();

        // 1. add(E): Adds element to the queue (throws exception if fails)
        queue.add(10);
        queue.add(20);
        queue.add(30);
        System.out.println("Queue after add: " + queue);

        // 2. offer(E): Adds element (returns false if fails instead of throwing)
        queue.offer(40);
        System.out.println("Queue after offer: " + queue);

        // 3. peek(): Returns head without removing, returns null if empty
        System.out.println("Peek: " + queue.peek());

        // 4. element(): Same as peek() but throws exception if empty
        System.out.println("Element (head): " + queue.element());

        // 5. poll(): Retrieves and removes head, returns null if empty
        System.out.println("Polled: " + queue.poll());
        System.out.println("Queue after poll: " + queue);

        // 6. remove(): Removes and returns head, throws exception if empty
        System.out.println("Removed: " + queue.remove());
        System.out.println("Queue after remove: " + queue);

        // 7. isEmpty(): Checks if the queue is empty
        System.out.println("Is queue empty? " + queue.isEmpty());

        // 8. size(): Returns the number of elements
        System.out.println("Size of queue: " + queue.size());

        // 9. clear(): Removes all elements
        queue.clear();
        System.out.println("Queue after clear: " + queue);
        System.out.println("Is queue empty now? " + queue.isEmpty());
    }
}
