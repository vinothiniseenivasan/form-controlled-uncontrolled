
import React, { ChangeEvent , FormEvent } from "react";
import { FC, useState } from "react"

const Controlled: FC =() =>
{
    const [value ,setValue] = useState({
        firstName : '' ,
        lastName : ''
    });  

    const handleChange = ( e  :  ChangeEvent<HTMLInputElement>   ) =>
    {
        
      const newName  = e.target.name;
      const newValue = e.target.value;
      
      
      setValue( (prevValue) =>(
            {
                ...prevValue ,
                [newName] :newValue

            }
         )
      )
        }
         
    

    function handleSubmit(e:FormEvent)
    {
        e.preventDefault(); 
        console.log(value);   
    }

    return(
        <form onSubmit = {handleSubmit}>
            <input type="text" 
                onChange =  {handleChange} 
                name = "firstName"
                placeholder="firstName"
            />
             <input type="text" 
                onChange =  {handleChange} 
                name = "lastName"
                placeholder="lastName"
            />
            <button> Submit </button>
        </form>
    )

     

} 

export default Controlled