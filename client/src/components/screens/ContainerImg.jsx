import Retrat from "./Retrat"
import styles from "./screens-styles/ContainerImg.module.css"
import ScreenProvider from "./context/ScreenProvider"
import DelayCount from "./DelayCount"

import NotFound from "../layouts/NotFound"

import { useLocation } from "react-router-dom"

export default function ContainerImg(){

    const location= useLocation()
    
    return(
        <>
        {location.state ? (

            <div className={styles.containerIgm}>
                <DelayCount run={true} />
                <ScreenProvider project={location.state.data}>
                    <Retrat />
                </ScreenProvider >          
            </div>
        ) : (

            <NotFound to={'/'} descript={'Nenhum conteúdos carregado'} text={'Go to Home'} />
        )
        }
        </>
    )


}