
import java.util.ArrayList;


public class rescursion{
  public static  String map[] = {"","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};
    public static ArrayList<String> result = new ArrayList<String>();
    public static void f(String str,int idx,String output){
        System.out.println("inside");
        if(idx == str.length()){
            result.add(output);
            return;
        }
        int digit = str.charAt(idx) - '0';
        for(int k=0;k< map[digit].length();k++){
            System.out.println(k);
            f(str,idx+1,output+map[digit].charAt(k));
        }
    }
    public static void main(String[] args){
       System.out.println(letterCombinations("23"));
    }
   public static ArrayList<String> letterCombinations(String digits) {
        int idx = 0;
        f(digits,idx,"");
        return result;
     }  
}