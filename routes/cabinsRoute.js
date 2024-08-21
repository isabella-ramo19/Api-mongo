import  Router  from "express";
const cabinsRoute=Router();
import { getCabins, postCabins, putCabins, deleteCabins } from '../controllers/cabinsController.js';
cabinsRoute.get('/',getCabins)
cabinsRoute.post('/',postCabins)
cabinsRoute.put('/',putCabins)
cabinsRoute.delete('/',deleteCabins)

export default cabinsRoute