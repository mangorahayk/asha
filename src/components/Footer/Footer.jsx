import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import {ReactComponent as Facebook} from "../../assets/svg/facebook.svg"
import {ReactComponent as Instagram} from "../../assets/svg/instagram.svg"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { InstagramEmbed } from 'react-social-media-embed';
import './style.css'

function Footer() {

    const navigate = useNavigate()

    return (
        <Flex w={"full"} justifyContent={"center"} bg={"#F7F1F1"} p={"50px"} id='contact'>
            <Flex maxW={"1500px"} w={"full"} justifyContent={"space-between"} flexDir={["column", "column", "column", "row"]}>
                <Flex flexDir={"column"} >
            <Text fontSize={"40px"} fontFamily={"Alex Brush"} textAlign={"center"}>Design By Ashya</Text>
            <Text fontSize={"15px"} fontFamily={""} textAlign={"center"}>FOR YOUR EVENTS</Text>

            </Flex>
            <Flex gap={"20px"} flexDir={["column", "column", "column", "row"]} pt={["70px", "70px", "70px", '0']}>
               
                <Flex flexDir={"column"} alignItems={"start"}>
                    <Text letterSpacing={"2px"} fontWeight={"600"} pb={"5px"}>Contact Us</Text>
                    <Link to={"tel:37498762655"} className='links'>+374 98-76-26-55</Link>
                    <Link to={"tel:37491424003"} className='links'>+374 91-42-40-03</Link>
                    <Button variant={"base"} p={"0"} m={"0"}>ashawedding@gmail.com</Button>
                    <Flex alignItems={"center"} gap={2}>
                        <Link to={"https://www.facebook.com/ashxen.xaratyan?locale=ru_RU"} target='_blank'><Facebook className='face' /></Link>
                        <Link to={"https://www.instagram.com/designbyashya"} target='_blank'><Instagram className='inst'/></Link>
                    </Flex>
                </Flex>
                <Flex borderLeft={"1px solid #E0C8C8"} borderBottom={["1px solid #E0C8C8"]}></Flex>
                

                <Flex flexDir={"column"} alignItems={"start"}>
                    <Text letterSpacing={"2px"} fontWeight={"600"} pb={"5px"}>More Info</Text>
                    <Button variant={"base"} p={"0"} m={"0"} fontSize={"16px"} onClick={()=>navigate("/aboutus")}>About us</Button>
                    <Button variant={"base"} p={"0"} m={"0"} fontSize={"16px"} onClick={()=>navigate("/weddings")}>Weddings</Button>
                    <Button variant={"base"} p={"0"} m={"0"} fontSize={"16px"} onClick={()=>navigate("/baptisms")}>Baptisms</Button>
                    <Button variant={"base"} p={"0"} m={"0"} fontSize={"16px"} onClick={()=>navigate("/preporations")}>Cakes</Button>
                    <Button variant={"base"} p={"0"} m={"0"} fontSize={"16px"} onClick={()=>navigate("/preporations")}>Favors</Button>
                </Flex>
            </Flex>
            </Flex>
        </Flex>
    );
}

export default Footer;