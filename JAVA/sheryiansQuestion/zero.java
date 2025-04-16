
public class zero {
    public static void main(String[] args) {
        int[] arr = new int[] {0,1,1,0,1,1};
        int j = arr.length - 1;
        int i = 0;
        while(i <= j){
            // System.out.println("work" + i + " " + j);
            // System.out.println(arr[i]);
            if (arr[i] == 0) {
                i++;
                System.out.println("yes");
            }
            else{
                swap(arr,i,j);
                j--;
            }
        }
        display(arr);

    }
    public static void swap(int[] arr, int i, int j){
           int temp =  arr[i];
           arr[i] = arr[j];
           arr[j] = temp;
    }
    public static void display(int[] arr){
        for(int i = 0; i < arr.length; i++){
            System.out.print(arr[i] + " ");
        }
    }

}
