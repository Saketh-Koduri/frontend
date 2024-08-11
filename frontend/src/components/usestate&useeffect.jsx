import React,{useState,useEffect} from "react";

export const Usestate_=()=>{
    const [count, setCount] = useState(0);

    const count1=()=>{
        setCount(count+1)
    }
    // useEffect(() => {
    //     setCount(count + 1)
    // }, [count])

    return (
        <div>
            <button onClick={count1}>count is:{count}</button>
        </div>
    )
    }

    // export default Usestate_