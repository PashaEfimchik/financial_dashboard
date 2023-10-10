import React, {useEffect, useState} from 'react';
import './App.css';
import Home from "./components/Home";
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import {updateSuccessUser} from "./actions/user";
import {useDispatch} from "react-redux";

function App() {
    const initialIsAuth = !!localStorage.getItem('token');
    const [isAuth, setIsAuth] = useState(initialIsAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUser = async () => {
            const user = await updateSuccessUser(localStorage.getItem("token"), dispatch);
            console.log("user update", user);
            setIsAuth(true);
        };

        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            fetchUser().then(() => {
                console.log();
            });
        }
    }, [dispatch, isAuth]);

    return (
      <BrowserRouter>
          <Routes>
              <Route path="/home" element={ isAuth ? <Home /> : <Navigate to="/login" replace /> } />
              <Route path="/login" element={<LoginForm handleLoginIsAuth={() => setIsAuth(true)} />} />

              <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
