import styles from "./styles-pages/MainVid.module.css"

import FormDefault from "../screens/forms/FormDefault"
import NavBar from "../layouts/NavBar"

export default function MainVid(){

    return(
        <>
            <NavBar />
            <div className={styles.container_mainVid}>
                
                <FormDefault/>     
            </div>
        </>
    )}
