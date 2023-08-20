import React from 'react'
import { Link } from 'react-router-dom'
import './articleDisplay.css'
const Navbar = () => {
  return (
    <header>
    <nav className="navbar">
        <ul>
            <li>
                <Link to="/">US</Link>
            </li>
            <li>
                <Link to="/">World</Link>
            </li>
            <li>
                <Link to="/">Politics</Link>
            </li>
            <li>
                <Link to="/">Business</Link>
            </li>
            <li>
                <Link to="/">Opinion</Link>
            </li>
            <li>
                <Link to="/">Health</Link>
            </li>
            <li>
                <Link to="/">Entertainment</Link>
            </li>
            <li>
                <Link to="/">Style</Link>
            </li>
            <li>
                <Link to="/">Travel</Link>
            </li>
            <li>
                <Link to="/">Sports</Link>
            </li>
            <li>
                <Link to="/">Video</Link>
            </li>
        </ul>
    </nav>
    </header>
  )
}

export default Navbar
