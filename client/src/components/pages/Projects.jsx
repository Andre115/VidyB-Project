import styles from './styles-pages/Projects.module.css';
import NavBar from '..//layouts/NavBar'
import { getData, removeData } from '../../outher/ConnectBd';
import Loader from "../layouts/Loader"
import { FaCalendarAlt, FaReadme, FaAsterisk, FaTrash, FaPencilAlt } from 'react-icons/fa';
import Button from "../layouts/Button"
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


export default function Projects(){

    const [data, setData]= useState([])
    const [visible, setVisible]= useState(true)

    useEffect(()=> {
        getData('http://localhost:3333/projects', setData, setVisible);
        
    }, [])
    
    function remove(e, id){
        e.preventDefault()
        removeData(id, data, setData)
        toast.success('Projecto eliminado com sucesso!', {autoClose: 2500})

    }

    return(

        <>
             <NavBar />
            <div className={styles.projects_container}>
                <div className={styles.top}>
                    <h2>Lista de Projectos</h2>
                    <Button to={'/mainvid'} text={'Criar Projecto'}/>
                </div>
                <div className={styles.intems}>
                    {visible&& <Loader />}

                {data.length > 0 ?(

                    data.map((dt, index)=>(               


                    <div key={index} className={styles.intem}>
                        <div className={styles.images}>
                            <img className={styles.image_1} src={dt.project.project[0].url_image_1} alt="" />
                            <img className={styles.image_2} src={dt.project.project[1].url_image_1} alt="" />
                            <img className={styles.image_3} src={dt.project.project[2].url_image_1} alt="" />                                                     

                        </div>
                        <div className={styles.AllDescripts}>
                            <div className={styles.descripts}>
                                <h3 className={styles.name}>{dt.default.title_project}</h3>
                                <span className={styles.size}><FaAsterisk/> {dt.default.size_slaid}</span>
                                <span className={styles.date}><FaCalendarAlt/> {dt.default.date}</span>
                                <span className={styles.descript}><FaReadme/> Descricao</span>
                            
                            </div>
                            <div  className={styles.btns}>
                                <button onClick={(e)=>remove(e, dt.id)}><FaTrash/>Deletar</button>
                            <button> <FaPencilAlt/>Editar</button>                           
                            </div>

                    </div>
                    </div>

            ))

                ) : (
                    <div>
                        {!visible&&
                            <p>Nenhum Projecto carregado!!</p>
                        }
                    </div>                               
                                
                    ) }
                        
                        </div>
                    </div>
                </>
            )
}