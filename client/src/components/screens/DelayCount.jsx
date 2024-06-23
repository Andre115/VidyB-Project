import { useEffect, useState } from "react"
import styles from "./screens-styles/DelayCount.module.css"

export default function DelayCount({run}) {

    const[count, setCount]= useState(3)
    const [visible, setVisible]= useState(run)

    useEffect(()=> {

        if (!run) {
            setVisible(false)
            return;
        }

        setInterval(()=>{

            count === 0 ? setCount(0) : setCount(count - 1);

        }, 1500)

        setVisible(true);
        const timer= setInterval(()=>{
            setVisible(false)

        }, 6000)

        return ()=> clearTimeout(timer);

 }, [count])

    return(
        <>

        {visible &&
            <div className={styles.containerDelayCount}>
    
                <div>
                    {count === 0 ? 'Go' : count }
                </div>
            </div>

}
        </>
    )
    
}