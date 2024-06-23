import styles from "./styles-form/File.module.css"

export default function File({text, type, id, name, placeholder, handleOnchange, value, imgUrl, show}){

    return(
        <div className={styles.container_file}>
            <label className={styles.descr} >{text}</label>
            <div>
                <input
                type={type}
                id={id}
                name={name}
                onChange={handleOnchange}
                placeholder={placeholder}
                value={value}
                
                />
                <label className={styles.body} htmlFor={id} >{placeholder}</label>
                <label className={styles.prevImg} >
                    {imgUrl ? (
                        <img src= {imgUrl} alt="image" />
                    ) : (
                        
                        <p>Empty</p>
                    )}
                </label>
            </div>

                {show &&
                    <span className={'require_input'}>Campo obrigatório</span>
            }
        </div>
    )

}