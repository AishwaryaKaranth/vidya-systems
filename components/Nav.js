import Link from 'next/link'
import {useState} from "react"
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    const [dropdown, setDropdown]=useState(true)
    return (
        <nav className={navStyles.nav}>
        <ul>
            <li>
            <Link href='/'>Home</Link>
            </li>
            <li>
            <Link href='/about'>About</Link>
            </li>
            <li>
            <button onClick={()=>setDropdown(!dropdown)}>Distance Education</button>
            {dropdown &&  <ul>
            <li>
              <Link href="/ug">
                UG
              </Link>
            </li>
            <li>
              <Link href="/ug">
                PG
              </Link>
            </li>
            </ul>}
            </li>
            <li>
            <Link href='/faq'>FAQ</Link>
            </li>
            <li>
            <Link href='/contact'>Contact</Link>
            </li>
        </ul>
        
        <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
        </div>
        </nav>
    )
}

export default Nav
