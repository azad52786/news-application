const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;
exports.getCatagory = async( req , res) => {
    try{
        const { category } = req.query;
        // console.log("ii");
        if(!category){
            return res.status(501).json({
                success : false , 
                message : "All Fields are Required"
            })
        }
        const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&apikey=${API_KEY}`
        const response = await axios.get(url);
        console.log(response);
        return res.status(201).json({
            success : true , 
            data : response.data , 
            message : "Successfully Data fetch done"
        });
    }catch(e){
        res.status(401).status({
            success : false , 
            message : "Catagory dataFetch Failed" , 
            error : e , 
        })
    }
}