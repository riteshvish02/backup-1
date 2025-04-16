public class ArrayBasic{
    public static void main(String[] args) {
        //array is collection of similar types of data//
        int[] arr = {1,2,3,4,5};
        int i = 0;
        int j = 2;
        int[] other  =  {100,200,300};
        // System.out.println(arr[i]+ "" + arr[j]);
        // swap(arr,i,j);
        // System.out.println(arr[i]+ "" + arr[j]);

        
        System.out.println(arr[0]);
        System.out.println(other[0]);
        swap(arr,other);
        System.out.println(arr[0]);
        System.out.println(other[0]);
        
        
    }
    public static void swap(int a[],int i,int j){
        int temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
      public static void swap(int a[],int b[]){
        System.out.println(a[0]);
        System.out.println(b[0]);
        int[] temp = a;
        a = b;
        b = temp;
        a[0] = 600;
        b[0] = 0;
        System.out.println(a[0]);
        System.out.println(b[0]);
    }
}