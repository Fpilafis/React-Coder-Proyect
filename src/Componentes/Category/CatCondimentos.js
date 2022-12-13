import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { condimentos } from '../../Data/condimentos'
import Item from '../Item'

function CatCondimentos() {
    
    const [condiment, setCondiment] = useState([])
/*     const { category } = useParams()
 */
    useEffect(() => {
        getCondiment().then(response => {
            console.log(response)
            setCondiment(response)
        })
    }, [])
    
   const getCondiment = () => { 
    return new Promise((resolve, reject) => {
        /* const condiment = condimentos.find( p => p.category == category ) */
        setTimeout(() => {
            resolve(condimentos)
        }, 200)
    })
    }


  return (
    <div  className='font-serif text-4xl flex justify-center m-5 bg-slate-800'>
        { condiment.map( p => <Item key={p.id} {...p} /> ) }
    </div>
  )
}

export default CatCondimentos