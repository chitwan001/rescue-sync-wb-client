import React, {useEffect} from 'react';
import logo from './logo.svg';
import {setAxiosDefault, setToken} from "./axiosDefault";
import {useAuth} from "./context/auth-context";
import PageLoader from "./pages/PageLoader";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Redirect from "./components/Redirect";
import Tracking from "./components/Tracking";
import Dashboard from './components/Dashboard/Dashboard';

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
            !token ? (
                <Routes>
                    <Route element={<Login/>} path={'/login'}/>
                    <Route path={'/dashboard'} element={<Dashboard />}/>
                    <Route path={'/map'} element={<Tracking />}/>
                    <Route path={'*'} element={<Redirect/>}/>
                </Routes>
            ):(
                <Routes>
                    <Route path="/login" element={<Redirect />} />
                    <Route path="/signup" element={<Redirect />} />
                </Routes>
            )
        }
    </React.Suspense>
  );
}

export default App;
