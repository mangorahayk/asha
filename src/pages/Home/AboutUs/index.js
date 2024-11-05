import React from 'react';
import { Button, Divider, Flex, Image, Text } from '@chakra-ui/react';
import tarosik from '../../../assets/image/tarosik.jpg'
import WeddingImg from '../../../assets/image/weddingimg2.jpg'
import BaptismImg from '../../../assets/image/baptism.jpg'
import CakeImg from '../../../assets/image/cake2.jpg'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import "./style.css"

function AboutUs() {

    const navigate = useNavigate()

    const { t } = useTranslation()
    
    return (
        <Flex w={"full"} id='aboutus'>
            <Flex w={"full"} alignItems={"center"} p={"40px"} flexDir={"column"} display={["none", "none", "none", "flex"]}>
                <Flex w={"full"} alignItems={"center"} gap={4} justifyContent={"center"} flexWrap={"nowrap"} >
                    <Divider maxW={"740px"} borderColor={"black"} />
                    <Text fontSize={"28px"} fontFamily={"sans"}>{t("home.aboutus.about")}</Text>
                    <Text fontSize={"28px"} fontFamily={"sans"}>{t("home.aboutus.us")}</Text>
                    <Divider maxW={"740px"} borderColor={"black"} />
                </Flex>
                <Flex maxW={"1400px"} w={"full"} justifyContent={"space-around"} mt={"40px"} gap={"69px"}>
                    <Flex gap={5} flexDir={"column"} w={"450px"} alignItems={"center"} justifyContent={"center"}>
                        <Text textAlign={"center"} fontFamily={"sans"} fontSize={"25px"}  letterSpacing={"1px"}>{t("btn.aboutus")}</Text>
                        <Text  textAlign={"center"} fontSize={"17px"} overflow={"hidden"} textOverflow={"ellipsis"}>
                        {t("home.aboutus.littleText")}

                        </Text>
                        <Button variant={"more"} onClick={()=>navigate("/aboutus")}>{t("btn.learnMore")}</Button>
                    </Flex>
                    <Flex maxW={"650px"} w={"full"} flexWrap={"wrap"}>
                    <Image src={WeddingImg} maxW={"260px"} w={"full"} h={"350px"}  objectFit={"cover"} />
                    <Image src={tarosik} maxW={"260px"} w={"full"} h={"350px"}  objectFit={"cover"} />
                    <Image src={CakeImg} maxW={"260px"} w={"full"} h={"350px"}  objectFit={"cover"} />
                    <Image src={BaptismImg} maxW={"260px"} w={"full"} h={"350px"}  objectFit={"cover"} />

                    </Flex>
                </Flex>
            </Flex>
            <Flex w={"full"} alignItems={"center"} pt={"40px"} flexDir={"column"} display={["flex", "flex", "flex", "none"]} p={"30px 10px"}>
                <Flex w={"full"} alignItems={"center"} gap={4} justifyContent={"center"} >
                    <Divider maxW={"500px"} borderColor={"black"} />
                    <Flex gap={2}>
                    <Text fontSize={"22px"} fontFamily={"sans"} >{t("home.aboutus.about")}</Text>
                    <Text fontSize={"22px"} fontFamily={"sans"} >{t("home.aboutus.us")}</Text>
                    </Flex>
                    <Divider maxW={"500px"} borderColor={"black"} />
                </Flex>
                <Flex maxW={"1400px"} w={"full"} justifyContent={"space-around"} mt={"40px"} flexDir={"column"} alignItems={"center"}>
                <Flex maxW={"500px"} flexWrap={"wrap"} justifyContent={"center"}>
                    <Image src={WeddingImg} maxW={"50%"} w={"full"} maxH={"350px"}  objectFit={"cover"} />
                    <Image src={tarosik} maxW={"50%"} w={"full"} maxH={"350px"}  objectFit={"cover"} />
                    <Image src={CakeImg} maxW={"50%"} w={"full"} maxH={"350px"}  objectFit={"cover"} />
                    <Image src={BaptismImg} maxW={"50%"} w={"full"} maxH={"350px"}  objectFit={"cover"} />

                    </Flex>

                    <Flex gap={4} flexDir={"column"} maxW={"450px"} alignItems={"center"} justifyContent={"center"} p={"15px"}>
                        <Text textAlign={"center"} fontFamily={"sans"} fontSize={"25px"} p={"20px 0 0 0"}>{t("btn.aboutus")}</Text>
                        <Text textAlign={"center"} fontSize={"15px"}>
                        {t("home.aboutus.littleText")}
                        </Text>
                        <Button variant={"more"} onClick={()=>navigate("/aboutus")}>{t("btn.learnMore")}</Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default AboutUs;