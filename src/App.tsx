import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {setAxiosDefault, setToken} from "./axiosDefault";
import {useAuth} from "./context/auth-context";
import PageLoader from "./pages/PageLoader";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Redirect from "./components/Redirect";
import Dashboard from './components/Dashboard';


function App() {
    const { token, getUserData, user } = useAuth();
    useEffect(() => {
        setAxiosDefault()
        if(token){
            console.log(token)
            setToken(token);
        }
    }, []);
  return (
    <React.Suspense fallback={
        <PageLoader/>
    }>
        {
            // !token ? (
            //     <Routes>
            //         <Route element={<Login/>} path={'/login'}/>
            //         <Route path={'*'} element={<Redirect/>}/>
            //     </Routes>
            // ):(
            //     <Routes>
            //         <Route path="/login" element={<Redirect />} />
            //         <Route path="/signup" element={<Redirect />} />
            //     </Routes>
            // )
            <Dashboard />
            
        }
        
    </React.Suspense>
  );
}

export default App;
