const CrudRepository = require("./crud-repo")
const {flight,Agency,Airport,City} = require("../models")
const {Sequelize} = require('sequelize')
const db = require('../models')
const {AddrowLockOnFlights} = require("./query")
class FlightRepo extends CrudRepository {
   constructor(){
       super(flight)
  }
 async getAllFlights(filter,sort){
     console.log("called");
     console.log(filter);
      const response = await flight.findAll({
        where: filter,
        order:sort,
        include:[
          {
            model: Agency,
            required: true,
            as:"AgencyDetail"
          },
          {
            model:Airport,
            required: true,
            as:"DepartureAirport",
            include:{
             model:City,
             required:true,
            },
            on:{
              col1:Sequelize.where(Sequelize.col("flight.departureAirportId"), "=" , Sequelize.col("DepartureAirport.code"))
            }
          },
          {
            model:Airport,
            required: true,
            as:"ArrivalAirport",
            include:{
              model:City,
              required:true,
             },
            on:{
              col1:Sequelize.where(Sequelize.col("flight.arrivalAirportId"), "=" , Sequelize.col("ArrivalAirport.code"))
            }
          }
        ]
      })
      console.log(response);
      return response;

  }
 
  async UpdateRemainingSeats(flightId,seats,dec = true){
    await db.sequelize.query(AddrowLockOnFlights(flightId))
    const Flight = await flight.findByPk(flightId);
    if(+dec){
      const  response = await Flight.decrement('totalSeats', { by: seats });
      return response;
    }else{
      const  response = await Flight.increment('totalSeats', { by: seats });
      return response;
    }
  }
}

module.exports = FlightRepo;