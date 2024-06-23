import { Link } from 'react-router-dom'
import logo from '../../images/logo-vidyB-desc.png'
import styles from './styles-layouts/NavBar.module.css'

export default function NavBar(){
    return(
        <nav className={styles.navBar_container}>
            <div className={styles.logo}>
                <Link to={"/"}>
                    <img src={logo} alt="logo-vidyB-desc" />
                </Link>
            </div>
            <ul>
                <li>
                    <Link to={"/signup"}>Inscrever</Link>
                    
                </li>
                <li>
                    <Link to={"/login"}>Conecte-se</Link>
                    
                </li>
            </ul>
           
        </nav>
    )
}