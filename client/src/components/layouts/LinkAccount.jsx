import { FaFacebook, FaGoogle } from "react-icons/fa"
import styles from "./styles-layouts/LinkAccount.module.css"

import { Link } from "react-router-dom"

export default function LinkAccount(){
    return(
        <div className={styles.other_login}>
                <span>
                    <p>OU</p>
                </span>

                <span className={styles.midia}>
                <Link>
                    <FaFacebook/>
                </Link>

                <Link>
                    <FaGoogle/>
                </Link>
            </span>
        </div>
    )
}