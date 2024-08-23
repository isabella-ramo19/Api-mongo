import Cabins from '../models/cabins.js'
//get all documents from cabins
export async function getCabins (req,res){
    const cabins = await Cabins.find()
    res.json(cabins)
}
export async function postCabins (req,res){
    const body =req.body //Obtiene el body envia al post un formulario
    let msg ='cabins inserted succesful'
    try {
        const cabins = new Cabins(body) //create the objet cabins (RAM)(lA RAM ES TEMPORAL, NO SIGNIFICA QUE CUANDO EL OBJETO ESTA EN LA RAM NO ESTA EN LA BASE DE DATOS)
        await cabins.save() //save the objet in the database
        res.json({msg:msg}) 
    } catch (error) {
        res.json({msg:error}) 
    }
    
    
}
// Actualizar una cabins    
export async function putCabins  (req,res){
    const id = req.params.id //obtiene el id de la cabins
    const body = req.body //obtiene el body del formulario
    let msg ='cabins updated succesful'
    try {
        const cabins = await Cabins.findByIdAndUpdate(id,body,{new:true}) //actualiza
        res.json({msg:msg}) 
    } catch (error) {
        msg = error
    }

}

// Eliminar un cabins por ID
export async function deleteCabins (req, res) {
    const _id = req.params.id;
    try {
        await Cabins.findByIdAndDelete({_id:_id})
        res.json({ msg: 'cabins deleted successfully' });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// export default {
//     getCabins,
//     postCabins,
//     putCabins,
//     deleteCabins
// };