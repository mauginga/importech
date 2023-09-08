import { useState } from "react"

const Contador = () => {
        const [count , setCount] = useState(1)

        const handCount = () => setCount(count +1)
    
    return (
        <div>
            {count}
            <hr/>
            <button onClick={handCount}>Sumar</button>
        </div>
    )
}

export default Contador;

// useState es un hook que te da react, para utilizar una variable y un seteador que actualiza la variable
// comenza con el prefijo "use" todos los Hooks
