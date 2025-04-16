function download(url,fn){
  console.log("start downloading from",url)
  setTimeout(function process(){
      console.log("completed")
      let save = "dumy data";
      fn(save)
  },3000)
}

function writing(data,fn){
   console.log("start writing")
   setTimeout(() => {
    console.log("completed writing ",data)
    let filename = "output.txt"
    fn(filename);
   }, 3000);
}

function upload(newurl,filename,fn){
    console.log("start uploading on",newurl)
    setTimeout(function express(){
          console.log("file",filename,"uploaded on ",newurl)
          let response = "success"
          fn(response)
    },3000)
}

download("www.ritesh.com",function data(save){
    console.log("downloaded data is",save);
    writing(save,function exec(file){
       console.log("written file is",file)
        upload("www.newurl",file,function end(res){
          console.log(res)

        })
    })
})


