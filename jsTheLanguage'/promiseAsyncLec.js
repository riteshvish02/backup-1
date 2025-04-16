console.log("start of file")

function promo(){
    return new Promise(function(res,rej){
        setTimeout(function timer1(){
            console.log("timer1")
            res("t1 promise")
        },10000)
    })
}
setTimeout(function(){
    console.log("timer2")
  var x = promo()
  x.then(function(value){
    console.log("timer",value)
  })
  console.log("chacha")

},0)
let y = Promise.resolve("mera promo")
y.then(function(value){
    console.log(value)
})

setTimeout(() => {
    console.log("t3")
}, 0);

console.log("end")