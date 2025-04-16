const CrudRepository = require("./crud-repo")
const {Agency} = require("../models")

class AirlineRepo extends CrudRepository {
   constructor(){
       super(Agency)
  }
}

module.exports = AirlineRepo;