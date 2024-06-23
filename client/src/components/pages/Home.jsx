import Button from "../layouts/Button"
import styles from "./styles-pages/Home.module.css"
import { Link } from "react-router-dom"
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa"
import lamp from "../../images/lampada.png"
import NavBar from '..//layouts/NavBar'


export default function Home(){

    return(     
        
        <>

            <NavBar />

            <div className={styles.container_home}>
                <div className={styles.lamp}>
                    <img src={lamp} alt="lampada" />
            </div>

            <h1>
                <span className={styles.hello}>Hello</span> 
                <span className={styles.total_name}>Vidy
                    <span className={styles.letterB}>B</span>
                </span>
            </h1>

            <p>
                Comece agora a criar os seus vídeo de maneira dinâmica sem parar para todas as plataformas sem restrições autorias
            </p>

            <Button text={'Começar agora'} to={'mainvid'}/>

            <div className={styles.social}>
                <span>Siga-nos</span>
                <div>
                    <Link className={styles.fb}>
                        <FaFacebook/>
                    </Link>

                    <Link className={styles.tk}>
                        <FaTiktok/>
                    </Link>

                    <Link className={styles.yt}>
                        <FaYoutube/>
                    </Link>
                </div>
            </div>
                    
        </div>

        </>
    )
}