import React from 'react';
import { Button, Divider, Flex, Image, Text } from '@chakra-ui/react';
import tarosik from '../../../assets/image/tarosik.jpg'
import WeddingImg from '../../../assets/image/weddingimg2.jpg'
import BaptismImg from '../../../assets/image/baptism.jpg'
import CakeImg from '../../../assets/image/cake2.jpg'
import { useNavigate } from 'react-router-dom';
function AboutUs() {

    const navigate = useNavigate()

    return (
        <Flex w={"full"} id='aboutus'>
            <Flex w={"full"} alignItems={"center"} p={"40px"} flexDir={"column"} display={["none", "none", "none", "flex"]}>
                <Flex w={"full"} alignItems={"center"} gap={4} justifyContent={"center"} flexWrap={"nowrap"} >
                    <Divider maxW={"740px"} borderColor={"black"} />
                    <Text fontSize={"28px"} fontFamily={"sans"}>ABOUT</Text>
                    <Text fontSize={"28px"} fontFamily={"sans"}>US</Text>
                    <Divider maxW={"740px"} borderColor={"black"} />
                </Flex>
                <Flex maxW={"1400px"} w={"full"} justifyContent={"space-around"} mt={"40px"}>
                    <Flex gap={5} flexDir={"column"} w={"450px"} alignItems={"center"} justifyContent={"center"}>
                        <Text textAlign={"center"} fontFamily={"sans"} fontSize={"25px"}  letterSpacing={"1px"}>About Us</Text>
                        <Text  textAlign={"center"} fontSize={"17px"} overflow={"hidden"} textOverflow={"ellipsis"}>
                        Welcome to AshyaDesign, your ultimate destination for elegant wedding and baptism accessories, as well as beautifully designed event decorations. We believe that every celebration deserves to be extraordinary, and we are here to help you create memories that will last a lifetime.

We offer a stunning range of wedding accessories that reflect your unique style. Our collection includes everything from elegantly designed baskets, favors, candles, plates, lavash, crowns, and more… We will make your love story memorable.

...

                        </Text>
                        <Button variant={"more"} onClick={()=>navigate("/aboutus")}>LEARN MORE</Button>
                    </Flex>
                    <Flex w={"650px"} flexWrap={"wrap"}>
                    <Image src={WeddingImg} w={"325px"} h={"350px"}  objectFit={"cover"} />
                    <Image src={tarosik} w={"325px"} h={"350px"}  objectFit={"cover"} />
                    <Image src={CakeImg} w={"325px"} h={"350px"}  objectFit={"cover"} />
                    <Image src={BaptismImg} w={"325px"} h={"350px"}  objectFit={"cover"} />

                    </Flex>
                </Flex>
            </Flex>
            <Flex w={"full"} alignItems={"center"} pt={"40px"} flexDir={"column"} display={["flex", "flex", "flex", "none"]} p={"30px 10px"}>
                <Flex w={"full"} alignItems={"center"} gap={4} justifyContent={"center"} >
                    <Divider maxW={"500px"} borderColor={"black"} />
                    <Flex gap={2}>
                    <Text fontSize={"22px"} fontFamily={"sans"} >ABOUT</Text>
                    <Text fontSize={"22px"} fontFamily={"sans"} >US</Text>
                    </Flex>
                    <Divider maxW={"500px"} borderColor={"black"} />
                </Flex>
                <Flex maxW={"1400px"} w={"full"} justifyContent={"space-around"} mt={"40px"} flexDir={"column"} alignItems={"center"}>
                    <Image src={tarosik} objectFit={"cover"} maxW={"500px"} w={"full"} />

                    <Flex gap={4} flexDir={"column"} maxW={"450px"} alignItems={"center"} justifyContent={"center"} p={"15px"}>
                        <Text textAlign={"center"} fontFamily={"sans"} fontSize={"25px"} p={"20px 0 0 0"}>Lorem Ipsum Dolor Sit Amet</Text>
                        <Text textAlign={"center"} fontSize={"14px"}>
                            Is an unforgettable moment in the journey to your wedding day. At Luv we focus on the experience more than any other aspect, ensuring that a bride’s time with us is carefully considered so that it is filled with passion and commitment from the moment a bride walks through our doors to walking down the aisle. At your appointment you can expect one-on-one styling with a dedicated and intuitive stylist, multiple colors and sizes of your favorite styles to try-on, multiple payment options to fit your needs, and a luxury showroom to call home with your Luv family.
                        </Text>
                        <Button variant={"more"}>LEARN MORE</Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default AboutUs;