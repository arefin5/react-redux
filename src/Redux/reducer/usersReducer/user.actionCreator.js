import * as actionTypes from './users.actionTypes'
import axios from 'axios'
import { baseUrl } from '../baseUrl'
export const devloperDetailsErr=()=>({
    type:actionTypes.DEVLOPER_DETAILS_ERROR
})
export const devloperDetails=devsdet=>({
    type:actionTypes.DEVLOPER_DETAILS ,
    payload:devsdet
})
export const fetchDevloper=()=>dispatch=>{
    dispatch(devloperDetailsErr()) ;
    axios.get(baseUrl+'devsdet')
    .then(response=>response.data)
    .then(devsdet=>dispatch(devloperDetailsErr(devsdet)))
}

// 275 clear   