// function download(url){
//     return new Promise(function(res,rej){
//         console.log("start downloading",url)
//         setTimeout(() => {
//            console.log("completed") 
//            var data = "dumy data"
//            res(data)
//         }, 2000);
//     })
// }

// // var x = download("www.ritesh.com")
// // console.log(x)


// //promise creation for downloading writing and uploading something

// // function download(url){
// //   return new Promise(function(res,rej){
// //     console.log("start downloding from",url)
// //     setTimeout(function process(){
// //         let save = "dumy data";
// //         res(save)
// //     },3000)
// //   })
   
// //   }
  
// //   function writing(data){

// //     return new Promise(function(res,rej){
// //         console.log("start writing")

// //         setTimeout(() => {
// //             console.log("completed writing ",data)
// //             let filename = "output.txt"
// //             res(filename);
// //            }, 3000);
// //       })

     
    
// //   }
  
// //   function upload(newurl,filename){

    
// //     return new Promise(function(res,rej){
// //         console.log("start uploading on",newurl)
// //         setTimeout(function express(){
// //               console.log("file",filename,"uploaded on ",newurl)
// //               let response = "success"
// //               res(response)
// //         },3000)
// //       })
    
// //   }
  

  
  
// // let x = download("www.ritesh")
// // let y = writing(x)
// // let z = upload("www.",y)


// //when promise get resolved after then using .then to execute some functions 


// // function download(url){
// //     return new Promise(function(res,rej){
// //         console.log("start downloading",url)
// //         setTimeout(() => {
// //            console.log("completed") 
// //            var data = "dumy data"
// //            res(data)
// //         }, 2000);
// //     })
// // }
// 
// // var x = download("www.ritesh.com")
// // x.then(function(value){
// // console.log(value)
// // return 
// // })






// // // // function download(url){
// // // //   return new Promise(function(res,rej){
// // // //     console.log("start downloding from",url)
// // // //     setTimeout(function process(){
// // // //         let save = "dumy data";
// // // //         res(save)
// // // //         console.log("downloaded successfully")
// // // //     },3000)
// // // //   })
   
// // // //   }
  
// // // //   function writing(data){

// // // //     return new Promise(function(res,rej){
// // // //         console.log("start writing")

// // // //         setTimeout(() => {
// // // //             console.log("completed writing ",data)
// // // //             let filename = "output.txt"
// // // //             res(filename);
// // // //             console.log("written successfully")
// // // //            }, 3000);
// // // //       })

     
    
// // //   }
  
// //   function upload(newurl,filename){

    
// //     return new Promise(function(res,rej){
// //         console.log("start uploading on",newurl)
// //         setTimeout(function express(){
// //               console.log("file",filename,"uploaded on ",newurl)
// //               let response = "success"
// //               res(response)
// //         },3000)
// //       })
    
// //   }
  

// let down = download("www.firi.com")
// down.then(function(value){
//     console.log("downloaded data is",value)
//     let write = writing(value)
//     write.then(function(value){
//      console.log("written file is",value)
//      let uplod = upload("www.newurl",value)
//      uplod.then(function(value){
//         console.log(value)
//      })
//     })
// })



function download(url){
  return new Promise(function(res,rej){
    console.log("start downloding from",url)
    setTimeout(function process(){
        let save = "dumy data";
        res(save)
    },3000)
  })
   
  }
  
  function writing(data){

    return new Promise(function(res,rej){
        console.log("start writing",data)

        setTimeout(() => {
            console.log("completed writing ")
            let filename = "output.txt"
            res(filename);
           }, 3000);
      })

     
    
  }
  
  function upload(newurl,filename){

    
    return new Promise(function(res,rej){
        console.log("start uploading on",newurl)
        setTimeout(function express(){
              console.log("file",filename,"uploaded on ",newurl)
              let response = "success"
              res(response)
              console.log('done')
        },3000)
      })
    
  }
  

  
console.log('start')
var x =  download("www.ritesh")
x.then(function(value){
  console.log("downloaded data is",value)
  for(var i = 0;i<10000;i++){

  }
  return value
})
let c = x.then(function(value){
  console.log("yoyo",value)
  return value
}).then(function(value){
  
  return writing(value)

})
console.log(c);

c.then(function(value){
  console.log("writing compleletd the written file is",value)

  return upload("www.newurl",value)
})
console.log("end")