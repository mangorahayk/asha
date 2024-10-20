import React, { useState } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as Navbar } from '../../assets/svg/navbar.svg'
import CustomDrawer from '../CustomDrawer/Drawer';
import { Link as ScrollLink } from 'react-scroll'

import './style.css'

function Header() {

    let [bacG, setBacG] = useState(false)
    let [blackG, setBlackG] = useState(false)
    let [bigScroll, setBigScroll] = useState(false)
    const location = useLocation()
    const changeBg = () => {

        if (window.scrollY >= 70 && window.scrollY < 950) {
            setBacG(true)
        } else if (window.scrollY > 951) {
            setBigScroll(true)
            setBacG(false)

        } else {
            setBacG(false)
            setBigScroll(false)
        }

    }



    window.addEventListener('scroll', changeBg)

    let navigate = useNavigate()

    return (
        <Flex w={"full"} maxW={"1920px"} justifyContent={"center"} h={"70px"} p={"10px"} pos={"fixed"} top={0} zIndex={200} transition={"0.3s"} bg={bacG ? "rgba(255, 255, 255, 0.7)" : "transparent" && bigScroll ? "rgba(0, 0, 0, 0.8)" : "transparent"} color={bacG ? "black" :  "white"}  >
            <Flex justifyContent={"space-between"} w={"full"} alignItems={"center"} display={["none", "none", "none", "flex"]} >
                <Flex gap={"44px"} alignItems={"center"}>
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
                        to='weddings'
                    >BAPTISMS</ScrollLink>
                    <ScrollLink className='navLinkBtns'
                        smooth={true}
                        offset={-47}
                        duration={800}
                        to='weddings'
                    >ANNUALS</ScrollLink>
                    <ScrollLink className='navLinkBtns'
                        smooth={true}
                        offset={-47}
                        duration={800}
                        to='weddings'
                    >DESIGN</ScrollLink>
                </Flex>
                <Text fontFamily={"Alex Brush"} fontSize={"35px"} onClick={()=>navigate('/')} cursor={"pointer"}>Design By Ashya</Text>

                <Flex gap={"57px"} alignItems={"center"}>
                <ScrollLink className='navLinkBtns'
                        smooth={true}
                        offset={-47}
                        duration={800}
                        to='contact'
                    >ABOUT US</ScrollLink>
                    <ScrollLink className='navLinkBtns'
                        smooth={true}
                        offset={-47}
                        duration={800}
                        to='contact'
                    >CAKES</ScrollLink>
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
                    <Text>LOGO</Text>

                </Flex>
            </Flex>
        </Flex>

    );
}

export default Header;