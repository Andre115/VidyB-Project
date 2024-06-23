import styles from "./styles-form/Input.module.css"

export default function Input({text, type, id, name, placeholder, handleOnchange, show, FaIcon, register, value}){

    return(
        <div className={styles.container_input}>
            <label className={styles.descr} htmlFor={id}>{text} <span>*</span></label>
            <input
                type={type ? type : 'text'} 
                id={id}
                name={ name }
                value={value}
                onChange={handleOnchange}
                placeholder={placeholder}
                style={{paddingLeft: FaIcon? '35px' : '12px' }} 
                {...register}        
            />
            {show &&
                <span className={'require_input'}>Campo obrigatório</span>
         }

            <label className={styles.labelIcon} htmlFor={id}>{ FaIcon }</label>
        </div>
    )

}