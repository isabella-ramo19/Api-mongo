import express, { json } from 'express';
import dbConnection from '../database/config.js';
import 'dotenv/config';
import cabinsRoute from '../routes/cabinsRoute.js';
class Server{
    constructor(){
        this.app= express();
        this.listen();
        this.dbConnection();
        this.pathCabins = '/api/cabins'
        this.route();
        // this.port = 3000;
        
    }
    async dbConnection(){
        await dbConnection()
    }
    route(){
        this.app.use(json())
        this.app.use(this.pathCabins,cabinsRoute)//call to controller
        

        
    }
    listen(){//dice donde esta corriendo el puerto con el metodo listen 
        this.app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port ${process.env.PORT}`)
        })
  }
}

export default Server;
