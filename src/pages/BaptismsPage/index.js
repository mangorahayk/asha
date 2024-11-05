import React from 'react';
import { Flex, Image, Text, Divider, Button } from '@chakra-ui/react';
import Image1 from '../../assets/image/baptismFav.webp'
import Image2 from '../../assets/image/baptism.jpg'
import Image3 from '../../assets/image/baptismCake.webp'
import Image4 from '../../assets/image/baptismDecor.jpg'
import Image5 from '../../assets/image/baptism6.jpg'
import Image6 from '../../assets/image/baptismFavour.jpg'
import ScrollToTop from '../../components/TopScroll/TopScroll';
import { useTranslation } from 'react-i18next';


function BaptismsPage(props) {

    ScrollToTop()

    const {t} = useTranslation()

    return (
        <Flex w={"full"} justifyContent={"center"} alignItems={"center"} mt={"70px"} flexDir={"column"}>
            <Flex w={"full"} alignItems={"center"} bg={"colors.brand.200"} justifyContent={"center"}>
                <Text fontSize={"35px"} fontFamily={"sans"} p={"15px"}>{t("btn.baptisms").toUpperCase()}</Text>
            </Flex>
            <Flex maxW={"1600px"} w={"full"} flexDir={"column"} p={"10px"}>


                <Flex maxW={"1400px"} w={"full"} justifyContent={"space-around"} mt={"40px"} flexDir={["column", "column", "column", "row"]}>
                    <Image src={Image1} w={"650px"} h={"700px"} objectFit={"cover"} display={["none", "none", "none", "flex"]} />

                    <Flex gap={5} flexDir={"column"} maxW={"450px"} w={"full"} alignItems={"center"} justifyContent={"center"}>
                        <Text fontFamily={"sans"} fontSize={"25px"} letterSpacing={"1px"}>{t("home.baptisms.baptismOrg")}</Text>
                        <Text fontSize={["15px","16px","17px","17px"]}>
                        {t("home.baptisms.textPg")}
                        </Text>
                        <Button variant={"more"} >{t("btn.contact")}</Button>
                    </Flex>
                </Flex>
                <Flex w={"full"} justifyContent={"space-between"} p={"30px 0"}  flexDir={["column", "column", "column", "row"]}>
                    <Image src={Image6} w={"310px"} objectFit={"cover"} h={"330px"} />
                    <Image src={Image2} w={"310px"} objectFit={"cover"} h={"330px"} />
                    <Image src={Image3} w={"310px"} objectFit={"cover"} h={"330px"} />
                    <Image src={Image4} w={"310px"} objectFit={"cover"} h={"330px"} />
                    <Image src={Image5} w={"310px"} objectFit={"cover"} h={"330px"} />
                </Flex>
            </Flex>
        </Flex>
    );
}

export default BaptismsPage;