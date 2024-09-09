import axios from "axios"

export const apiInstance = axios.create({});
const Apiconnection = (method , url , bodyDate , headers , params) => {
    let responce = apiInstance({
        method:`${method}`,
        url:`${url}`,
        data: bodyDate? bodyDate : null,
        headers: headers? headers : null,
        params: params? params : null,
    });
    return responce;
}

export default Apiconnection;