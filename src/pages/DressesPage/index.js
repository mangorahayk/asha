import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import Dresses from '../../assets/image/dresses.webp'


function DressesPage(props) {
    return (
        <Flex justifyContent={"center"} alignItems={"center"}>
            <Image src={Dresses} filter={"brightness(0.5)"} />
            <Text pos={"absolute"} fontFamily={"Fredericka the Great"} color={"white"} fontSize={"40px"}>OUR DRESSES</Text>
        </Flex>
    );
}

export default DressesPage;