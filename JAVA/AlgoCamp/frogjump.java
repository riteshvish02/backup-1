 public class frogjump{
    public static int f(int i,int arr[]){
        if(i >= arr.length-1) return 0;
        int mincost = Integer.MAX_VALUE;
        for(int jump = 1;jump <= 3;jump++){
            if(i+jump < arr.length){
                int val = Math.abs(arr[i]-arr[i+jump])+f(i+jump,arr);
                mincost = Math.min(mincost,val);
            }

        }
        return mincost;
    }
    public static void main(String[] args) {
        //frog problem (i+1,i+2,i+3);
        int arr[] = {10, 30,20};
        System.out.println(f(0,arr));
    }
 }