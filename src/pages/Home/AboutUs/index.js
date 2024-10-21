import React from 'react';
import { Button, Divider, Flex, Image, Text } from '@chakra-ui/react';
import tarosik from '../../../assets/image/tarosik.jpg'


function AboutUs() {
    return (
        <Flex w={"full"}>
            <Flex w={"full"} alignItems={"center"} p={"40px"} flexDir={"column"} display={["none", "none", "none", "flex"]}>
                <Flex w={"full"} alignItems={"center"} gap={4} justifyContent={"center"} >
                    <Divider maxW={"770px"} borderColor={"black"} />
                    <Text fontSize={"28px"} fontFamily={"sans"}>ABOUT US</Text>
                    <Divider maxW={"770px"} borderColor={"black"} />
                </Flex>
                <Flex maxW={"1400px"} w={"full"} justifyContent={"space-around"} mt={"40px"}>
                    <Flex gap={5} flexDir={"column"} w={"450px"} alignItems={"center"} justifyContent={"center"}>
                        <Text textAlign={"center"} fontFamily={"sans"} fontSize={"25px"}  letterSpacing={"1px"}>WeddingCakes Organization</Text>
                        <Text  textAlign={"center"} fontSize={"17px"} overflow={"hidden"} textOverflow={"ellipsis"}>
                            Ստեղծե՛ք Ձեր երազանքի հարսանիքը մեզ հետ: Design by Ashya **ում մենք հավատում ենք, որ յուրաքանչյուր մանրուք կարևոր է ձեր հատուկ օրվա համար: Բացահայտեք հարսանեկան աքսեսուարների մեր ապշեցուցիչ հավաքածուն՝ էլեգանտ շղարշներից և նրբագեղ թիարներից մինչև անհատականացված դեկոր և գեղեցիկ նվերներ:

                            ✨ Ինչու՞ ընտրել մեզ:
                            - Անհատականացման ընտրանքներ՝ ձեր թեմային համապատասխանելու համար
                            - Բացառիկ հաճախորդների սպասարկում՝ պլանավորումը հեշտացնելու համար
                            Գեղեցիկ ...
                        </Text>
                        <Button variant={"more"}>LEARN MORE</Button>
                    </Flex>
                    <Image src={tarosik} w={"650px"} h={"700px"} objectFit={"cover"} />
                </Flex>
            </Flex>
            <Flex w={"full"} alignItems={"center"} pt={"40px"} flexDir={"column"} display={["flex", "flex", "flex", "none"]}>
                <Flex w={"full"} alignItems={"center"} gap={4} justifyContent={"center"} >
                    <Divider maxW={"86px"} borderColor={"black"} />
                    <Text fontSize={"22px"} fontFamily={"sans"} >OUR DRESS SHOP</Text>
                    <Divider maxW={"86px"} borderColor={"black"} />
                </Flex>
                <Flex maxW={"1400px"} w={"full"} justifyContent={"space-around"} mt={"40px"} flexDir={"column"}>
                    <Image src={tarosik} objectFit={"cover"} />

                    <Flex gap={4} flexDir={"column"} maxW={"450px"} alignItems={"center"} justifyContent={"center"} p={"15px"}>
                        <Text textAlign={"center"} fontFamily={"sans"} fontSize={"25px"} p={"20px 0 0 0"}>Lorem Ipsum Dolor Sit Amet</Text>
                        <Text textAlign={"center"} fontSize={"14px"}>
                            Is an unforgettable moment in the journey to your wedding day. At Luv we focus on the experience more than any other aspect, ensuring that a bride’s time with us is carefully considered so that it is filled with passion and commitment from the moment a bride walks through our doors to walking down the aisle. At your appointment you can expect one-on-one styling with a dedicated and intuitive stylist, multiple colors and sizes of your favorite styles to try-on, multiple payment options to fit your needs, and a luxury showroom to call home with your Luv family.
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default AboutUs;