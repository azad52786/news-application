const { default: axios } = require("axios");
const { BASE_URL, SEARCH_BASE_URL } = require("../utils");
require('dotenv').config();
const API_KEY = process.env.API_KEY;
exports.getSearchData = async (req , res) => {
    try{
        // console.log(req.quary)
        const { q } = req.query;
        console.log(q);
        if(!q){
            return res.status(501).json({
                success : false , 
                message : "Query is Required !!!"
            })
        }
        const response = await axios.get(SEARCH_BASE_URL + `?q=${q}&lang=en&country=us&max=10&apikey=` + API_KEY);
        console.log(response.data);
        
        return res.status(201).json({
            success : true , 
            message : "Search data is Successfully Fetched" , 
            data : response.data
        })
        
    }catch(e){
        return res.status(401).json({
            success : false , 
            message : "Internal Server Error!!" , 
            error : e.message
        })
    }
}