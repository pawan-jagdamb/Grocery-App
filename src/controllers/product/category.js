import Category from "../../models/category";

export const getAllCategories= async(req,reply)=>{
    try {
        
        const categories= await Category.find();
        if(!categories){
            return reply.status(404).send({
                message:"Can not find all categories"
            })
        }
        return reply.status(200).send({
            success:true,
            categories
        })
    } catch (error) {
        return reply.status(500).send({message:"An error occurred",error})

        
    }
}