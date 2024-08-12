let getProducts = async (req,res)=>{
    res.status(200).json({msg:"Hello1"})
}

let items = async (req , res)=>{
    res.status(200).send({msg:"Hello2"})
}

module.exports = {getProducts,items};