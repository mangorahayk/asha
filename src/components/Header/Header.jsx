import React, { useState } from 'react';
import { Button, Flex, Text, } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Navbar } from '../../assets/svg/navbar.svg'
import CustomDrawer from '../CustomDrawer/Drawer';
import { Link as ScrollLink } from 'react-scroll'
import SelectLang from '../SelectLang/SelectLang';
import { useTranslation } from 'react-i18next';




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
    const navigate = useNavigate()
    const { t } = useTranslation()

    return (
        <Flex w={"full"} maxW={"1920px"} justifyContent={"center"} h={"70px"} p={"10px"} pos={"fixed"} zIndex={900} transition={"0.3s"} bg={"rgba(0,0,0, 0.8)"} color={"white"}  >
            <Flex justifyContent={"space-between"} w={"full"} alignItems={"center"} display={["none", "none", "none", "flex"]} >
                <Flex gap={"45px"} alignItems={"center"}>
                    <ScrollLink className='navLinkBtns'
                        smooth={true}
                        offset={-47}
                        duration={800}
                        to='aboutus'
                    >{t("btn.aboutus")}</ScrollLink>
                    <ScrollLink className='navLinkBtns'
                        smooth={true}
                        offset={-47}
                        duration={800}
                        to='weddings'
                    >{t('btn.weddings')}</ScrollLink>
                    <ScrollLink className='navLinkBtns'
                        smooth={true}
                        offset={-47}
                        duration={800}
                        to='baptisms'
                    >{t("btn.baptisms")}</ScrollLink>




                </Flex>

                <Flex justifyContent={"center"} alignItems={"center"}>
                    <Text fontFamily={"Alex Brush"} textAlign={"center"} fontSize={"35px"} onClick={() => navigate('/')} cursor={"pointer"} _hover={{ color: "#CBA373" }}>AshyaDesign</Text>

                </Flex>

                <Flex gap={"30px"} alignItems={"center"}>
                    <ScrollLink className='navLinkBtns'
                        smooth={true}
                        offset={-47}
                        duration={800}
                        to='other'
                    >{t("btn.cakes")}</ScrollLink>
                    <ScrollLink className='navLinkBtns'
                        smooth={true}
                        offset={-47}
                        duration={800}
                        to='other'
                    >{t("btn.favours")}</ScrollLink>
                    <ScrollLink className='navLinkBtns'
                        smooth={true}
                        offset={-47}
                        duration={1400}
                        to='contact'
                    >{t("btn.contact")}</ScrollLink>
                    <SelectLang />
                </Flex>
            </Flex>
            <Flex justifyContent={"space-between"} w={"full"} alignItems={"center"} display={["flex", "flex", "flex", "none"]} >
                <Flex gap={2}>
                    <CustomDrawer />
                </Flex>
                <Flex zIndex={"100"}>
                    <Text fontFamily={"Alex Brush"} fontSize={"23px"} onClick={() => navigate('/')}>AshyaDesign</Text>

                </Flex>
            </Flex>
        </Flex>

    );
}

export default Header;