import java.util.Scanner;
public class PatternsExtra{
    // public static void main(String[] args) {
    //     //Rhombus
    //     Scanner inp = new Scanner(System.in);
    //     int n = inp.nextInt();
    //     int startsp = n-1;
    //     int star = n;
    //     int midspace = n-2;
    //     int otherStar = 1;
    //     int trows = n;
    //     for(int row = 1; row <= trows; row++){
    //         for(int csp = 1; csp <= startsp; csp++){
    //             System.out.print(" ");
    //         }
    //        if(row == 1 || row == trows){
    //         for(int cstar = 1; cstar <= star; cstar++){
    //             System.out.print("* ");
    //         }
    //        }else{
    //         for(int cstar = 1; cstar <= otherStar; cstar++){
    //             System.out.print("* ");
    //         }
    //         for(int csp = 1; csp <= midspace; csp++){
    //             System.out.print("  ");
    //         }
    //         for(int cstar = 1; cstar <= otherStar; cstar++){
    //             System.out.print("* ");
    //         }
    //        }
    //         System.out.println();
    //         startsp--; 

    //     }

    // }
    public static void main(String[] args) {
        Scanner inp = new Scanner(System.in);
        int n = inp.nextInt();
        int star = n + 1;
        int midstar = 1;
        int midspace = n-1;
        int trows = n;

        for(int row = 1; row <= trows;row++){
           
            if(row == 1 || row == trows){
                for(int cs = 1;cs <= star; cs++){
                    System.out.print( "* ");
                }
            }else{
                for(int cs = 1;cs <= midstar; cs++){
                    System.out.print("* ");
                }
                for(int sp = 1;sp <= midspace; sp++){
                    System.out.print(" ");
                }
                for(int cs = 1;cs <= midstar; cs++){
                    System.out.print("* ");
                }
            }
           
            
            System.out.println();
        }
    }
}