const axios = require("axios")
axios.get("http://www.omdbapi.com/?t=comedy&apikey=33248d70")
.then(function(response){
   console.log(response.data)
})