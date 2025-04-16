// do {
//     console.log("hello bhaiii!");
// }
// while(false)
// var i = 0;

//     while(i < 20){
//         i++;
//         console.log("hello");
        
//     }

let obj = {
    name: "John",
    age: 30,
    city: "New York"
}


for(let dets in obj){
    // console.log(dets);
    console.log(obj[dets]);
    // console.log(obj.dets);
    
    
}

const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr) {
  console.log(i);
}


// for()
// let arrr = [1,23,4]
// var ass = arrr.filter((elem,index)=> console.log(elem))
// console.log(ass);

var n = 5;
var result = 1;

for(let i = 1; i <= n; i++){
  result = result * i;
}
console.log(result);

function rv(){
  for(let i = 0; i<10;i++){
    if(i==9){
      return i
    }
  }
}

console.log(rv());



