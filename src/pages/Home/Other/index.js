import React from 'react';
import { Button, Divider, Flex, Image, Text } from '@chakra-ui/react';
import tarosik from '../../../assets/image/tarosik.jpg'
import Cake from '../../../assets/image/cake.jpg'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Other() {
  
    const navigate = useNavigate()
    const { t } = useTranslation()


    return (
        <Flex w={"full"} id='other'>
            <Flex w={"full"} alignItems={"center"} p={"40px"} flexDir={"column"} display={["none", "none", "none", "flex"]}>
                <Flex w={"full"} alignItems={"center"} gap={4} justifyContent={"center"} >
                    <Divider maxW={"700px"} borderColor={"black"} />
                    <Text fontSize={"28px"} fontFamily={"sans"}>{t("home.other.other").toUpperCase()} </Text>
                    <Text fontSize={"28px"} fontFamily={"sans"}>{t("home.other.preporations").toUpperCase()} </Text>
                    <Divider maxW={"700px"} borderColor={"black"} />
                </Flex>
                <Flex maxW={"1450px"} w={"full"} justifyContent={"space-around"} mt={"40px"} gap={"20px"}>
                    <Flex alignItems={"center"} flexDir={"column"} gap={5}>
                    <Text textAlign={"center"} fontFamily={"sans"} fontSize={"25px"}  letterSpacing={"1px"}>{t("btn.cakes")}</Text>

                    <Image src={Cake} w={"490px"} h={"490px"} objectFit={"cover"} />
                    <Flex gap={5} flexDir={"column"} w={"450px"} alignItems={"center"} justifyContent={"center"}>
                        <Button variant={"more"} onClick={()=>navigate("/preporations")} id="cake">{t("btn.learnMore")}</Button>
                    </Flex>
                    </Flex>
                    <Flex flexDir={"column"} gap={5} alignItems={"center"}>
                    <Text textAlign={"center"} fontFamily={"sans"} fontSize={"25px"}  letterSpacing={"1px"}>{t("btn.favours")}</Text>

                    <Image src={tarosik} w={"490px"} h={"490px"} objectFit={"cover"} />
                    <Flex gap={5} flexDir={"column"} w={"450px"} alignItems={"center"} justifyContent={"center"}>
                        <Button variant={"more"} onClick={()=>navigate("/preporations")}>{t("btn.learnMore")}</Button>
                    </Flex>
                    </Flex>
               
                </Flex>
            </Flex>
            <Flex w={"full"} alignItems={"center"} p={"30px 10px 90px 10px"} flexDir={"column"} display={["flex", "flex", "flex", "none"]}>
            <Flex w={"full"} alignItems={"center"} gap={3} justifyContent={"center"} >
                    <Divider maxW={"700px"} borderColor={"black"} />
                    <Text fontSize={"23px"} fontFamily={"sans"}>{t("home.other.other").toUpperCase()} </Text>
                    <Text fontSize={"23px"} fontFamily={"sans"}>{t("home.other.preporations").toUpperCase()}  </Text>
                    <Divider maxW={"700px"} borderColor={"black"} />
                </Flex>
                <Flex maxW={"1450px"} w={"full"} flexDir={"column"} alignItems={"center"} mt={"40px"} gap={10}>
                    <Flex alignItems={"center"} flexDir={"column"} gap={5}>
                    <Text textAlign={"center"} fontFamily={"sans"} fontSize={"25px"}  letterSpacing={"1px"}>{t("btn.cakes")}</Text>

                    <Image src={Cake} objectFit={"cover"} maxW={"440px"} w={"full"}/>
                    <Flex gap={5} flexDir={"column"} maxW={"450px"} alignItems={"center"} justifyContent={"center"}>
                        <Button variant={"more"} onClick={()=>navigate("/preporations")}>{t("btn.learnMore")}</Button>
                    </Flex>
                    </Flex>
                   
               
                </Flex>
                <Flex maxW={"1450px"} w={"full"} flexDir={"column"} alignItems={"center"} mt={"40px"} gap={10}>
                    <Flex alignItems={"center"} flexDir={"column"} gap={5}>
                    <Text textAlign={"center"} fontFamily={"sans"} fontSize={"25px"}  letterSpacing={"1px"}>{t("btn.favours")}</Text>

                    <Image src={tarosik} objectFit={"cover"} maxW={"440px"} w={"full"}/>
                    <Flex gap={5} flexDir={"column"} maxW={"450px"} alignItems={"center"} justifyContent={"center"}>
                        <Button variant={"more"} onClick={()=>navigate("/preporations")}>{t("btn.learnMore")}</Button>
                    </Flex>
                    </Flex>
                   
               
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Other;