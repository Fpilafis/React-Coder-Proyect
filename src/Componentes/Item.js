import React from 'react'
import { Link } from 'react-router-dom'
import Clicker from './Clicker'

function Item({id, name , description, price, pictureurl}) {
  return (
    <>
      <div className="card w-96 bg-base-100  shadow-xl m-2">
        <figure><img src= {pictureurl} alt={name} /></figure>
        <div className="card-body">
          <h2 className="card-title">{id}. {name} - ${price}</h2>
          <p className="text-xl">{description}</p>
          <Link to={`/item/${id}`} className='btn'>description</Link>
          <div>
            <Clicker/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Item