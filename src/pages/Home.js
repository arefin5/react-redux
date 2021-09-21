import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevloper } from "../Redux/reducer/usersReducer/user.actionCreator";
const Home = () => {
 const dispatch = useDispatch() ;
 const {isLoading ,devsdet}=useSelector(state=>state.devsdet)
 console.log(useSelector(state => state.devsdet))
useEffect(()=>{
   dispatch(fetchDevloper())
},[])
    return (
        <div>
           	{/* {isLoading && <h3>Loading...</h3>} */}
               {devsdet && devsdet.map((user) => <h5 key={user.id}>{user.name}</h5>)}
        </div>
    )
}
export default Home
