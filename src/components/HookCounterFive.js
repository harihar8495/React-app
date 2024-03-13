import React, { useState, useEffect } from "react";
 
function HookCounterFive() {
    const[count, setCount] = useState(0)
    const[name, setName] = useState('')


    useEffect( () => {
        document.title = `You clickd ${count} times`
    }, [count])
//count is uses here for conditional rendering because it improves performance. it updates if only count changes
    return(
<div>
    <input type="text" value={name} onChange={ e => setName(e.target.value)}/>
<button onClick={ () => setCount( count + 1)}>click {count}</button>
</div>
    )
}

export default HookCounterFive;