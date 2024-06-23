import styles from "./screens-styles/SlaidImage.module.css"

import { useEffect, useState } from "react"

import ImageItem from "./ImageItem"
import useScreenContext from "./hook/useScreenContext"

import { loadShow } from "../../outher/AnimationScreen"


export default function SlaidImage({}){

    const { project, defaultProject}= useScreenContext()
    const [data, setData]= useState(project || [])

    
    useEffect(()=>{

        setData({...project, defaultProject})
        const intems= document.querySelectorAll('#intems')
        let valor= 0
        loadShow(intems, valor, 2 ) 

        const id= setInterval(() => {
            loadShow(intems, valor, 2 ) 
            valor= valor + 1

           return ()=> clearTimeout(id);

        }, defaultProject.speed);  
        
    },[])

    //console.log(data.project[0].screen_two.url_image_2
    //)

    return(
        <div className={styles.container_imgItem} >
            {parseInt(defaultProject.format_screen) === 2 ? (

                    data.project.map((item, index)=>(
                        
                        <ImageItem
                            key={index}
                            format={defaultProject.format_screen}
                            descript={{descript_1: item.screen_one.descript_image_1, descript_2: item.screen_two.descript_image_2}}
                            title={{title_image_1: item.screen_one.title_image_1, title_image_2: item.screen_two.title_image_2}}
                            collumn={''}
                            url={{url_1: item.screen_one.url_image_1, url_2: item.screen_two.url_image_2}}
                           
                            />
                        
                    ))
                ): (
                data.project.map((item, index)=>(
                            
                        <ImageItem
                            key={index}
                            format={defaultProject.format_screen}
                            descript={{descript_1: item.descript_image_1, descript_2: item.descript_image_2}}
                            title={{title_image_1: item.title_image_1, title_image_2: item.title_image_2}}
                            collumn={''}
                            url={{url_1: item.url_image_1, url_2: item.url_image_2}}
                            
                            />
                            
                        ))

                        
                    )
            }

      
        
        </div>
        
    )
}