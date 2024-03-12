 
import React, { ChangeEvent , FormEvent, useRef } from "react";
import { FC, useState } from "react"
import AutoFocusInput from "./AutoFocusInput";

const Uncontrolled: FC =() =>
{ 
    function handleSubmit(e:FormEvent)
    {
        e.preventDefault(); 
       
     }

     

    return( 
        <form onSubmit = {handleSubmit}>
            <AutoFocusInput />
            <input type="text" 
                 autoFocus
                name = "firstName"
                placeholder="firstName"
            />
            
            <button> Submit </button>
        </form>
    )

     

} 

export default Uncontrolled;