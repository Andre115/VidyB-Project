import { useContext } from "react";
import { ScreenContext } from "../context/Context";


export default function useScreenContext() {
    const context= useContext(ScreenContext);

    if (context === undefined) {
        throw new Error("Não inclui nos contextos!!");
        
    }

    return context;
    
}