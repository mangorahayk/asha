import { Flex } from '@chakra-ui/react';
import React from 'react';
import Content from './Content';
import Dresses from './Dresses';

const Home = () => {
    return (
        <Flex w={"full"} justifyContent={"center"} flexDir={"column"}>
            <Content />
            <Dresses />
        </Flex>
    );
}

export default Home;
