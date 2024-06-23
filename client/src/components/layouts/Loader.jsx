import styles from "./styles-layouts/Loader.module.css"
import loader from "../../images/loader.gif"

export default function Loader(params) {

    return (
        <div className={styles.loader_component} >
            <img className={styles.loader} src={loader} alt="" />

        </div>
    )
    
}