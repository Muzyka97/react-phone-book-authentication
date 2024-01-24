// import {Box} from './Box/Box'
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { lazy} from "react";

import { Box } from '@mui/material';

import PrivateRoute from "shared/PrivateRoute";
import PublicRoute from "shared/PublicRoute";
import Loader from "shared/Loader";
import Header from "./Header";

import { fetchCurrentUser } from "redux/auth/authOperation";



const PhoneBook = lazy(()=>import('./PhoneBook'));
const Login = lazy(()=>import('../pages/Login'));
const Register = lazy(()=>import('../pages/Register'));
const Home = lazy(()=>import('../pages/Home'))

export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.auth.isLoading);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  if (isLoading) {
   
    return <Loader />;
  }

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




