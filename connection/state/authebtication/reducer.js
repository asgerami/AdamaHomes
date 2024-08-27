const { favoritePresent } = require("../../config/logic")
const { REGISTER_REQUEST, LOGIN_REQUEST, 
    GET_USER_REQUEST, ADD_TO_FAVORITE_REQUEST, 
    REGISTER_SUCCESS, LOGIN_SUCCESS, ADD_TO_FAVORITE_SUCCESS,
     REGISTER_FAILURE, LOGIN_FAILURE, GET_USER_FAILURE, 
     ADD_TO_FAVORITE_FAILURE } = require("./actionType")

const initalState={
    user:null,
    isloading:null,
    error:null,
    jwt:null,
    favorite:[],
    success:null
}
export const authReduser=(state=initalState,action)=>{
    switch (action.type){
        case REGISTER_REQUEST:
            case LOGIN_REQUEST:
                case GET_USER_REQUEST:
                        case ADD_TO_FAVORITE_REQUEST:
        return{...state,isloading:true,error:null,success:null}
        case REGISTER_SUCCESS:
            case LOGIN_SUCCESS:
            return{...state,isloading:false,jwt:action.payload,success:"registration success"}
        case ADD_TO_FAVORITE_SUCCESS:
            return{...state,isloading:false, 
                favorite:favoritePresent(state.favorite,action.payload)
                ?state.favorite.filter((item)=>item.id!==action.payload.id)
                :[action.payload,...state.favorite]}
                case REGISTER_FAILURE:
                    case LOGIN_FAILURE:
                        case GET_USER_FAILURE:
                                case ADD_TO_FAVORITE_FAILURE:
                return{...state,isloading:false,error:action.payload,success:null}
        default :
        return state               

    }
}