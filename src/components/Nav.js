import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Nav = props => {

  return(
    <nav>
      <Link to='/'><button>Home</button></Link>
    </nav>
  )

}

export default Nav
