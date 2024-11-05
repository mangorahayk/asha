import React from 'react';
import { Flex, Image, Text, Button, Divider } from '@chakra-ui/react';
import Baptism from '../../../assets/image/baptism.jpg'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Baptisms() {

    const navigate = useNavigate()
    const { t } = useTranslation()

    return (
        <Flex w={"full"} id='baptisms' justifyContent={"center"}>
            <Flex w={"full"}>
                <Flex w={"full"} alignItems={"center"} p={"40px"} flexDir={"column"} display={["none", "none", "none", "flex"]}>
                    <Flex w={"full"} alignItems={"center"} gap={4} justifyContent={"center"} >
                        <Divider maxW={"770px"} borderColor={"black"} />
                        <Text fontSize={"28px"} fontFamily={"sans"}>{t("btn.baptisms").toUpperCase()}</Text>
                        <Divider maxW={"770px"} borderColor={"black"} />
                    </Flex>
                    <Flex maxW={"1400px"} w={"full"} justifyContent={"space-around"} mt={"40px"} flexWrap={"wrap"}>
                    <Image src={Baptism} w={"650px"} h={"700px"} objectFit={"cover"} />
                        
                        <Flex gap={5} flexDir={"column"} w={"450px"} alignItems={"center"} justifyContent={"center"}>
                            <Text fontFamily={"sans"} fontSize={"25px"} letterSpacing={"1px"}>{t("home.baptisms.baptismOrg")}</Text>
                            <Text  fontSize={"17px"} textAlign={["center", "center", "center", "start"]} whiteSpace={"pre-line"}>
                            {t("home.baptisms.littleText")}
                            </Text>
                            <Button variant={"more"} onClick={()=>navigate('/baptisms')}>{t("btn.learnMore")}</Button>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex w={"full"} alignItems={"center"} pt={"40px"} flexDir={"column"} display={["flex", "flex", "flex", "none"]} p={"30px 10px"}>
                    <Flex w={"full"} alignItems={"center"} gap={4} justifyContent={"center"} >
                        <Divider maxW={"500px"} borderColor={"black"} />
                        <Text fontSize={"22px"} fontFamily={"sans"} >{t("btn.baptisms").toUpperCase()}</Text>
                        <Divider maxW={"500px"} borderColor={"black"} />
                    </Flex>
                    <Flex maxW={"1400px"} w={"full"} alignItems={"center"} justifyContent={"space-around"} mt={"40px"} flexDir={"column"}>
                        <Image src={Baptism} objectFit={"cover"} maxW={"500px"} w={"full"} />

                        <Flex gap={4} maxW={"450px"} w={"full"} alignItems={"center"} justifyContent={"center"} p={"15px"}  flexDir={"column"}>
                            <Text textAlign={"center"} fontFamily={"sans"} fontSize={"25px"} p={"20px 0 0 0"} whiteSpace={"pre-line"}>{t("home.baptisms.baptismOrg")}</Text>
                            <Text textAlign={"center"} fontSize={"17px"} whiteSpace={"pre-line"}>
                            {t("home.baptisms.littleText")}
                               </Text>
                            <Button variant={"more"} onClick={()=>navigate('/baptisms')}>{t("btn.learnMore")}</Button>

                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

            {/* <Image w={"full"} src={Bag} h={"900px"} objectFit={"cover"} filter={"brightness(0.4)"} pos={"relative"} />
            <Flex pt={"150px"} ml={"300px"} gap={10} flexDir={"column"} w={"1050px"} alignItems={"start"} pos={"absolute"} zIndex={"100"} color={"white"}>
                <Text fontFamily={"sans"} fontSize={"25px"} letterSpacing={"1px"}>Baptism Organization</Text>
                <Text fontSize={"19px"} overflow={"hidden"} textOverflow={"ellipsis"}>
                Mark a special day with our baptism accessories.

Welcome to Design by Ashya, where we offer a beautiful selection of baptism accessories to make your child's unique day unforgettable. From exquisite baptism dresses and towels to stylish boxes and personalized gifts, we have everything you need to create lasting memories.
<br />
Why choose us?
<br />

Quality craftsmanship. Each detail is made with love and care to ensure your little one’s most important moment. Unique assortment. Discover original and stylish accessories that reflect your family's traditions. Visit us today and find the perfect accessories for this sacred event."
                </Text>
                <Button variant={"more"} border={"1px solid white"} _hover={{ bg: "white", color:"black"}}>LEARN MORE</Button>
            </Flex> */}
        </Flex>
    );
}

export default Baptisms;