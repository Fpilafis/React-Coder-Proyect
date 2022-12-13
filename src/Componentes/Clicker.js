import React, { useState } from 'react'

const Clicker = () => {

    // let count = 0;

    const [count, setCount] = useState( 0 )

    const clickHandler = () => { 
        console.log("se hizo click")
        // count = count + 1
        setCount(count + 1)
     }

     const clickRest = () => { 
        console.log("se hizo click")
        // count = count + 1
        if(count> 0){
            setCount(count - 1)
        }
     }

  return (
    <>
    <div className='font-serif text-2xl'>

        <div className='rounded-lg content-center'>
            <button className="btn btn-xs sm:btn-sm md:btn-md  bg-slate-600 m-2 ml-10 mr-5 " onClick={clickRest}>
                <strong>-</strong>
            </button>
            <strong className=''>{ count }</strong>
            <button className="btn btn-xs sm:btn-sm md:btn-md bg-slate-600 m-2 ml-5 mr-10 "  onClick={clickHandler}>
                <strong>+</strong>
            </button>
            <button className='bg-slate-700 btn rounded-lg m-8 p-2'><strong>Agregar al carrito</strong></button>
        </div>
        

    </div>
    
    </>
  )
}

export default Clicker