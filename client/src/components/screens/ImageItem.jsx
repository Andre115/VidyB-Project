
import styles from "./screens-styles/ImageItem.module.css"
import Descript from "../screens/desc_screen/Descript"
import Title from "../screens/desc_screen/Title"
import useScreenContext from "./hook/useScreenContext"

export default function ImageItem({format, collumn, url, descript, title}){
     
    const { defaultProject}= useScreenContext()

    console.log(url)


    return(

        <div id="intems" className={styles.container_ImageItem} >

            {parseInt(format) !== 2 ? (

            <div className={`${styles.simples} ${styles.format}`}>
                 <img src={`http://localhost:3300/images/${url.url_1}`} alt="image slaid" />
                 <Descript
                    text={descript.descript_1}
                    positions={{posX: defaultProject.position_title[0], posY: defaultProject.position_title[1] }}
                    po
                 />

                 <Title text={title.title_image_1} posX={'center'}  />
            </div>

            ): (

            <div  className={`${styles.duble} ${styles.format} ${collumn ? '' : styles.formatRow}`}>
                <div className={`${collumn? styles.collumn : styles.row} `}>
                    <img src={`http://localhost:3300/images/${url.url_1}`} alt="image slaid" />
                    <Descript
                        text={descript.descript_1}
                        color={'yellow'}                       
                     />

                    <Title text={title.title_image_1} posX={'center'}  />
                   
                </div>

                <div className={`${collumn? styles.collumn : styles.row} `}>
                    <img src={`http://localhost:3300/images/${url.url_2}`} alt="image slaid" />
                    <Descript colors={'red'} text={descript.descript_1} />
                    <Title text={title.title_image_2} posX={'center'}  />
                   
                </div>
            </div>

            )
            
            
            } 



        </div>
    )
}