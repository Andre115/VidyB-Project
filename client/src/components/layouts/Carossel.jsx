import styles from "./styles-layouts/Carossel.module.css"
import { useEffect, useState } from "react";

import Descript from "../screens/desc_screen/Descript"
import Title from "../screens/desc_screen/Title"
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Carossel({arrayData, pos, duble}){

    function handleOnChange(event) {
        event.preventDefault()
        toast.warning('Ação não disponível!!', {autoClose: 3000})
        
    }

    //<img src={data.screen_one.url_image_1} alt="image" />
  
        const myRender= arrayData.map((data, index)=> {
            if (duble) {
                return(

                <div key={index} className={`${styles.container_images_duble} ${styles[pos]}`}>

                        <div className={styles.cont}>

                            <div className={styles.container_item}>
                                <img src={data.screen_one.url_image_1} alt="image" />

                                <Descript
                                positions={{posX: pos[0], posY: pos[1]}}
                                fontZise={'12'} text={'descricao'}
                                padding={'5'}
                                colors={{color: '#111'}}
                                
                                />
                            </div>

                            <div className={styles.container_item}>
                                <img src={data.screen_two.url_image_2} alt="image" />

                                <Descript
                                positions={{posX: 'center', posY: 'center'}}
                                fontZise={'12'} text={'descricao22'}
                                padding={'5'}
                                colors={{color: 'red'}}                               
                                />
                            </div>

                            <div className={styles.btns}>
                                <button onClick={handleOnChange}><FaPencilAlt/> </button>
                                <button onClick={handleOnChange}><FaTrash/></button>
                            </div>

                        </div>
                        
                </div>
                )
                
            }else{
            return( 
                    
                <div key={index} className={`${styles.container_image_simples} ${styles.container_item}`}>
                    <div className={styles.cont}>

                        <img src={data.url_image_1} alt="image" />
                        <Descript
                        positions={{posX: 'center', posY: 'center'}}
                        fontZise={'12'} text={'descricao'}
                        padding={'5'}
                        colors={{color: '#fff'}}
                        
                        />

                        <div className={styles.btns}>
                            <button onClick={handleOnChange}><FaPencilAlt/> </button>
                            <button onClick={handleOnChange}><FaTrash/></button>
                        </div>
                    </div>
                </div>
            )
            }

            })

    return(
        <>
            <div className={styles.carrosel_itens}>
                {myRender}
            </div>
        </>
    );
}