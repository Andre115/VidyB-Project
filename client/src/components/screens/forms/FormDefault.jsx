import styles from "./FormDefault.module.css"
import { toast } from 'react-toastify';

import axios from "axios"

import { getData, setting, upLoadImg } from "../../../outher/ConnectBd"
import { useNavigate } from "react-router-dom"

//'src/images/imageSlaids/img.jpg'
import Input from "../../form/Input"
import File from "../../form/File"
import TextArea from "../../form/TextArea"
import Select from "../../form/Select"
import Button from "../../layouts/Button"

import StyleSlaid from "../../form/StyleSlaid"


import { useEffect, useState } from "react"
import Carossel from "../../layouts/Carossel"


export default function FormDefault(){
    
  const navigate= useNavigate()
    
     //hook responsável para carregamentes da(s) imagens
    const[url_1, setUrl_1]= useState('')
    const[url_2, setUrl_2]= useState('')
    
    //hook para gerir os dados sobre projecto
    let [data, setData]= useState([])
    
    //Hokks responsaveis de imagens para back end
    let [file, setFile]= useState({})
    const [arrayUrl, setArrayUrl]= useState([])


    const[project, setProject]= useState({})
    const[arrayScreen, setArrayScreen]= useState([]) 
    
    //hook responsável para validar os campos padrões do projecto
    const[validDefault, setValidDefault]= useState(false)
    const[dataDefault, setDataDefault]= useState({
        name_project: '',
        size_slaid: '',
        format_screen: '',
        position_title: '',
        format: '',
        speed: '',
        format_image: ''
    })

    //title_image: '', descript_image: undefined, url_image: undefined
    const[validProject, setValidProject]= useState(true)
    const[dataProject, setDataProject]= useState({
        screen_one: {
            title_image_1: '',
            descript_image_1: '',
            url_image_1: ''
        },
        screen_two: {
            title_image_2: '',
            descript_image_2: '',
            url_image_2: ''
        }
    })
    

    const[visible, setVisible]= useState(true)     
    
     //hook responsável em carregar os selects de padrões de projectos
    const [allDefault, setAllDefault]= useState({})

    const [number_screen, setNumber_screen]= useState(0)
    const [error, setError]= useState(false)
    
    const [confirmProject, setConfirmProject]= useState(false)
    
    useEffect(()=>{

            const allObj= {...dataDefault}

            let emptyObj_one= Object.values(allObj).some(obj => obj.trim() === '')    
            setValidDefault(emptyObj_one ? false : true) 

    }, [dataDefault])


    //hook responsável inicializar o campo para validar
    useEffect(()=>{
        
        if(parseInt(dataDefault.format_screen) === 2 ){
            const allObj= {...dataProject.screen_one, ...dataProject.screen_two}

            let emptyObj_one= Object.values(allObj).some(obj => obj.trim() === ''); 
            setValidProject(emptyObj_one ? false : true);
            
        }else{
            const allObj= {...dataProject.screen_one}

            let emptyObj_one= Object.values(allObj).some(obj => obj.trim() === '');   
            setValidProject(emptyObj_one ? false : true)          
        }
  
    }, [dataProject])


    useEffect(()=>{
        
        if(parseInt(dataDefault.format_screen) === 2){
            dataDefault.format_image= '';
        }else{
            delete dataDefault.format_image;
        }
  
    }, [dataDefault.format_screen])
    

     useEffect(()=>{      
        setConfirmProject(
           parseInt(number_screen) === parseInt(dataDefault.size_slaid)
        )
         
        }, [number_screen])

     
        //hook responsável em pegar os dados em API json
        //hook responsável em actualizar os dados pegados em API Json para por nos selects padrõao do projecto
        useEffect(()=>{
            getData('http://localhost:3333/default', setData);
       
            if(!data.size_slaid || data.size_slaid.length === 0) {
                setAllDefault({})
            }else{
                const size= {
                    size: data.size_slaid.map((option)=> (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                    ))
                }

                const screen= {
                    screen: data.screen.map((option)=> (
                        <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                    ))
                }

                const position_title= {
                    position_title: data.position_title.map((option)=> (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                    ))
                }
                const speed= {
                    speed: data.speed.map((option)=> (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                    ))
                }
                const format_image= {
                    format_image: data.format_image.map((option)=> (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                    ))
                }

                setAllDefault({...size, ...screen, ...position_title, ...speed, ...format_image})              
        }       
    }, [data])


    function reset(){

        setError(false)
        setDataProject({
            screen_one: {
                title_image_1: '',
                descript_image_1: '',
                url_image_1: ''
            },
            screen_two: {
                title_image_2: '',
                descript_image_2: '',
                url_image_2: ''
            }
            })
     
            setUrl_1('')  
            setUrl_2('')             
        } 

    async function confirmScreen(e){
        e.preventDefault()

        if(validProject){
                       
            if(number_screen < dataDefault.size_slaid){
                
                if(parseInt(dataDefault.format_screen) === 2){
                      
                    setNumber_screen((number) => number + 1)
                    arrayScreen.push(dataProject);
                    setProject({...project, "project": arrayScreen})
                    
                } else{

                    setNumber_screen((number) => number + 1)
                    arrayScreen.push(dataProject.screen_one);
                    setProject({...project, "project": arrayScreen})
            }


            
            await upLoadBackend()
            setError(!validDefault)
           
            reset()
            toast.success('Screens adicionado!', {autoClose: 3000})
            
           
            
        }else{
            
            toast.error('Atingiu o limite de screens!', {autoClose: 3000})
        }
          
    }else{
        setError(true)
        toast.error('Campos obrigatórios!', {autoClose: 3000})
        }
            
    } 


    function upLoadBackend(){

        const formData= new FormData()
        formData.append('files', file.url_image_1);

        if(parseInt(dataDefault.format_screen) === 2){
            formData.append('files', file.url_image_2)       
            axios.post("http://localhost:3300/uploads", formData)
            .then((response)=> {
                
                return setArrayUrl([...arrayUrl, [response.data.FileName[0].filename
                    , response.data.FileName[1].filename
                ]])
            })
            .catch((err) => console.log(err))
        }else{
           
            axios.post("http://localhost:3300/upload", formData)
            .then((response)=> {
                
                return setArrayUrl([...arrayUrl, response.data.FileName])
            })
            .catch((err) => console.log(err))
        }
    }
    
    
    //Função responsável por protificar e gravar projecto no API
    function createProject(e){
        e.preventDefault();   

        console.log(project.project)
       
        if(confirmProject){
            let dt= ''

            let descripts= []
            let urls= dt
            let titles= []
            let newProject= {}

           if(parseInt(dataDefault.format_screen) === 2){
                arrayUrl.map((item)=>{
                    dt= dt + item.join(',') + ';'
                    
                })

                project.project.map((dt, index)=>{
                    dt.screen_one.url_image_1= arrayUrl[index][0]
                    dt.screen_two.url_image_2= arrayUrl[index][1]
                    newProject= {...project}
                })
            }else{
                dt= arrayUrl
                
                project.project.map((dt, index)=>{
                    descripts.push(dt.descript_image_1)
                    titles.push(dt.title_image_1)
                    dt.url_image_1= arrayUrl[index]
                    newProject= {...project}
                })
    
            }

            console.log(arrayUrl, project.project)
           
        
            const allData= {...dataDefault, descripts: descripts.toString(), titles: titles.toString(), urls: urls.toString()};

            let conf= confirm('Deseja gravar o projecto? [SIM | NÃO]')

            if(conf){
                axios.post('http://localhost:3300/create', allData)
                .then(res=> console.log(res))
                .catch(error=> console.log(error))
            }
            
            navigate('/running', {state: {data: {...{default_project: dataDefault, project: newProject}}}})

            toast.success('Projecto criado com sucesso!', {autoClose: 2500});

        }else{
            toast.error('Adicione mais Screens', {autoClose: 3000});
        }
    }
      
    //Funcoes responsáveis pelas entradas de input[text] & select //sendData(project)
    function handleChange(e){

        let newProp= dataDefault
        newProp[e.target.name]= e.target.value
        setDataDefault({ ...newProp })     
    }
    
    function handleSelect(e){

        let newProp= dataDefault
        newProp[e.target.name]= e.target.value
        setDataDefault({ ...newProp })  
    }
    
    function handleFormat(e){
        let newProp= dataDefault
        newProp[e.target.name]= e.target.id
        setDataDefault({ ...newProp })  
    }
    

    //Funcoes responsáveis pelas entradas de input[text] & select do elementos do projectos
    function handleChangeProject_one(e){
        let newProp= dataProject.screen_one
        newProp[e.target.name]= e.target.value
        setDataProject({...dataProject, screen_one: { ...newProp }})
       
    }
    
    function handleChangeProject_two(e){
        let newProp= dataProject.screen_two
        newProp[e.target.name]= e.target.value
        setDataProject({...dataProject, screen_two: { ...newProp }})        
        
        
    }

    //retorno JSX
    return(

        <>        
        <div className={styles.container_FormDefault}>
      
            <form onSubmit={createProject}>

                {visible ? (

                    <div className={visible ? styles["visible"] : styles["hidden"]}>

                        <h3>Padrão do projecto</h3>

                        <Input
                            type={'text'}
                            text={'Nome do projecto'}
                            placeholder={'Digite o nome do projecto'}
                            id={'name_project'}
                            name={'name_project'}
                            handleOnchange={handleChange}
                            value={dataDefault.name_project ? dataDefault.name_project : ''}
                            show={dataDefault.name_project.trim() ? false : error}
                         />

                        <Select
                            id={'size_slaid'}
                            name={'size_slaid'}
                            text={'Selecione quantidade de slaids'}
                            options={allDefault.size}
                            handleOnchange={handleSelect}
                            value={dataDefault.size_slaid ? dataDefault.size_slaid : '' }
                            show={dataDefault.size_slaid.trim() ? false : error}
                        />
                        
                        <div className="row_item">
                            <Select
                                
                                id={'format_screen'}
                                name={'format_screen'}
                                text={'Selecione formato de cada slaid'}
                                options={allDefault.screen}
                                handleOnchange={handleSelect}
                                value={dataDefault.format_screen ? dataDefault.format_screen : '' }
                                show={dataDefault.format_screen.trim() ? false : error}
                                
                                />

                            {parseInt(dataDefault.format_screen) === 2 &&
                                <Select
                                    id={'format_image'}
                                    name={'format_image'}
                                    text={'Selecione formato das imagens'}
                                    options={allDefault.format_image}
                                    handleOnchange={handleSelect}
                                    value={dataDefault.format_image ? dataDefault.format_image : '' }
                                    show={dataDefault.format_image ? false : error}
                                />
                            }
                            
                        </div>

                        <div className="row_item">

                            <Select
                                text={'Posição de tìtulo'}
                                id={'position_title'}
                                name={'position_title'}
                                options={allDefault.position_title}
                                handleOnchange={handleSelect}
                                value={dataDefault.position_title ? dataDefault.position_title : '' }
                                show={dataDefault.position_title.trim() ? false : error}
                            />

                                <Select
                                    text={'Velocidade'}
                                    id={'speed'}
                                    name={'speed'}
                                    options={allDefault.speed}
                                    handleOnchange={handleSelect}
                                    value={dataDefault.speed ? dataDefault.speed : '' }
                                    show={dataDefault.speed.trim() ? false : error}
                                />

                        </div>
 

                        <span className={styles.format_dideo}>Formato do vídeo*</span>

                        <div className={styles.styleSlaid}>
                            <StyleSlaid
                                text={'Retrato (Móvel)'}
                                name={'format'}
                                id={'retrato_movel'}
                                style={{width: '35%', height: '100%'} }
                                type={'mobile'}
                                handleOnchange={handleFormat}                         
                            />

                            <StyleSlaid
                                text={'Paisagem(Desktop)'}
                                name={'format'}
                                id={'paisagem'}
                                style={{width: '80%', height: '68%'} }
                                handleOnchange={handleFormat}                           
                            />                         
                        </div>
                        {(dataDefault.format==='' && error )&&
                            <span className={'require_input'}>Campo obrigatório</span>
                            } 
                    </div>
                

                    ) : (

                    <div>
                            
                        {arrayScreen.length > 0 &&                         
                            <Carossel
                                arrayData={arrayScreen}
                                duble={parseInt(dataDefault.format_screen) === 2 ? true : false } direccion={'row'}
                                pos={''}
                                />               
                        }
                            <div  className={styles.form_project_simples}>
                                <p>Você adicionou <span>{number_screen}</span> screans. Restam <span>{dataDefault.size_slaid}</span></p>
                                <h3>Dados de Tela 1</h3>

                                <Input
                                    text={'Título da imagem'}
                                    placeholder={'Dgite o título'}
                                    name={'title_image_1'}
                                    id={'title_image_1'}
                                    value={dataProject.screen_one.title_image_1 || ''}
                                    handleOnchange={handleChangeProject_one} 
                                    show={dataProject.screen_one.title_image_1.trim() ? false : error}                                  
                                />
                        <div className={styles.form_project}>

                                    <TextArea
                                        text={'Descrição da imagem (separada por , or ;)'}
                                        placeholder={'Dgite a descrição'}
                                        name={'descript_image_1'}
                                        id={'descript_image_1'}
                                        value={dataProject.screen_one.descript_image_1 || ''}
                                        handleOnchange={handleChangeProject_one}  
                                        show={dataProject.screen_one.descript_image_1.trim() ? false : error}                            
                                        />
                                        

                                    <File
                                        type={'file'}
                                        name={'url_image_1'}
                                        text={'Carregar imagem'}
                                        placeholder={'Carregar imagem'}
                                        id={'url_image_1'}
                                        imgUrl={url_1}
                                        show={url_1 ? false : error}
                                        handleOnchange={(event)=> upLoadImg( event, setUrl_1, setUrl_2, file, setFile, dataProject, setDataProject)}                                                                         
                                        />

                                </div>

                                {dataDefault.format_screen === '2' &&

                                <div  className={styles.form_project_simples2}>
                                    <h3>Dados de Tela 2</h3>

                                    <Input
                                            text={'Título da imagem'}
                                            placeholder={'Digite o título'}
                                            name={'title_image_2'}
                                            id={'title_image_2'} 
                                            value={dataProject.screen_two.title_image_2 || ''}
                                            handleOnchange={handleChangeProject_two} 
                                            show={dataProject.screen_two.title_image_2.trim() ? false : error}                                   

                                            />

                                        <TextArea
                                            text={'Descrição da imagem (separada por , or ;)'}
                                            placeholder={'Dgite o título'}
                                            name={'descript_image_2'}
                                            id={'descript_image_2'}
                                            value={dataProject.screen_two.descript_image_2 || ''}                                          
                                            handleOnchange={handleChangeProject_two}
                                            show={dataProject.screen_two.descript_image_2.trim() ? false : error}
                                        
                                        />

                                        <File
                                            type={'file'}
                                            text={'Carregar imagem'}
                                            placeholder={'Carregar imagem'}
                                            name={'url_image_2'}
                                            id={'url_image_2'}
                                            imgUrl={url_2}
                                            show={url_2 ? false : error}
                                            handleOnchange={(event)=> upLoadImg( event, setUrl_1, setUrl_2, file, setFile, dataProject, setDataProject)}                         
                                            />
                                    
                                    </div>
            
                                }

                            </div>

                            <div className={styles.btns_confirm_screen}>
                                <Button handleClick={reset} text={'Resetar'} />
                                <Button handleClick={confirmScreen} text={'Confirmar Screen'}/>
                            </div>

                        </div>
                    )
                }

                     
            <div className={styles.btnArea}>
                <Button handleClick={visible ? undefined : (e)=> setting(e, validDefault, alidDefault, setArrayScreen, visible, setVisible) } text={visible ? 'Sair' : 'Voltar'}  to={visible ? '/' : ''}/>

                {visible && true ? (

                    <Button handleClick={ (e)=> setting(e, validDefault, setArrayScreen, visible, setVisible, setError, reset)} text={visible ? 'Predefinir' : 'Criar Projecto'} />
                ) : (
                    
                    <Button button={true} type={'submit'} text={'Criar Projecto'} />
                )
                    
                }
            </div>

    </form>

            
</div>

</>
)}
