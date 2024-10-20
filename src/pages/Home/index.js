import { Flex } from '@chakra-ui/react';
import React from 'react';
import Content from './Content';
import Dresses from './Design';
import Weddings from './Weddings';
import WeddingCakes from './WeddingCakes';
import Annuals from './Annuals';
import Baptisms from './Baptism';

const Home = () => {
    return (
        <Flex w={"full"} justifyContent={"center"} flexDir={"column"}>
            <Content />
            <Weddings />
            <Baptisms />
            <WeddingCakes />
            <Annuals />
            {/* <Dresses /> */}
        </Flex>
    );
}

export default Home;
