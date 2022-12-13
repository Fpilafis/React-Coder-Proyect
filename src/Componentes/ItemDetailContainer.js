import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
/* import ItemDetail from './ItemDetail'
import Tomate from './img/Tomates.jpg' */
import { prodcts } from "../Data/data"
import { condimentos } from '../Data/condimentos'
import Clicker from './Clicker'



function ItemDetailContainer() {

    const [details, setDetail] = useState({})
    const { id } = useParams()

    useEffect(() => {
      getDetail().then(response => {
        setDetail(response)
      })
    
    }, [id])
    

    const getDetail = () => {
        return new Promise ((resolve,reject) => {
          const details = prodcts.find( p => p.id == id )
            setTimeout(() => {
                resolve(details)
            },200)
        })
    }

  return (
    <div className='font-serif text-4xl flex justify-center bg-slate-400 h-vh '>
      {/* { details.map( p => <ItemDetail key={p.id} {...p} /> ) } */}

      <div className="card w-96 bg-base-100 shadow-xl m-2">
        <figure><img src= {details.pictureurl} alt={details.name} /></figure>
        <div className="card-body">
          <h2 className="card-title">{details.id}. {details.name} - ${details.price}</h2>
          <p className="text-xl">{details.description}</p>
          <div>
            <Clicker/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetailContainer