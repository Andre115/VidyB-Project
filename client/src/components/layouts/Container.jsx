import styles from "./styles-layouts/Container.module.css"

export default function Container(props){
    return(
        <div className={styles.container}>

                {props.children}

        </div>
    )
}