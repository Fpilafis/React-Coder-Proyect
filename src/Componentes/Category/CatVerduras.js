import React, { useEffect, useState } from 'react'
import Item from '../Item'
import { prodcts } from "../../Data/data"
import { useParams } from 'react-router-dom'


function CatVerduras() {

    const [products, setProducts] = useState([])
/*     const { category } = useParams()
 */
    useEffect(() => {
        getProduct().then(response => {
            console.log(response)
            setProducts(response)
        })
    }, [])
    
   const getProduct = () => { 
    return new Promise((resolve, reject) => {
/*         const products = prodcts.find( p => p.categoryid == category )*/
        setTimeout(() => {
            resolve(prodcts)
        }, 200)
    })
    }


  return (
    <div  className='font-serif text-4xl flex justify-center m-5 bg-slate-800'>
        { products.map( p => <Item key={p.id} {...p} /> ) }
    </div>
  )
}

export default CatVerduras