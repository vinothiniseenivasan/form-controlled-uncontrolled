
import { FC, useEffect } from "react";
import { useRef } from "react";



const AutoFocusInput : FC =  () =>  {

    const inputRef = useRef<HTMLInputElement | null>(null);
    useEffect(()=>{
        if(inputRef?.current  != null)
       inputRef.current.focus();
    } )


    return( 
         <input ref={inputRef} type="text" />    
    )
} 

export default AutoFocusInput;