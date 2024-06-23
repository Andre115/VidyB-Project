
import styles from "./styles-layouts/Confirm.module.css"


export default function Confirm({ask, aswer_1, aswer_2, handleOnchange}) {

    return(
        <div  className={styles.confirm_container}>
            <div className={styles.confirm}>
                <span>{ask}?</span>

                <div>
                    <button onClick={handleOnchange}>{aswer_1}</button>
                    <button onClick={handleOnchange}>{aswer_2}</button>                 
                </div>

            </div>

        </div>
    )

    
}