import styles from "./styles-layouts/NotFound.module.css"
import Button from "../layouts/Button"

export default function NotFound({descript, text, to}){

    return(
        <div  className={styles.NotFoundContainer}>
            <div className={styles.bg}>
                <p >
                    {descript}
                </p>
                <div><Button to={to} text={text} /></div>
            </div>
        </div>
    )


}