import styles from "./Title.module.css"

export default function Title({text, positions, colors}){


    const position= {
        justifyContent: positions? `${positions.posX}`: 'center',
        alignItems: positions? `${positions.posY}`: '',
    }

    const styleSpan= {
        backgroundColor: colors? `${colors.backgroundColor}`: '#fff',
        color: colors? `${colors.color}`: '#111'
    }

    return(

        <div style={position}  className={styles.containerTitle}>
            <span style={styleSpan}>{text}</span>       
        </div>
           
    )}
