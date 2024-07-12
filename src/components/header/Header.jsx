import React from 'react'
import { Link } from 'react-router-dom'
import header_logo from '../../assets/logo/dictionary-logo.jpeg'
import './header.css'

function Header() {
   return (
        <>
        <header>
            <div className="logo">
                <img src={header_logo} alt="logo" className='img-logo' />
                <h1>Griffins Dictionary</h1>
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/translation">Translation</Link></li>
                </ul>
            </div>
        </header>
        </>
  )
}

export default Header
