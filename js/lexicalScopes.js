
//1 question


// var Teacher = "ritesh";

// function displayTeacher() {
//     var Teacher = "kishan";
//     console.log(Teacher);
// }

// displayTeacher();
// console.log(Teacher);


//2

// var Teacher = "ritesh";

// function displayTeacher() {
//     var Teacher = "kishan";
//     teachingAssistant = "Nishchal"
//     console.log(Teacher);
// }

// displayTeacher();
// console.log(teachingAssistant);
// console.log(Teacher);


//3

// var Teacher = "ritesh";

// function displayTeacher() {
//     var Teacher = "kishan";
//     teachingAssistant = "Nishchal"
//     console.log(Teacher);
//     console.log(teachingAssistant);
    
// }

// displayTeacher();
// console.log(teachingAssistant);
// console.log(Teacher);



// 4


// function displayTeacher() {
//     teachingAssistant = "Nishchal";
//     console.log(teachingAssistant);
//     var teachingAssistant   = "Ritesh";
    
// }

// displayTeacher();


//5

// fun(x,y)
// var x = 10;
// var y = 11;
// function fun(x,y) {
//     console.log(x+y);
    
// }

//6

// gun()

// var gun = function(){
//     console.log("fizzzbuzzz");
// }

// 7 closures

// function todo(assignment){
//     console.log("inside todo");
    
//     setTimeout(function num(){
//         console.log("completed assignment", assignment);
        
//     },1000)
//     console.log("end of todo");
    
// }

// console.log("starting");
// todo("website")
// console.log("Ending");

//here the question is how assignment is getting used in num evenafter todo is terminated


// 8
// function todo(assignment){
//     console.log("inside todo");
    
//     setTimeout(function num(){
//         console.log("completed assignment", assignment);
//     },1000)
//     assignment = "Appdevelopment";
//     console.log("end of todo");
    
// }

// console.log("starting");
// todo("website")
// console.log("Ending");


// function test(){
//         for(var i = 0; i < 10; i++){
//             let j = i;
//             setTimeout(function(){
//                 console.log(j);
//             },`${j}`*1000)
//         }
// }

// test();


const add = (function rv(){
    let counter = 0;
    return function process(){
        counter += 1;
        console.log(counter);
        return counter;
    }
})();
console.log(add);

console.log(add());

add()

// asynchronous code handling through functions
doTask1(function(result1) {
    doTask2(result1, function(result2) {
        doTask3(result2, function(result3) {
            console.log(result3);
        });
    });
});