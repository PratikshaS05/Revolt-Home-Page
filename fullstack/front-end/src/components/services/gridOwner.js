import axios from "axios";
import Cookie from "js-cookie"



const login = async (data) =>{
    try{
        const {email,password} = data
const res = await axios({
    method:"POST",
    url:"http://localhost:4000/api/gridOwner/login",
    data:{
        email,
        password
    }

})
Cookie.set('jwt', res.data.token, { expires: 365 });
Cookie.set('user', res.data, { expires: 365 })

return res
    }
    catch(err){
        console.log(err.response.data);

    }
}

export const register = async (data) =>{
    try{
        
        const {firstName,lastName,email,phoneNumber,password} = data
const res = await axios({
    method:"POST",
    url:"http://localhost:4000/api/gridOwner/signup",
    data:{
        firstName,
        lastName,
        email,
        phoneNumber,
        password
    }

})
console.log(res)
    }
    catch(err){
        console.log(err.response.data);

    }
}
export default login;