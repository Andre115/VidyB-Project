import Input from "../form/Input"
import Button from "../layouts/Button"
import styles from "./styles-pages/Login.module.css"
import { MdEmail, MdKey, MdPerson } from "react-icons/md"

import { useForm } from "react-hook-form"

export default function singUp(){

    const {register, handleSubmit, watch, formState: { errors }} = useForm()
    
    const onSubmit= (data)=>{
        let emptyObj= Object.values(data).some((obj)=> obj.trim() === '')
        
    }

    return(

        <div className={styles.container_login}>
            <h3>Criar Conta</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input                
                    id={'name'}
                    type={'name'}
                    name={'name'}
                    placeholder={'Digite seu nome'}
                    register={register('name')}
                    FaIcon={<MdPerson/>}
                
                />

                <Input
                    id={'email'}
                    type={'email'}
                    placeholder={'Digite seu email'}
                    register={register('email')}
                    FaIcon={<MdEmail/>}
                
                />


                <Input
                    id={'password'}
                    type={'password'}
                    placeholder={'Digite sua senha'}
                    register={register('password')}
                    FaIcon={<MdKey/>}
                
                />
                <Input
                    id={'confirmPassword'}
                    type={'password'}
                    placeholder={'Confirma sua senha'}
                    register={register('confirmPassword')}
                    FaIcon={<MdKey/>}
                
                />
                <Button button={true} type={'submit'} text={'Confirmar'}/>

            </form>
        </div>
    )
}