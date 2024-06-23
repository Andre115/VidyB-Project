import styles from "./styles-layouts/ContainerUser.module.css"
//import Login from "../pages/Login"
import { Link } from "react-router-dom"
import logo from "../../images/logo-vidyB.png"
import Button from "../layouts/Button"


export default function ContainerUser({formAppend, to, text}){

    return(

        <div  className={styles.section}>

            <section className={styles.section_left}>
                <Link>
                    <img src={logo} alt="logo VidyB" />
                </Link>

                <div className={styles.decription}>
                    <h2>Bem-vindo de volta!</h2>
                    <p>Não tens uma conta?</p>
                </div>

                <div>
                    <Button text={text} to={to}/>
                </div>

            </section>

            <section  className={styles.section_right}>
                <Link className={styles.logo_mobile}>
                    <img src={logo} alt="logo VidyB" />
                </Link>
                {formAppend}              
            </section>
        </div>
    )
}