import styles from "./Descript.module.css"

export default function Descript({positions, text, colors, fontZise, padding}){

    const position= {
        justifyContent: positions? `${positions.posX}`: '',
        alignItems: positions? `${positions.posY}`: '',
        padding: padding ? padding+'px' : '' ,
    }

    const styleSpan= {
        backgroundColor: colors? `${colors.backgroundColor}`: '',
        color: colors? `${colors.color}`: '#111',
        fontSize: fontZise+'px'
    }

    return(
        <div className={styles.containerDescript} style={position}>
            <p style={styleSpan}>{text}</p>       
        </div>
           
    )}
