import { Schema, model, version } from "mongoose";

const CabinsSchema = Schema({
    name:{
        type:String,
        required:[true, "The field 'name' is required"],
        unique:true
    },
    description:{
        type:String,
        required:[true, "the field 'description' is required"],
        maxlength: [10, 'Max 10 characters'],
        minlength: [0, 'Min 0 characters']
    },
    price:{
        type:Number,
        required:[true, "The field 'price' is required"],
        min: [0, 'Min 0']
    },
    comfort:{
        type:String,
        required:[true, "The field 'comfort' is required"],
        enum: ["Basic", "Medium", "High"]
    },
    numbrer_cabin:{
        type:Number,
        required:[true, "The field 'numbrer_cabin' is required"],
        min: [1, 'Min 1'],
        max: [10, 'Max 10']
    }
},{
    versionKey: false
});
export default model('Cabins', CabinsSchema,'cabins');