import { FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../components/screens/home/Home';
import ErrorPage from '../components/screens/404/404';
import BookItem from '../components/screens/bookItem/bookItem';
import AdminPanel from '../components/screens/adminPanel/AdminPanel';
import Login from '../components/screens/authorization/Authorization';
import Registration from '../components/screens/authorization/Registration';

const Router: FC = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path='/'/>

                <Route element={<Login/>} path='/login'/>

                <Route element={<Registration/>} path='/registration'/>

                <Route element={<BookItem/>} path='/books/:id'/>

                <Route element={<AdminPanel/>} path='/admin'/>

                <Route element={<ErrorPage/>} path='*'/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router