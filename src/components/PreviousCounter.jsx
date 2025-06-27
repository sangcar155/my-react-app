import { useEffect,useState,useRef } from "react"
//Current count PreviousCount
function PreviousCounter()
{
const [count,setCount] = useState(0);
const previousCountRef = useRef();

useEffect(()=>{
     previousCountRef.current = count;

});
return (
    <div>
<p>Current Count: {count}</p>
<p>Previous Count:{previousCountRef}</p>
<button onClick={setCount(count+1)}>  Click to increase counter  </button>

    </div>
)

}
export default PreviousCounter 