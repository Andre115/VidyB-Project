import styles from "./styles-form/TextArea.module.css"

export default function TextArea({value, text, id, name, handleOnchange, show}){

    /*PARA LIMITAR O NUMERO DE LINHAS NO INPUT TEXTAREA
    function handleTextAreaChange(event){
        const text= event.target.value;
        const lines= text.split('\n').length;

        console.log(text, lines)

        if(lines > 3){
            const delimitedText= text.split('\n').slice(0, 3);
            setTextAreaValue('oiii')
            
        }else{
            setTextAreaValue(text)
        }
    }
    */
    
    return(
        <div className={styles.container_textArea}>
            <label className={styles.descr} htmlFor={id}>{text}</label>
            <textarea
                id={id}
                name={name}
                value={value}
                onChange={handleOnchange}        
            >
            </textarea>
            {show &&
                <span className={'require_input'}>Campo obrigatório</span>
         }

        </div>
    )

}