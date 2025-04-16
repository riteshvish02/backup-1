// var createCounter = function(n) {
    
//     return function counter() {
//         return n++;
//     };
// };
// var ans =  createCounter(10)
// console.log(ans());
// console.log(ans());

var obj;
var expect = function(val) {
 return obj = {
    toBe: function(dets){
        if(val === dets){
            return true;
        }else{
            throwError("Not Equal");
        }
     },
     notToBe:function(dets){
        if(val !== dets){
          return true;
        }else{
            throw new Error(`Equal`);
        }
     }
     
    }
};
var dets = expect(5).toBe(5)
var det = expect(5).notToBe(4)

// console.log(throw new Error("hello"));


var obj;
var createCounter = function(init) {
    return obj = {
        increment:function(){
            return init = init + 1;
        },
        reset:function(){
            return init = init - 1;
        },
        decrement:function(){
            return init = init - 1;
        }
        
    }
};

  const counter = createCounter(5)
 var a =  counter.increment(); // 6
 var b = counter.reset(); // 5
 var c =  counter.decrement(); // 4
 
 var dey = 4;
 var av = dey;

 var arr = [1,2,3]
 var array = []
 var map = function(arr, fn) {
    for(var  i = 0;i < arr.length;i++){
      var newar =  fn(arr[i]);
      array.push(newar)
    }
    return array;
};
var data = map(arr,function(n){
    return 42;
})
console.log(data);
// var arr = [1,2,3]
//  var map = function(arr, fn) {
//  var array = []
//     for(var  i = 0;i < arr.length;i++){
//       var newar =  fn(arr[i],i);
//       array.push(newar)
//     }
//     return array;
// };
// fn = function plusone(n,i){
//     return n + i;
// }
// const newArray = map(arr,fn)
// console.log(newArray);


// var filter = function(arr, fn) {
//     var filteredArr = [];
//     for(var i = 0;i < arr.length;i++){
//        var data = fn(arr[i])
//     //    console.log(data);
//     }
//     return filteredArr;
// };

// var arr = [10,20,3]

// var arraynew = filter(arr,function(n){
//            return n > 10;
// })

// var filter = function(arr, fn) {
//     const filteredArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i)) {
//         console.log(fn(arr[i],i));
//       filteredArr.push(arr[i]);
//     }
//   }

//   return filteredArr;

// };
// var arr = [0,10,20,30]
// const newArray = filter(arr, function greaterThan10(n) { return n > 10; })
// // console.log(newArray);



// var reduce = function(nums, fn, init) {
//     var reducedarray = [];
//     var val;
//    for(var i = 0;i < nums.length; i++){
      
//      if(i == 0){
//         val = fn(init,nums[i])
//        }
//      else{
//           val = fn(val,nums[i])
//      }
//    } 

//    if(nums.length == 0){
//     reducedarray.push(init)
//    }else{
//     reducedarray.push(val)
        
//    }

//    return reducedarray;
//  };
// var init = 0
// nums = [1,2,3,4]
// console.log(nums.length);
// fn = function sum(accum, curr) { return accum + curr; }

// var ans = reduce(nums,fn,init)
// console.log(ans);


function sumofnNo(){
   var n = 5;
   var sum = 0;
   for(var i = 0;i < n ;i++){
       sum = sum + i;
   }
   return sum;

}
var ans = sumofnNo();
console.log(ans);