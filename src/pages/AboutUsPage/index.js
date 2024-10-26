import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import tarosik from '../../assets/image/tarosik.jpg'
import WeddingImg from '../../assets/image/weddingimg2.jpg'
import BaptismImg from '../../assets/image/baptism.jpg'
import CakeImg from '../../assets/image/cake2.jpg'
import {Link as ScrollLink} from 'react-scroll'
import ScrollToTop from '../../components/TopScroll/TopScroll';



function AboutUsPage(props) {

    ScrollToTop()

    return (
        <Flex w={"full"} justifyContent={"center"} alignItems={"center"} mt={"70px"} flexDir={"column"}>

             <Flex w={"full"} alignItems={"center"}  bg={"colors.brand.200"} justifyContent={"center"}>
                    <Text fontSize={"35px"} fontFamily={"sans"} p={"15px"}>ABOUT US</Text>
                </Flex>
                <Flex>
                    
                </Flex>
            <Flex maxW={"1600px"} w={"full"} flexDir={"column"} p={"10px"}>
                <Flex maxW={"1400px"} w={"full"} justifyContent={"space-around"} mt={"40px"} flexDir={["column", "column", "column", "row"]}>
                <Flex w={"650px"} flexWrap={"wrap"}>
                    <Image src={WeddingImg} w={"325px"} h={"350px"}  objectFit={"cover"} />
                    <Image src={tarosik} w={"325px"} h={"350px"}  objectFit={"cover"} />
                    <Image src={CakeImg} w={"325px"} h={"350px"}  objectFit={"cover"} />
                    <Image src={BaptismImg} w={"325px"} h={"350px"}  objectFit={"cover"} />

                    </Flex>
                    <Flex gap={5} flexDir={"column"} maxW={"450px"} w={"full"} alignItems={"center"} justifyContent={"center"}>
                        <Text fontFamily={"sans"} fontSize={"25px"} letterSpacing={"1px"}>About Us</Text>
                        <Text fontSize={["14px","16px","15px","17px"]} textAlign={"center"}>
                        Welcome to AshyaDesign, your ultimate destination for elegant wedding and baptism accessories, as well as beautifully designed event decorations. We believe that every celebration deserves to be extraordinary, and we are here to help you create memories that will last a lifetime.

We offer a stunning range of wedding accessories that reflect your unique style. Our collection includes everything from elegantly designed baskets, favors, candles, plates, bread covers, crowns, and more… We will make your love story memorable.
<br />
Baptisms
Celebrate the sacred occasion of baptism with our charming accessories, designed to honor faith and family. We provide a range of baptism candles, favors, towels, baskets, baptism clothes, and beautiful decorations.
<br />
Event Decorations, Cake Orders, Buffets
Beautifully organized marriage proposals, giant teddy bears, fairy tale characters—everything to make your day beautiful and unforgettable.
We specialize in complete event decoration, creating cohesive and impressive environments that leave lasting good memories.
                        </Text>
                        <ScrollLink 
                        className='pagesDesign'
                        smooth={true}
                        offset={-47}
                        duration={1400}
                        to='contact'
                    >CONTACT</ScrollLink>
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