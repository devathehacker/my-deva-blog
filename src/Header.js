import logo from './logo.svg'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header(){
    return (
    <div className="header">
        <div className="nav-bar">
            <div className="logo-container">
                <img src='https://wallpaper.dog/large/20527587.jpg' className='logom-img'/>
            </div>
            <ul className='nav-menu'>
                <li><b><NavLink to='/Home'>Your Home</NavLink></b></li>
                <li><b><NavLink to='/About'>Know Me</NavLink></b></li>
                <li><b><NavLink to='/BlogList'>BLOG YO</NavLink></b></li>
                <li><b><NavLink to='/contact'>Contact</NavLink></b></li>
            </ul>
        </div>
        <div className='header-container'>
            <div className='header-content'>
                Hey My friends!!!
            </div>
        </div>
    </div>
    )
}

export default Header