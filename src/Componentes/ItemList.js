import React, { useEffect, useState } from 'react'
import Item from './Item'
import { prodcts } from "../Data/data"
import { condimentos } from "../Data/condimentos"
import NavBar from './NavBar'


function ItemList() {



    const [products, setProducts] = useState([])
    const [condiment, setCondiment] = useState([])


    useEffect(() => {
        getProduct().then(response => {
            console.log(response)
            setProducts(response)
        })
    }, [])
    
   const getProduct = () => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(prodcts)
        }, 200)
    })
    }



    useEffect(() => {
        getCondiment().then(response => {
            console.log(response)
            setCondiment(response)
        })
    }, [])
    
   const getCondiment = () => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(condimentos)
        }, 200)
    })
    }

   /*  const randomPromise = () => {
        const productPromise = new Promise((resolve, reject) => {
            const rand = Math.random()
            console.log(rand)
            if(rand> 0.5){
                resolve("Se resolvió")
            }
            reject("Se rechazo ")
        } )
        productPromise.then( ( response ) => {
            console.log("respuesta: ", response)
        } ).catch((err) => {
            console.log("error:", err)
        })
    }     */
  
  return (
    <div >
       <div  className='font-serif text-6xl flex justify-center pt-7'><h1>Catálogo</h1></div>
       <div  className='font-serif text-4xl flex justify-center m-5'>
            { products.map( p => <Item key={p.id} {...p} /> ) }
       </div>
       <div  className='font-serif text-4xl flex justify-center m-5'>
            { condiment.map( p => <Item key={p.id} {...p} /> ) }
       </div>
    </div>
  )
}

export default ItemList