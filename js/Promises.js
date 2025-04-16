//promises are the javascript object that work as a readability enchancers 
// also they act as a placeholder for the data that we hope to get back from some future task
// we can also attach some functionality to the promise

function promise(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            // if the task is successful
            resolve('Task completed successfully!');
        }, 2000);
    })
}

let a = promise().then((res)=>{
    console.log(res);
    return res;
})

a.then((res)=>{
    
})