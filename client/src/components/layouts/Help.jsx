import { Link } from "react-router-dom";
import img from '../../images/jerryLopez.jpg'
import styles from "./styles-layouts/Help.module.css"


export default function Help({to}){
    return(
    <div className={styles.container_help}>
        <Link to={to}>
            <div>
                <img src={img} alt="" />
            </div> 
        </Link>   
    </div>
    )
}