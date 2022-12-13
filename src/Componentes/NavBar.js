import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {

 
  return (
    <div className="font-serif navbar bg-base-100">
        <div className="flex-1">
            <Link to='/' className="btn btn-ghost normal-case text-xl">Ruxyrius</Link>
        </div>
      <div className='flex justify-center'>
        <div className="btn-group">
          <button className="btn btn-sm"><Link to={`/category/verduras`}>Verduras</Link></button>
          <button className="btn btn-sm"><Link to={`/category/condimentos`}>Condimentos</Link></button>
        </div>
      </div>

        <div className="flex-none">
            <CartWidget />
        </div>
    </div>
  )
}

export default NavBar