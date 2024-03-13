import React, { useState } from "react";

function Counter() {
  const[count, setCount] = useState(0)

  
    return(
<div>
    <h1>Hariharan</h1>
<button onClick={ ()=>setCount( count + 1 )}> clicked {count}</button>
</div>
    )
}

export default Counter;