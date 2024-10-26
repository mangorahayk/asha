import React from "react"
import {
    Button,
    Flex,
    Text,
    Drawer,
    DrawerBody,

    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import { ReactComponent as Navbar } from '../../assets/svg/navbar.svg'
import { Link as ScrollLink } from 'react-scroll'
import { useNavigate, useLocation } from "react-router-dom"




function CustomDrawer() {
    const style = useLocation().pathname !== "/" ? "none" : "flex"
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const navigate = useNavigate()
    return (
        <>
            <Button ref={btnRef} variant={"none"} colorScheme='teal' onClick={onOpen}>
                <Navbar />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />

                    <DrawerBody fontFamily={"sans-serif"}>
                            <Button variant={"base"}  onClick={()=>navigate("/")} display={useLocation().pathname === "/" ? "none" : "flex"}>HOME</Button>
                        <Flex alignItems={"start"} flexDir={"column"} gap={4} display={style} mt={"25px"}>
                        <ScrollLink className='navLinkBtns'
                                smooth={true}
                                offset={-47}
                                duration={900}
                                    onClick={onClose}

                                to='weddings'
                            >WEDDINGS</ScrollLink>
                            <ScrollLink className='navLinkBtns'
                                smooth={true}
                                offset={-47}
                                duration={900}
                                    onClick={onClose}

                                to='baptisms'
                            >BAPTISMS</ScrollLink>
                            <ScrollLink className='navLinkBtns'
                                smooth={true}
                                offset={-47}
                                duration={800}
                                    onClick={onClose}

                                to='aboutus'
                            >ABOUT US</ScrollLink>

                          
                            <ScrollLink className='navLinkBtns'
                                smooth={true}
                                offset={-47}
                                duration={1200}
                                    onClick={onClose}

                                to='other'
                            >ANNUALS</ScrollLink>
                            <ScrollLink className='navLinkBtns'
                                smooth={true}
                                offset={-47}
                                duration={1500}
                                    onClick={onClose}

                                to='contact'
                            >CONTACT</ScrollLink>
                              <ScrollLink className='navLinkBtns'
                                smooth={true}
                                offset={-47}
                                duration={1200}
                                    onClick={onClose}

                                to='other'
                            >CAKES</ScrollLink>
                        </Flex>
                            <Button variant={"base"} letterSpacing={"1.7px"} display={"block"}>EN</Button>
                    </DrawerBody>


                </DrawerContent>
            </Drawer>
        </>
    )
}


export default CustomDrawer