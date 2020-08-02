import axios from "axios";


const login = async (data) =>{
    try{
        const {email,password} = data
const res = await axios({
    method:"POST",
    url:"http://localhost:4000/api/users/login",
    data:{
        email,
        password
    }

})
console.log(res)
    }
    catch(err){
        console.log(err.response.data);

    }
}

export const register = async (data) =>{
    try{
        console.log("in register")
        const {firstName,lastName,email,phoneNumber,password} = data
const res = await axios({
    method:"POST",
    url:"http://localhost:4000/api/users/signup",
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