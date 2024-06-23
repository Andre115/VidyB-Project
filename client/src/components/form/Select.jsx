import styles from "./styles-form/Select.module.css"

export default function Select({ text, id, name, handleOnchange, options, value, show}){

    return(
        <div className={styles.container_select}>
            <label className={ styles.descr} htmlFor={id}>{text}<span>*</span></label>
           <select
                name={ name }
                id={ id }
                value={ value }
                onChange={ handleOnchange }
           >
            <option value={''}>Selecione</option>
                {options}
           </select>
           {show &&
                <span className={'require_input'}>Campo obrigatório</span>
         }

        </div>
    )

}