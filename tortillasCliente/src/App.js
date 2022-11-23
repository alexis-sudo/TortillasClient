import React from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import NotFound from './pages/NotFound.js';
import './App.css';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import User from './pages/User.js';
import Deudas from './pages/Deudas.js';
import NavDown from './components/NavDown.js';

function App() {
    return (
        <BrowserRouter>
            {/* <NavComponent/> */}
            <div>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/logIn' element={<LogIn/>}/>
                    <Route path='/user' element={<User/>} />
                    <Route path='/deudas' element={<Deudas/>} />
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </div> 
            <NavDown/>   
        </BrowserRouter>   
    );
}
export default App;