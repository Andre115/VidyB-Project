import { useRef, useEffect, useState } from "react";
import styles from "./Teste.module.css"
import axios from "axios";


export default function Teste(){



    const [inf, setInf]= useState({})
    const [arrayUrl, setArrayUrl]= useState([])

    
    const handleUpload= (e) =>{
        e.preventDefault()
        const formData= new FormData()
        formData.append('file', e.target.files[0])
        axios.post("http://localhost:3300/upload", formData)
        .then((res)=> setInf(res))
        .catch((err) => console.log(err))

        setArrayUrl([...arrayUrl, inf])

    }

    console.log(arrayUrl)


    return(
        <div className={styles.teste_container}>  
                <h1 id="minhaID">Meu array: </h1>
    
                <div id="selecionar">
                 
                </div>


                

            <input onChange={handleUpload} type="file" name="file" /> <br ></br>


            <div className={styles.img_container}>
                {inf.data &&
                    (
                        <img src={`http://localhost:3300/images/${inf.data.imageFileName}`} alt="" />

                    )
                }
           </div>
            
        </div>
    )

}