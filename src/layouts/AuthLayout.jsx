import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const AuthLayout = () => {
    return (
        <Flex w={'full'} direction={'column'}> 
        <Header />
            <Outlet /> 
            <Footer />       
        </Flex>
    );
}

export default AuthLayout;
