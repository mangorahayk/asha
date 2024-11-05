import { Flex } from '@chakra-ui/react';
import React from 'react';
import Content from './Content';
import Dresses from './Design';
import Other from './Other';
import Annuals from './Annuals';
import Baptisms from './Baptism';
import AboutUs from './AboutUs';
import Weddings from './Weddings';
import ScrollToTop from '../../components/TopScroll/TopScroll';

const Home = () => {

    ScrollToTop()

    return (
        <Flex w={"full"} justifyContent={"center"} flexDir={"column"}>
            <Content />
            <AboutUs />
            <Weddings />
            <Baptisms />
            <Other />
        </Flex>
    );
}

export default Home;
