import Apiconnection from "./Apiconnection"
import { BASE_URL } from "../utils";

export const getSearchData = async(SearchInput) => {
    // console.log(SearchInput)
    try{
        const res = await Apiconnection('get' , BASE_URL + "/getSearchData", null , null , {q : SearchInput})
        console.log(res)
        if(!res.data.success){
            throw new Error("Server Error Encounter");
        }
        return res.data?.data;
    }catch(e){
        console.log(e)
    }
}