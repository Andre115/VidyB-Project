import Input from "../form/Input"
import Button from "../layouts/Button"
import styles from "./styles-pages/Login.module.css"
import { MdEmail, MdKey } from "react-icons/md"
import { Link } from "react-router-dom"
import LinkAccount from "../layouts/LinkAccount"

export default function Login(){
    return(

        <div className={styles.container_login}>
            <h3>Entrar</h3>
            <form >
                <Input
                name={'email'}
                id={'email'}
                type={'email'}
                placeholder={'Digite seu email'}
                FaIcon={<MdEmail/>}
                
                />


                <Input
                name={'password'}
                id={'password'}
                type={'password'}
                placeholder={'Digite sua senha'}
                FaIcon={<MdKey/>}
                
                />
                <Button text={'Entrar'}/>

                <div className={styles.forgot}>
                    <Link>
                    Esqueceu a senha?
                    </Link>
                </div>

                <LinkAccount />

            </form>
        </div>
    )
}