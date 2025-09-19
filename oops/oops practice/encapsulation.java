public class encapsulation {

    private String name;
    private int age;

    public void setname(String name) {
        this.name = name;

    }


    // Encapsulation is the process of wrapping data (variables) and code (methods) together as a single unit. It hides the internal details and shows only what is necessary using getters and setters .

    public String getname() {
        return name;
    }

    public void setage(int age) {

        this.age = age;

    }

    public int getage() {
        return age;
    }

    public static void main(String args[]) {
        encapsulation a = new encapsulation();
        a.setname("abhi");
        a.setage(22);
        System.out.println(a.getname());
        System.out.println(a.getage());
    }
}