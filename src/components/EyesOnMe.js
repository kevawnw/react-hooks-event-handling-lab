import React from 'react'

function EyesOnMe(){
    function vision(){
        console.log('Hey! Eyes on me!')
    }
    
    return (
        <button text= 'Eyes on me'
        onClick = {vision}/>
    )

}
export default EyesOnMe