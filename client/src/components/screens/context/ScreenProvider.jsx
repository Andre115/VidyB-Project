import { ScreenContext } from "./Context"
import { useEffect, useState } from "react"


export default function ScreenProvider({ children, project}){

    const [data, setData]= useState({})


    const mydata= project

    //console.log(mydata.default_project, mydata.project)


    function format(dt, prj){
        let position= []
        let speed;
        switch (dt.position_title) {
            case 'CC':
                position= ['center', 'center']             
                break;
            case 'LT':
                position= ['start', 'start']             
                break;
            case 'CT':
                position= ['center', 'start']             
                break;
            case 'RT':
                position= ['end', 'start']             
                break;
            case 'LC':
                position= ['start', 'center']             
                break;
            case 'RC':
                position= ['end', 'center']             
                break;
            case 'LB':
                position= ['start', 'end']             
                break;
            case 'CB':
                position= ['center', 'end']             
                break;
            case 'RB':
                position= ['end', 'end']             
                break;       
            default:
                break;
        }

        switch (dt.speed) {
            case '-0.5X':
                speed= 8000;              
                break;
            case '+1.5X':
                speed= 4000 
                break;  
            case '+2X':     
                speed= 2000             
                break;
            default:
                speed= 6000
                break;
            }

        let def= {
            name_project: dt.name_project,
            size_slaid: dt.size_slaid,
            format_screen: dt.format_screen,
            position_title: position,
            format: dt.format,
            speed: speed

        }  
        

        return {defaultProject: def, project: prj}     
    }

   useEffect(()=>{
   
        setData(
        format(mydata.default_project, mydata.project)
        )


    }, [])


    return( 
        <>
        {data.project &&

            <ScreenContext.Provider value={data} > 
                {children}
            </ScreenContext.Provider> 
        }
        </>
    )
}