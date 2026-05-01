import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './Layout/layout'
import { LoginPage } from './Pages/login.page'
import { RegisterPage } from './Pages/register.page'
import { PasswordPage } from './Pages/password.page'
import { MfaSendPage } from './Pages/mfasend.page'
import { MfaVerifyPage } from './Pages/mfaverify.page'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/password' element={<PasswordPage/>}/>
        <Route path='/mfasend' element={<MfaSendPage />}/>
        <Route path='/mfaverify' element={<MfaVerifyPage/>}/> 
        </Route>
      </Routes>
    </>
  )
}

export default App
