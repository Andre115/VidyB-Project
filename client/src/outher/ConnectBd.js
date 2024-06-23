import { toast } from "react-toastify"


export async function getData(url, userUpdate, setVisible){

    try {
        fetch(url, {
            method: 'GET',
            headers: {'Content-type': 'application/json',},
        })
        .then((resp)=> resp.json())
        .then((datas)=> {
            
            userUpdate(datas)

            if(setVisible){
                setVisible(false)
           }
            
        })
        .catch((error)=>{

            setInterval(() => {
                setVisible(false)
                
            }, 10000);
            console.error('Deu algum erro: ' + error)
        })
        
    } catch (error) {
        console.error('Deu algum erro, try & catch: ' + error)
    }
    
}

export async function removeData(id, data, setData){

    try {
        fetch(`http://localhost:3333/projects/${id}`, {
            method: 'DELETE',
            headers: {'Content-type': 'application/json',},
        })
        .then((resp)=> resp.json())
        .then((datas)=> {   
            setData(data.filter((proj)=> proj.id !== id))
            console.error('Deu algum erro: ' + error)
        })
            


        
    } catch (error) {
        console.error('Deu algum erro: ' + error)
    }

}

    //validar os campos que foram padronizados por 'validDefault'
       

        //função responsável por mudar as os forms por btn predefinir
    export function setting(e, validDefault, setArrayScreen, visible, setVisible, setError, reset){
            
            e.preventDefault()
            reset()
                      
            if(validDefault){
                
                setVisible((vis)=> !vis);
                if(visible){
                    setArrayScreen([])
                }
            }else{
                setError(!validDefault)

                toast.error('Campos obrigatórios', {autoClose: 3000})
 
            } 
            
         
        }    


        //Funcao responsável em carregar imagens usando imput[file]
        export function upLoadImg( event, setUrl_1, setUrl_2, file, setFile, dataProject, setDataProject){
        
            const input_target= event.target;
            const fileTarget= input_target.files[0];
            
            if(fileTarget){
                const reader= new FileReader();
                reader.addEventListener('load', (e)=>{
                    
                    const formtFile= e.target.result.split(';')[0].split('/')[0].split(':').pop()
                    
                    if (formtFile.toLowerCase() === 'image') {
                        
                        
                        if(input_target.id === 'url_image_1'){
                            
                            
                            setUrl_1(e.target.result)

                            let newProp= dataProject.screen_one
                            newProp[event.target.name]= e.target.result
                            setDataProject({...dataProject, screen_one: { ...newProp }})
                           
                        }else{
                            
                            setUrl_2(e.target.result)

                            let newProp= dataProject.screen_two
                            newProp[event.target.name]= e.target.result
                            setDataProject({...dataProject, screen_two: { ...newProp }})
                        
                        }
   
                        
                    }else{
                        toast.error('Arquivo inválido!!', {autoClose: 3000})
                        return;
    
                    }
                
                    setFile({...file, [event.target.name]: fileTarget})
                })

                
                reader.readAsDataURL(fileTarget)
            }      
        }



/*
const response= await fetch(url, {method})
if (!response.ok) {
    throw new Error('Deu algum erro: ' + response.status)
    
}

const jsonData= await response.json();
await userUpdate(jsonData);
*/