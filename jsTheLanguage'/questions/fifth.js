// //


// /Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

 

// Example 1:

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65
// Example 2:

// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
// Explanation:
// Evaluating from right to left ...
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000
// Example 3:

// Input: functions = [], x = 42
// Output: 42
// Explanation:
// The composition of zero functions is the identity function


/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */


var once = function(fn) {
    let hasBeenCalled = false;
    return function(...args){
       if (!hasBeenCalled) {
            hasBeenCalled = true;
            return fn(...args);  // Call fn and return its result the first time
        } else {
            return undefined;  // Return undefined for subsequent calls
        }
    }
};


let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)
onceFn(1,2,3); // 6
onceFn(2,3,6); // returns undefined without calling fn



var addTwoPromises = async function(promise1, promise2) {
 var ans =  await promise1
 var ans2 =  await promise1
 return ans + ans2
};


 addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  .then(console.log); // 4

    