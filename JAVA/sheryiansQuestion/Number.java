import java.util.Scanner;
public class Number{
    
    // public static void main(String[] args) {
    //     //swaping the number without taking third variable
    //    Scanner inp = new Scanner(System.in);
    //    System.out.print("Enter First number ");
    //    int a = inp.nextInt();
    //    System.out.print("Enter Second number ");
    //    int b = inp.nextInt();
    //    System.out.println("before swaping the value a is " + a +" and b is " + b);
    //    a = a+b;
    //    b = a-b;
    //    a = a-b;
    //    System.out.println("after swaping the value a is " + a + " and b is " + b);
    // }

    // public static void main(String[] args) {
    //     //compundInterest calculation
    //     Scanner inp = new Scanner(System.in);
    //     System.out.print("Enter the pricipal amount ");
    //     int p = inp.nextInt();
    //     System.out.print("Enter the Annual percent rate ");
    //     double r = inp.nextDouble();
    //     r = r/100;
    //     System.out.print("Enter the number of years for which the money is invested or borrowed ");
    //     int t = inp.nextInt();   
    //     System.out.print("Number of Compounding Periods "); 
    //     int n = inp.nextInt();

    //     double A  = p *  Math.pow((1 + r/n), n*t);
    //     System.out.println("The future value of the investment after " + t + " years is " + A);
    //     double CI = A - p;
    //     System.out.println("CI is " + CI);
        
    // }

    // public static void main(String[] args) {
    //     //factorial of the number
    //     Scanner inp = new Scanner(System.in);
    //     System.out.print("Enter the number ");
    //     int n = inp.nextInt();
    //     int result = 1;

    //     for(int i = 1; i <= n; i++) {
    //         result = result * i;
    //     }
    //     System.out.println("Factorial of Number " + n + " is " + result);
    // }

// public static void main(String[] args) {
//   Scanner inp = new Scanner(System.in);
//   System.out.print("Enter the range  ");    
//   int range = inp.nextInt();
//   int Evensum = 0;
//   int Oddsum = 0;
//   for(int eve = 0 ; eve <= range; eve++) {
//     if(eve % 2 == 0) {
//         // System.out.println(eve);
//        Evensum += eve;
//     }else{
//         // System.out.println(eve); 
//         Oddsum += eve;
//     }
//   }
//   System.out.println(Evensum);
//   System.out.println(Oddsum);
// }

// public static void main(String[] args) {
//     Scanner inp = new Scanner(System.in);
//     System.out.print("Enter the number ");
//     int num = inp.nextInt();
//     for(int i = 1; i <= num; i++) {
//         if(num%i == 0){
//             System.out.println(i);
//         }
//     }
    
// }


//sum of digits of number
public static void main(String[] args) {
    Scanner inp = new Scanner(System.in);
    System.out.print("Enter the number ");
    int num = inp.nextInt();
    int sum = 0;
    while(num > 0){
        int rem = num % 10;
        sum += rem;
        num = num / 10;
    }
    System.out.println(sum);
 
}


}