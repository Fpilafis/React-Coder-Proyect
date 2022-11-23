import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div className="font-serif navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Ruxyrius</a>
        </div>
        <div className="flex-none">
            <CartWidget />
        </div>
    </div>
  )
}

export default NavBar