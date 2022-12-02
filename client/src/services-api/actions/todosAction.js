import axios from "axios";
import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constants/todoConstant";
const getAllTodos = ()=> async (dispatch)=>{
    dispatch({type:GET_TODOS_REQUEST});
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        dispatch({type:GET_TODOS_SUCCESS,payload: res.data})
    }catch(err){
        dispatch({type:GET_TODOS_FAILED, payload:err.message});
    }
}
export default getAllTodos;