 
import React, { ChangeEvent , FormEvent, useRef } from "react";
import { FC, useState } from "react"
import AutoFocusInput from "./AutoFocusInput";

const Uncontrolled: FC =() =>
{ 
    function handleSubmit(e:FormEvent)
    {
        e.preventDefault(); 
       
     }

     const inputRef = useRef(null);

    return( 
        <form onSubmit = {handleSubmit}>
            <AutoFocusInput />
            <input type="text" 
                ref = {inputRef}
                name = "firstName"
                placeholder="firstName"
            />
             <input type="text" 
               
                name = "lastName"
                placeholder="lastName"
            />
            <button> Submit </button>
        </form>
    )

     

} 

export default Uncontrolled;