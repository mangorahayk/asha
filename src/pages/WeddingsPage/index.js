import React, { useEffect } from 'react';
import { Flex, Image, Text, Divider, Button } from '@chakra-ui/react';
import Image1 from '../../assets/image/weddingimg2.jpg'
import Image3 from '../../assets/image/weddingimg3.jpg'
import Image4 from '../../assets/image/weddingimg4.jpg'
import Image5 from '../../assets/image/weddingimg5.jpg'
import Image6 from '../../assets/image/weddingimg6.jpg'
import { useLocation } from 'react-router-dom';
import ScrollToTop from '../../components/TopScroll/TopScroll';
import { Link as ScrollLink } from 'react-scroll'
import Swiper from '../../components/CustomSwiper/CustomSwiper';
import { useTranslation } from 'react-i18next';


function WeddingsPage(props) {

    ScrollToTop()
    const {t} = useTranslation()

    const weddingSlider = [
        {
            id: 1,
            img: Image1
        },

        {
            id: 3,
            img: Image3
        },
        {
            id: 4,
            img: Image4
        },
        {
            id: 5,
            img: Image5
        },
        {
            id: 6,
            img: Image6
        },
    ]


    return (
        <Flex w={"full"} justifyContent={"center"} alignItems={"center"} mt={"70px"} flexDir={"column"}>

            <Flex w={"full"} alignItems={"center"} bg={"colors.brand.200"} justifyContent={"center"}>
                <Text fontSize={"35px"} fontFamily={"sans"} p={"15px"}>{t("btn.weddings").toUpperCase()}</Text>
            </Flex>
            <Flex>

            </Flex>
            <Flex maxW={"1600px"} w={"full"} flexDir={"column"} p={"10px"} >
                <Flex maxW={"1400px"} w={"full"} justifyContent={"space-around"} alignItems={"center"} mt={"40px"} flexDir={["column", "column", "column", "row"]}>
                    <Image src={Image1} w={"650px"} h={"700px"} objectFit={"cover"} display={["none", "none", "none", "flex"]} />

                    <Flex gap={5} flexDir={"column"} maxW={"450px"} w={"full"} alignItems={"center"} justifyContent={"center"}>
                        <Text fontFamily={"sans"} fontSize={"24px"} letterSpacing={"1px"}>{t("home.weddings.weddingOrg")}</Text>
                        <Text fontSize={["14px", "16px", "15px", "17px"]}>
                          {t("home.weddings.textPg")}
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
                  <Swiper data={weddingSlider} />
                </Flex>
            </Flex>
        </Flex>
    );
}

export default WeddingsPage;