import React from 'react';
import { Flex, Text, Image, Button } from '@chakra-ui/react';
import Cake from '../../assets/image/cake.jpg'
import Cake2 from '../../assets/image/cake2.jpg'
import Cake3 from '../../assets/image/cake3.jpg'
import Cake4 from '../../assets/image/cake4.jpg'
import Annual1 from '../../assets/image/tarosik.jpg'
import Annual2 from '../../assets/image/baptism6.jpg'
import Annual3 from '../../assets/image/weddingimg5.jpg'
import Annual4 from '../../assets/image/Favor4.jpg'
import ScrollToTop from '../../components/TopScroll/TopScroll';
import { Link as ScrollLink } from 'react-scroll'

import { useTranslation } from 'react-i18next';

function Preporations() {

    ScrollToTop()
    const { t } = useTranslation()


    return (
        <Flex w={"full"} justifyContent={"center"} mt={"70px"}>
            <Flex w={"full"} flexDir={"column"} alignItems={"center"}>
                <Flex w={"full"} alignItems={"center"} bg={"colors.brand.200"} justifyContent={"center"}>
                    <Text fontSize={"35px"} fontFamily={"sans"} p={"15px"}>{t("home.other.preporations").toUpperCase()}</Text>
                </Flex>
                <Flex maxW={"1600px"} w={"full"} flexDir={"column"} pb={"50px"} alignItems={"center"} p={"0 10px"}>
                    <Flex maxW={"1400px"} gap={["3", "3", '0', '0']} w={"full"} justifyContent={"space-around"} alignItems={"center"} mt={"40px"} flexDir={["column", "column", "row", "row"]}>
                        <Text fontFamily={"sans"} fontSize={"25px"} letterSpacing={"1px"} display={["flex", "block", "none", "none"]}>{t("btn.cakes")}</Text>

                        <Flex maxW={["500px", "500px", "600px", "650px"]} h={"700px"} flexWrap={"wrap"}>
                            <Image src={Cake} maxW={["50%", "50%", "200px", "260px"]} w={"full"} maxH={"350px"} objectFit={"cover"} />
                            <Image src={Cake2} maxW={["50%", "50%", "200px", "260px"]} w={"full"} maxH={"350px"} objectFit={"cover"} />
                            <Image src={Cake3} maxW={["50%", "50%", "200px", "260px"]} w={"full"} maxH={"350px"} objectFit={"cover"} />
                            <Image src={Cake4} maxW={["50%", "50%", "200px", "260px"]} w={"full"} maxH={"350px"} objectFit={"cover"} />

                        </Flex>

                        <Flex gap={5} flexDir={"column"} maxW={"450px"} w={"full"} alignItems={"center"} justifyContent={"center"}>
                            <Text fontFamily={"sans"} fontSize={"25px"} letterSpacing={"1px"} display={["none", "none", "flex", "flex"]}>{t("btn.cakes")}</Text>
                            <Text fontSize={"17px"} overflow={"hidden"} textOverflow={"ellipsis"} textAlign={"center"}>
                                {t("home.other.cakesText")}
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

                    <Flex maxW={"1500px"} pb={"25px"} gap={["3", "3", '0', '0']} w={"full"} alignItems={"center"} justifyContent={"space-around"} mt={"40px"} flexDir={["column", "column", "row", "row"]}>


                        <Flex gap={5} flexDir={"column"} maxW={"450px"} alignItems={"center"} justifyContent={"center"}>
                            <Text fontFamily={"sans"} fontSize={"25px"} letterSpacing={"1px"}>
                                {t("btn.favours")}
                            </Text>
                            <Text fontSize={"18px"} textAlign={"center"} >
                                {t("home.other.favoursText")}

                            </Text>
                            <Button variant={"more"} >{t("btn.contact")}</Button>
                        </Flex>
                        <Flex maxW={["500px", "500px", "600px", "650px"]} h={"650px"} flexWrap={"wrap"}>
                            <Image src={Annual1} maxW={["50%", "50%", "50%", "260px"]} w={"full"} maxH={"325px"} objectFit={"cover"} />
                            <Image src={Annual4} maxW={["50%", "50%", "50%", "260px"]} w={"full"} maxH={"325px"} objectFit={"cover"} />
                            <Image src={Annual3} maxW={["50%", "50%", "50%", "260px"]} w={"full"} maxH={"325px"} objectFit={"cover"} />
                            <Image src={Annual2} maxW={["50%", "50%", "50%", "260px"]} w={"full"} maxH={"325px"} objectFit={"cover"} />
                        </Flex>


                    </Flex>

                </Flex>
            </Flex>
        </Flex>
    );
}

export default Preporations;