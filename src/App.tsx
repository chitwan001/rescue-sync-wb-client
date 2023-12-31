import React, {useEffect} from 'react';
import logo from './logo.svg';
import {setAxiosDefault, setToken} from "./axiosDefault";
import {useAuth} from "./context/auth-context";
import PageLoader from "./pages/PageLoader";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Redirect from "./components/Redirect";
import Dashboard from './components/Dashboard/Dashboard';
import AgencyRegistration from "./pages/AgencyRegistration";
import Tracking from "./components/Tracking";


function App() {
    const { token, getUserData, user } = useAuth();
    useEffect(() => {
        setAxiosDefault()
        if(token){
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
                    <Route element={<AgencyRegistration/>} path={'/registration'}/>
                    <Route element={<Tracking/>} path={'/map'}/>
                    <Route path={'*'} element={<Redirect/>}/>
                </Routes>
            ):(
                <Routes>
                    <Route path="/login" element={<Redirect />} />
                    <Route path="/registration" element={<Redirect />} />
                    <Route element={<Tracking/>} path={'/map'}/>
                    <Route path="/dashboard/*" element={<Dashboard />} />
                    <Route path="*" element={<Redirect />} />
                </Routes>
            )
        }
       
    </React.Suspense>
  );
}

export default App;
