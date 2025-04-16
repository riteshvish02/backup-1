const { StatusCodes } = require("http-status-codes");
const {Logger} = require("../config");
const AppError = require("../utils/errors/app-error");
class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async Create(data){
        const response = await this.model.create(data);
        return response;
       
    }

    async destroy(data){
         const response = await this.model.destroy({
            where:{
                id:data
            }
         });
         if(!response){
             throw new AppError("Not able to find the resource",StatusCodes.NOT_FOUND)
         }
         return response;
        
     }

     async get(data){
        console.log('get in');
         const response = await this.model.findByPk(data);
         if(!response){
             throw new AppError("Not able to find the resource",StatusCodes.NOT_FOUND)
         }
         return response;
     }

     async getAll(){
        console.log('all get');
         const response = await this.model.findAll();
         if(!response){
            throw new AppError("Not able to find the resource",StatusCodes.NOT_FOUND)
        }
         return response;
        
     }

     async update(id,data){
        console.log(data);
        const response = await this.model.update(data,{
            where:{
                id:id
            }
         });
         if(response.includes(0)){
            throw new AppError("Not able to find the resource",StatusCodes.NOT_FOUND)
         }
         return response;
        
     }
}
module.exports = CrudRepository;