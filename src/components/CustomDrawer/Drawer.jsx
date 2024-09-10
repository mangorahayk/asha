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

                    <DrawerBody fontFamily={"Montserrat"}>
                        <Flex alignItems={"start"} flexDir={"column"} gap={4}
                        >
                        <ScrollLink to='aboutus'
                                    className='navLinkFooter footerHover'
                                    smooth={true}
                                    duration={500}
                                    onClick={onClose}
                                    offset={-25}>О нас</ScrollLink>
                                <ScrollLink to={"work"}
                                    className='navLinkFooter footerHover'
                                    smooth={true}
                                    duration={500}
                                    onClick={onClose}
                                    offset={-25}>Работы</ScrollLink>
                                <ScrollLink to={"specialequipment"}
                                    className='navLinkFooter footerHover'
                                    smooth={true}
                                    offset={50}
                                    onClick={onClose}
                                    duration={500}>
                                    Спецтехника
                                </ScrollLink>
                                <ScrollLink to={"services"}
                                    className='navLinkFooter footerHover'
                                    smooth={true}
                                    duration={500}
                                    onClick={onClose}
                                >Наши услуги</ScrollLink>
                                <ScrollLink to={"collectiv"}
                                    className='navLinkFooter footerHover'
                                    smooth={true}
                                    duration={500}
                                    offset={50}
                                    onClick={onClose}
                                >Коллектив</ScrollLink>
                        </Flex>
                    </DrawerBody>


                </DrawerContent>
            </Drawer>
        </>
    )
}


export default CustomDrawer