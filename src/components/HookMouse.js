import React, { useEffect, useState } from "react";

function HookMouse() {
    const[x, setX] = useState(0)
    const[y, setY] = useState(0)



    const logMousePosition = e =>{
console.log('Mouse event')
setX(e.clientX)
setY(e.clientY)
    }
    useEffect( () =>{
        console.log('Useeffect called')
        window.addEventListener( 'mousemove', logMousePosition)

        return() =>{
            console.log('Component unmounting')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
    //empty array to prevent rendering every 
    

    return(
        <div>
Hooks X - {x} Y - {y}

        </div>
    )
}

export default HookMouse;