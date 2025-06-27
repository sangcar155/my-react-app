import {useRef,useEffect,useState} from 'react';

function UseRef()
{
 const inputRef = useRef(null); 
 
 const handleFocus = ()=>
 { 
    inputRef.current.focus(); //Access DOM element directly
 };

 return (
<div>
    <input type="text" placeholder='enter your name' ref={inputRef} />
    <button onClick={(handleFocus)}>Focus on input </button>
</div>
 );
   
}

export default  UseRef