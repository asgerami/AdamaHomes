import axios from "axios"
import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS,
     LOGIN_FAILURE,
     LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionType"
import { api, API_URL } from "../../config/api"

export const registerUser=(reqData)=>async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    try {
       const {data}=await axios.post(`${API_URL}/auth/signup`,reqData.userDta)
       if (data.jwt)localStorage.setItem("jwt",data.jwt)
        if (data.role==="ROLE_ADMIN"){
            reqData.navigate("/admin")
        } 
        else{
            reqData.navigate("/")
        }
        dispatch({type:REGISTER_SUCCESS,payload:data.jwt})
        console.log("register success",data )
    } catch (error) {
        console.log("error",error)
        dispatch({type:REGISTER_FAILURE,payload:error})
    }
} // on registerform.jsx  const dispach=useDspach()    on submit dispach(registerUser(userData,navigate))
export const loginUser=(reqData)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try {
       const {data}=await axios.post(`${API_URL}/auth/signin`,reqData.userDta)
       if (data.jwt)localStorage.setItem("jwt",data.jwt)
        if (data.role==="ROLE_ADMIN"){
            reqData.navigate("/admin")
        } 
        else{
            reqData.navigate("/")
        }
        dispatch({type:LOGIN_SUCCESS,payload:data.jwt})
        console.log("login success",data )
    } catch (error) {
        console.log("error",error)
        dispatch({type:LOGIN_FAILURE,payload:error})
    }
}// on loginform.jsx  const dispach=useDspach()    on submit dispach(loginUser(userData,navigate))
export const getUser=(jwt)=>async(dispatch)=>{
    dispatch({type:GET_USER_REQUEST})
    try {
       const {data}=await api.get(`/auth/signin`,{
        headers:{
            Athorization:`Bearer ${jwt}` 
        }
       })
        dispatch({type:GET_USER_SUCCESS,payload:data})
        console.log("userprofile",data )
    } catch (error) {
        console.log("error",error)
        dispatch({type:GET_USER_FAILURE,payload:error})
    }
}//on app.js const dispach=useDspach() 
 // const jwt=localstorage.getItem("jwt")
 //const {auth}=userSelector((store)=>store)
 //useEffect(()=> {dispatch(getUser(auth.jwt || jwt))},[auth.jwt])
export const addToFavorites=({jwt,propertyId})=>async(dispatch)=>{
    dispatch({type:ADD_TO_FAVORITE_REQUEST})
    try {
       const {data}=await api.put(`/api/favorites/add/${propertyId}`,{},{
        headers:{
            Athorization:`Bearer ${jwt}` 
        }
       })
        dispatch({type:ADD_TO_FAVORITE_SUCCESS,payload:data})
        console.log("successfull add to favorite",data )
    } catch (error) {
        console.log("error",error)
        dispatch({type:ADD_TO_FAVORITE_FAILURE,payload:error})
    }
}
export const logout=()=>async(dispatch)=>{
    dispatch({type:LOGOUT})
    try {
        localStorage.clear()
        dispatch({type:LOGOUT})
        console.log("logout success" )
    } catch (error) {
        console.log("error",error)
    }
}