//file style
import './App.css'
//file states

//other files
import { Routes, Route } from 'react-router-dom'
//layout files

import Container from './components/layouts/Container'
//file components
import ContainerUser from './components/layouts/ContainerUser'
import Login from './components/pages/Login'

import SingUp from './components/pages/SignUp'
import Home from './components/pages/Home'
import MainVid from './components/pages/MainVid'
import Projects from './components/pages/Projects'
import Teste from "./components/teste/Teste"

import ContainerImg from "./components/screens/ContainerImg"

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"


function App() {

  return (
    <>
      <Container>

        <ToastContainer position={'bottom-left'} />
        <Routes>

          <Route path='/' element={<Home />}/>
          <Route path="/teste" element={<Teste />}/>
          <Route path="/running" element={<ContainerImg />}/>

          <Route path='/login' element={<ContainerUser text={'Criar conta'} to={'/signup'} formAppend={ <Login /> } />}/>
          <Route path='/signup' element={<ContainerUser text={'Entrar'} to='/login' formAppend={ <SingUp /> }/>}/>
          <Route path='/mainvid' element={<MainVid />}/>
          <Route path='/projects' element={<Projects />}/>

        </Routes>

    </Container>

    </>
  )
}

export default App
