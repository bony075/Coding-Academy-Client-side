import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftsideNav from '../Pages/Shared/LeftsideNav/LeftsideNav';

const Main = () => {
    return (
        <div className=''>
            <Header></Header>
            <div className='grid grid-rows-1 gap-4 grid-cols-4 container mx-auto '>
                <div className=' columns-3xs'>
                    <LeftsideNav></LeftsideNav>
                </div>
                <div className='col-span-3'>
                        <Outlet></Outlet>                    
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;