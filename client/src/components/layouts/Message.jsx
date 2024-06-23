import styles from './styles-layouts/Message.module.css'
import { useEffect, useState } from 'react'

export default function Message({msg, type, hidden, setHook}){
    const [visible, setVisible]= useState(false)

    useEffect(()=>{
        if (!msg){
            setVisible(false);
            return;
        } 

        setVisible(true);

        let timer= setTimeout(()=>{
            setVisible(false);
            setHook(false)

        }, 7000);

        return ()=> clearTimeout(timer);


    }, [msg])

    return(

        <>
        {visible &&
        (
            <div className={`${styles.message_container} ${styles[type]}  ${styles[hidden]}`}>
                <p>{msg}</p>
            </div>
        )
        }
           
        
        </>


        
    )
}