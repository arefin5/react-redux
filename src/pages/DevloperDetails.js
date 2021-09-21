import React from 'react'
const DevloperDetails = props => {
    // console.log(props)
    return (
        <div>
           <h1 onClick={props.PropNameSelect}>{props.devloper.name}</h1>
        </div>
    )
}
export default DevloperDetails
