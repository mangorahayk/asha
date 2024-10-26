import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { ReactComponent as RightArrow } from '../../assets/svg/rightArrow.svg'


function CustomBtn({title, onclick}) {
    return (
    <Flex onClick={onclick} cursor={"pointer"} border={"1px solid white"} fontSize={"14px"} letterSpacing={"1px"} alignItems={"center"} p={"9px 16px 8px 22px"} borderRadius={"6px"} > 
        <Text  fontWeight={600}>{title}</Text>
        <RightArrow />
    </Flex>
    );
}

export default CustomBtn;