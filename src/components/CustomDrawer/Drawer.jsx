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





function CustomDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

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
                        <Flex alignItems={"start"} flexDir={"column"} gap={4}
                        >
                            <ScrollLink className='navLinkBtns'
                                smooth={true}
                                offset={-47}
                                duration={800}
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
                            <Button variant={"base"} letterSpacing={"1.7px"}>EN</Button>
                        </Flex>
                    </DrawerBody>


                </DrawerContent>
            </Drawer>
        </>
    )
}


export default CustomDrawer