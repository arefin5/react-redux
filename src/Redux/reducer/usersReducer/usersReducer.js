import * as actionTypes from './users.actionTypes'
import usersInitialState from './users.initialState'
const  usersReducer=(state=usersInitialState,action)=>{
    switch(action.type){
        case actionTypes.DEVLOPER_DETAILS_ERROR :
            return{
                ...state ,
                isLoading:true ,
                devsdet:[]
            };
        case actionTypes.DEVLOPER_DETAILS :
            return{
                ...state ,
                isLoading:false ,
                devsdet:action.payload
            };
            default : return state
    }
}
export default usersReducer ;