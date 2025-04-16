

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
    
//     function upload(newurl,filename){
  
      
//       return new Promise(function(res,rej){
//           console.log("start uploading on",newurl)
//           setTimeout(function express(){
//                 console.log("file",filename,"uploaded on ",newurl)
//                 let response = "success"
//                 res(response)
//                 console.log('done')
//           },3000)
//         })
      
//     }
  
async function process(){
   let x =  await download("www.king")
   let y = await writing(x)
   let z = await upload("www.fuck",y)
}
// console.log("start")
// process()
// console.log("end")

