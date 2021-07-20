import axios from  "axios";

let axiosOptions = {
    baseURL:"http://localhost:4000"
}

let token  = localStorage.getItem("token");
if(token){
    let headers = {
        "Authorization": `Bearer ${token}`
    }

    axiosOptions.headers = headers;
}

export const HttpsReq =axios.create( axiosOptions )