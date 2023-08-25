import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { lazy} from "react";

import { Box } from '@mui/material';

import PrivateRoute from "shared/PrivateRoute";
import PublicRoute from "shared/PublicRoute";
import Header from "./Header";
// import {Box} from './Box/Box'
import { fetchCurrentUser } from "redux/auth/authOperation";


const PhoneBook = lazy(()=>import('./PhoneBook'));
const Login = lazy(()=>import('../pages/Login'));
const Register = lazy(()=>import('../pages/Register'));
const Home = lazy(()=>import('../pages/Home'))

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Box>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Home/>}/>
          <Route element={<PublicRoute/>}>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element= {<Register/>}/>
          </Route>
          <Route element={<PrivateRoute/> }>
            <Route path="contacts" element={<PhoneBook/>}/>
          </Route>
        </Route>
        <Route path="*" element={<Navigate to='/' replace/>}/>
      </Routes>
    </Box>
  );
};




