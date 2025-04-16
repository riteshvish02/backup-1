// var arr = [
//   {name:"ritesh"},
//   {name:"akash"},
//   {name:"kishan"},
//   {name:"ab"}
// ]

// var ans = arr.reduce((acc,cv)=>{
//   console.log(acc);
//   return [...acc,cv.name]
// },[])

// // console.log(ans);

// let arr1 = [1,2]

// var ans1 = [...arr1]

// class Rtesh {
//   constructor(name){
//     this.name = name;
//   }
//   displayName(){
//     console.log(this.name);
//   }
// }

// var ans = new Rtesh("rv");
// ans.displayName()
// console.log(ans);


function av(a,b){
    var index = a.findIndex((item)=>item === b)
      a.splice(index,1)
    console.log(index);
    return  a
}


var ans = av([1,2,2,3,'rv'],'rv')
console.log(ans);

