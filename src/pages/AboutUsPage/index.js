import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import tarosik from '../../assets/image/tarosik.jpg'
import WeddingImg from '../../assets/image/weddingimg2.jpg'
import BaptismImg from '../../assets/image/baptism.jpg'
import CakeImg from '../../assets/image/cake2.jpg'
import {Link as ScrollLink} from 'react-scroll'
import ScrollToTop from '../../components/TopScroll/TopScroll';
import { useTranslation } from 'react-i18next';


function AboutUsPage(props) {

    ScrollToTop()
    const {t} = useTranslation()


    return (
        <Flex w={"full"} justifyContent={"center"} alignItems={"center"} mt={"70px"} flexDir={"column"}>

             <Flex w={"full"} alignItems={"center"}  bg={"colors.brand.200"} justifyContent={"center"}>
                    <Text fontSize={"35px"} fontFamily={"sans"} p={"15px"}>{t("btn.aboutus").toUpperCase()}</Text>
                </Flex>
                <Flex>
                    
                </Flex>
            <Flex maxW={"1600px"} w={"full"}  flexDir={"column"} p={"10px"}>
                <Flex maxW={"1400px"} w={"full"} alignItems={"center"} justifyContent={"space-around"} mt={"40px"} flexDir={["column", "column", "column", "row"]}>
                <Flex maxW={["500px","500px", "600px" ,"650px"]} flexWrap={"wrap"}>
                    <Image src={WeddingImg} maxW={["50%","50%", "50%", "325px"]} w={"full"} maxH={"350px"}  objectFit={"cover"} />
                    <Image src={tarosik} maxW={["50%","50%", "50%", "325px"]} w={"full"} maxH={"350px"}  objectFit={"cover"} />
                    <Image src={CakeImg} maxW={["50%","50%", "50%", "325px"]} w={"full"} maxH={"350px"}  objectFit={"cover"} />
                    <Image src={BaptismImg} maxW={["50%","50%", "50%", "325px"]} w={"full"} maxH={"350px"}  objectFit={"cover"} />

                    </Flex>
                    <Flex gap={5} flexDir={"column"} maxW={"450px"} w={"full"} alignItems={"center"} justifyContent={"center"} mt={"35px"}>
                        <Text fontFamily={"sans"} fontSize={"25px"} letterSpacing={"1px"}>{t("btn.aboutus")}</Text>
                        <Text fontSize={["14px","16px","16px","17px"]}  whiteSpace={"pre-line"}>
                        {t("home.aboutus.textPg")}
                        </Text>
                        <ScrollLink 
                        className='pagesDesign'
                        smooth={true}
                        offset={-47}
                        duration={1400}
                        to='contact'
                    >{t("btn.contact")}</ScrollLink>
                    </Flex>
                </Flex>
                <Flex w={"full"} justifyContent={"space-between"} p={"30px 0"} flexDir={["column", "column", "column", "row"]}>
                    {/* <Image src={Image6} w={"310px"} objectFit={"cover"} h={"330px"} />
                    <Image src={Image1} w={"310px"} objectFit={"cover"} h={"330px"} />
                    <Image src={Image3} w={"310px"} objectFit={"cover"} h={"330px"} />
                    <Image src={Image4} w={"310px"} objectFit={"cover"} h={"330px"} />
                    <Image src={Image5} w={"310px"} objectFit={"cover"} h={"330px"} /> */}
                </Flex>
            </Flex>
        </Flex>
    );
}

export default AboutUsPage;