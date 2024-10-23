import React, { useState } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as Navbar } from '../../assets/svg/navbar.svg'
import CustomDrawer from '../CustomDrawer/Drawer';
import { Link as ScrollLink } from 'react-scroll'

import './style.css'




function Header() {
    
    // const style = useLocation().pathname !== "/weddings" && "/baptisms" ? "black" : "white"
    // let [bacG, setBacG] = useState(false)
    // let [bigScroll, setBigScroll] = useState(false)
    // const changeBg = () => {

    //     if (window.scrollY >= 70 && window.scrollY < 950) {
    //         setBacG(true)
    //     } else if (window.scrollY > 951) {
    //         setBigScroll(true)
    //         setBacG(false)

    //     } else {
    //         setBacG(false)
    //         setBigScroll(false)
    //     }

    // }

    
    // window.addEventListener('scroll', changeBg)
    
    // bigScroll ?   "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.8)" 
    let navigate = useNavigate()

    return (
        <Flex w={"full"} maxW={"1920px"} justifyContent={"center"} h={"70px"} p={"10px"} pos={"fixed"} zIndex={900} transition={"0.3s"} bg={"rgba(0,0,0, 0.8)"} color={"white"}  >
            <Flex justifyContent={"space-between"} w={"full"} alignItems={"center"} display={["none", "none", "none", "flex"]} >
                <Flex gap={"45px"} alignItems={"center"}>
                    <ScrollLink className='navLinkBtns'
                        smooth={true}
                        offset={-47}
                        duration={800}
                        to='weddings'
                    >WEDDINGS</ScrollLink>
                    <ScrollLink className='navLinkBtns'
                        smooth={true}
                        offset={-47}
                        duration={800}
                        to='baptisms'
                    >BAPTISMS</ScrollLink>
            <ScrollLink className='navLinkBtns'
                        smooth={true}
                        offset={-47}
                        duration={800}
                        to='aboutus'
                    >ABOUT US</ScrollLink>


                 
                </Flex>
                <Text fontFamily={"Alex Brush"} fontSize={"35px"} onClick={() => navigate('/')} cursor={"pointer"}>Design By Ashya</Text>

                <Flex gap={"30px"} alignItems={"center"}>
                    <ScrollLink className='navLinkBtns'
                        smooth={true}
                        offset={-47}
                        duration={800}
                        to='other'
                    >CAKES</ScrollLink>
                    <ScrollLink className='navLinkBtns'
                        smooth={true}
                        offset={-47}
                        duration={800}
                        to='other'
                    >ANNUALS</ScrollLink>
                  <ScrollLink className='navLinkBtns'
                        smooth={true}
                        offset={-47}
                        duration={1400}
                        to='contact'
                    >CONTACT</ScrollLink>
                    <Button variant={"base"} letterSpacing={"1.7px"}>EN</Button>
                </Flex>
            </Flex>
            <Flex justifyContent={"space-between"} w={"full"} alignItems={"center"} display={["flex", "flex", "flex", "none"]} >
                <Flex gap={2}>
                    <CustomDrawer />
                </Flex>
                <Flex gap={2} zIndex={"100"}>
                    <Text fontFamily={"Alex Brush"} fontSize={"29px"}>Ashya</Text>

                </Flex>
            </Flex>
        </Flex>

    );
}

export default Header;