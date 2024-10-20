import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import {ReactComponent as Facebook} from "../../assets/svg/facebook.svg"
import {ReactComponent as Instagram} from "../../assets/svg/instagram.svg"

import './style.css'

function Footer() {
    return (
        <Flex w={"full"} justifyContent={"center"} bg={"#F7F1F1"} p={"50px"} id='contact'>
            <Flex maxW={"1500px"} w={"full"} justifyContent={"space-between"} flexDir={["column", "column", "column", "row"]}>
                <Flex flexDir={"column"} >
            <Text fontSize={"40px"} fontFamily={"Alex Brush"} textAlign={"center"}>Design By Ashya</Text>
            <Text fontSize={"15px"} fontFamily={""} textAlign={"center"}>FOR YOUR EVENTS</Text>

            </Flex>
            <Flex gap={"60px"} flexDir={["column", "column", "column", "row"]} pt={["70px", "70px", "70px", '0']}>
               
                <Flex flexDir={"column"} alignItems={"start"}>
                    <Text letterSpacing={"2px"} fontWeight={"600"} pb={"5px"}>Contact Us</Text>
                    <Button variant={"base"} p={"0"} m={"0"}>+374 41-23-83-13</Button>
                    <Button variant={"base"} p={"0"} m={"0"}>ashawedding@gmail.com</Button>
                    <Button variant={"base"} p={"0"} m={"0"}>Sayat Nova 24/3</Button>
                    <Flex alignItems={"center"} gap={2}>
                        <Facebook className='face' />
                        <Instagram className='inst' />
                    </Flex>
                </Flex>
                <Flex borderLeft={"1px solid #E0C8C8"} borderBottom={["1px solid #E0C8C8"]}></Flex>
                <Flex flexDir={"column"} alignItems={"start"}>
                    <Text letterSpacing={"2px"} fontWeight={"600"} pb={"5px"}>Hours</Text>
                    <Button variant={"base"} p={"0"} m={"0"}>Mon - Tue: 12PM–8PM</Button>
                    <Button variant={"base"} p={"0"} m={"0"}>Wed: Closed</Button>
                    <Button variant={"base"} p={"0"} m={"0"}>Thu - Fri: 12PM–8PM</Button>
                    <Button variant={"base"} p={"0"} m={"0"}>Sat & Sun: 9AM–5PM</Button>
                </Flex>
                <Flex borderLeft={"1px solid #E0C8C8"}></Flex>

                <Flex flexDir={"column"} alignItems={"start"} display={["none", "none", "none", "flex"]}>
                    <Text letterSpacing={"2px"} fontWeight={"600"} pb={"5px"}>More Info</Text>
                    <Button variant={"base"} p={"0"} m={"0"}>Weddings</Button>
                    <Button variant={"base"} p={"0"} m={"0"}>Dresses</Button>
                    <Button variant={"base"} p={"0"} m={"0"}>About us</Button>
                </Flex>
            </Flex>
            </Flex>
        </Flex>
    );
}

export default Footer;