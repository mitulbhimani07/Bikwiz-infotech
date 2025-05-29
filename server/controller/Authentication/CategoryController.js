var Category=require('../../Model/Authentication/CategoryModel')

module.exports.AddCategory=async(req,res)=>{
    try{
        const data=await Category.create(req.body);

        res.status(200).json({
            status:"Success",
            data
        })
    }catch(error){
        console.error("Error in Add Category:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports.GetCategory=async(req,res)=>{
    try{
        const data=await Category.find();

        res.status(200).json({
            status:"Success",
            data
        })
    }catch(error){
         console.error("Error in Category:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}