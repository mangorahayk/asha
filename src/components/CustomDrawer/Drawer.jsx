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
import SelectLang from "../SelectLang/SelectLang"


import { useTranslation } from 'react-i18next';


function CustomDrawer() {
    const style = useLocation().pathname !== "/" ? "none" : "flex"
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const navigate = useNavigate()
    const { t } = useTranslation()



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
                        <Button variant={"base"} onClick={() => navigate("/")} display={useLocation().pathname === "/" ? "none" : "flex"}>HOME</Button>
                        <Flex alignItems={"start"} flexDir={"column"} gap={4} display={style} mt={"25px"}>
                            <ScrollLink className='navLinkBtns'
                                smooth={true}
                                offset={-47}
                                duration={900}
                                onClick={onClose}

                                to='weddings'
                            >{t('btn.weddings')}</ScrollLink>
                            <ScrollLink className='navLinkBtns'
                                smooth={true}
                                offset={-47}
                                duration={900}
                                onClick={onClose}

                                to='baptisms'
                            >{t("btn.baptisms")}</ScrollLink>
                            <ScrollLink className='navLinkBtns'
                                smooth={true}
                                offset={-47}
                                duration={800}
                                onClick={onClose}

                                to='aboutus'
                            >{t("btn.aboutus")}</ScrollLink>


                            <ScrollLink className='navLinkBtns'
                                smooth={true}
                                offset={-47}
                                duration={1200}
                                onClick={onClose}

                                to='other'
                            >{t("btn.favours")}</ScrollLink>
                            <ScrollLink className='navLinkBtns'
                                smooth={true}
                                offset={-47}
                                duration={1500}
                                onClick={onClose}

                                to='contact'
                            >{t("btn.contact")}</ScrollLink>
                            <ScrollLink className='navLinkBtns'
                                smooth={true}
                                offset={-47}
                                duration={1200}
                                onClick={onClose}

                                to='other'
                            >{t("btn.cakes")}</ScrollLink>
                        </Flex>
                        <Flex>
                            <SelectLang />
                        </Flex>
                    </DrawerBody>


                </DrawerContent>
            </Drawer>
        </>
    )
}


export default CustomDrawer