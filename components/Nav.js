import Link from 'next/link'
import {useState} from "react"
import styles from '../styles/Nav.module.css'

const Nav = () => {
    const [dropdown, setDropdown]=useState(false)
    const [subdropdown1, setSubdropdown1] = useState(false);
    const [subdropdown2, setSubdropdown2] = useState(false);

    return (
        <>
        <img src="./logo.png" className={styles['logo']}></img>
        <nav className={styles.nav}>
        <ul>
            <li>
            <Link href='/'>Home</Link>
            </li>
            <li>
            <Link href='/about'>About</Link>
            </li>
            
            <li onClick={()=>setDropdown(!dropdown)}>Distance Education</li>
            {dropdown && (
          <li>
            <li onClick={() => setSubdropdown1(!subdropdown1)}>Gitam</li>
            {subdropdown1 && (
              <li>
                <li>UG</li>
                <li>PG</li>
              </li>

            )}
            <li onClick={() => setSubdropdown2(!subdropdown2)}>SGVU</li>
            {subdropdown2 && (
              <li>
                <li>UG</li>
                <li>PG</li>
              </li>
            )}
          </li>
        )}
            
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
        </>
    )
}

export default Nav
