import { Flex } from '@chakra-ui/react';
import React from 'react';
import Content from './Content';
import Dresses from './Design';
import WeddingCakes from './WeddingCakes';
import Annuals from './Annuals';
import Baptisms from './Baptism';
import AboutUs from './AboutUs';
import Weddings from './Weddings';

const Home = () => {
    return (
        <Flex w={"full"} justifyContent={"center"} flexDir={"column"}>
            <Content />
            <AboutUs />
            <Weddings />
            {/* <Weddings /> */}
            <Baptisms />
            <WeddingCakes />
            {/* <Annuals /> */}
            {/* <Dresses /> */}
        </Flex>
    );
}

export default Home;
