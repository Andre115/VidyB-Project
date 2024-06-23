import styles from "./styles-form/styleSlaid.module.css"

export default function styleSlaid({text, style, id, name, handleOnchange, type, show}){

    return(
        <div className={styles.container_styleSlaid}>
            <input type="radio" id={id} name={name} onChange={handleOnchange} />
            <label style={{width: style.width, height: style.height}} htmlFor={id}>{text}</label>
            <p className={type === 'mobile' ? styles.mobile : styles.desktop}></p> 
                  
        </div>
    )

}