import { Link } from "react-router-dom";
import styles from "./styles-layouts/Button.module.css"


export default function Button({type, text, to, handleClick, button}){
    return(
    <>
    {button ? (
        <div className={styles.container_button}>
            <input type={type} onClick={handleClick} value={text} />        
        </div>
    ) : (

        <div className={styles.container_button}>
            <Link onClick={handleClick} to={to}>{text}</Link>        
        </div>
    )

    }
        
    </>
    )
}