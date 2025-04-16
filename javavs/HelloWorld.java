import java.util.Scanner; 
public class HelloWorld {
    
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        // int val = scan.nextInt();
        // val = 2;
        // if(val%2  == 0){
        //     System.out.println("The number is even");
        // }else{
        //     System.out.println("The number is odd");
        // }
        // int angle1 = scan.nextInt();
        // int angle2 = scan.nextInt();
        // int angle3 = scan.nextInt();
        // if(angle1 + angle2 + angle3 == 180){
        //     System.out.println("The triangle is valid");
        // }else{
        //     System.out.println("The triangle is not valid");
        // }
        // int year = scan.nextInt();
    
        //      boolean ans1 =  year%4==0 && year%100 == 0 && year%400 == 0;
        //      boolean ans2 =   year%100 == 0 && year%400 == 0;

        // if(ans1 || ans2){
        //     System.out.println("The year is a leap year");
        // }else{
        //     System.out.println("The year is not a leap year");
        // }

        int num1 =  scan.nextInt();
        int num2 =  scan.nextInt();
        int num3 =  scan.nextInt();

        if(num1 >= num2 && num1 >= num3) {
            System.out.println("num1 is biggeest number");
        }else if(num2 >= num1 && num2 >= num3) {
            System.out.println("num2 is big");
        }else{
            System.out.println("num3 is big");
        }


    }
}
