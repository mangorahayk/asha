import React, { useEffect } from 'react';
import { Flex, Image, Text, Divider, Button } from '@chakra-ui/react';
import Image1 from '../../assets/image/weddingimg2.jpg'
import Image2 from '../../assets/image/tarosik.jpg'
import Image3 from '../../assets/image/weddingimg3.jpg'
import Image4 from '../../assets/image/weddingimg4.jpg'
import Image5 from '../../assets/image/weddingimg5.jpg'
import Image6 from '../../assets/image/weddingimg6.jpg'
import { useLocation } from 'react-router-dom';
import ScrollToTop from '../../components/TopScroll/TopScroll';
import {Link as ScrollLink} from 'react-scroll'



function WeddingsPage(props) {

    ScrollToTop()
  


    return (
        <Flex w={"full"} justifyContent={"center"} alignItems={"center"} mt={"70px"} flexDir={"column"}>

             <Flex w={"full"} alignItems={"center"}  bg={"colors.brand.200"} justifyContent={"center"}>
                    <Text fontSize={"35px"} fontFamily={"sans"} p={"15px"}>WEDDINGS</Text>
                </Flex>
                <Flex>
                    
                </Flex>
            <Flex maxW={"1600px"} w={"full"} flexDir={"column"} p={"10px"}>
                <Flex maxW={"1400px"} w={"full"} justifyContent={"space-around"} mt={"40px"} flexDir={["column", "column", "column", "row"]}>
                <Image src={Image1} w={"650px"} h={"700px"} objectFit={"cover"} display={["none", "none", "none", "flex"]} />

                    <Flex gap={5} flexDir={"column"} maxW={"450px"} w={"full"} alignItems={"center"} justifyContent={"center"}>
                        <Text fontFamily={"sans"} fontSize={"25px"} letterSpacing={"1px"}>Weddings Organization</Text>
                        <Text fontSize={["14px","16px","15px","17px"]}>
                            Create your dream wedding with us: Design by Ashya, where we believe that every detail is important for your special day. Discover our amazing collection of wedding accessories — from elegant veils and exquisite tiaras to personalized decor and beautiful gifts.
                            <br />
                            Why choose us?
                            <br />
                            Personalized options to match your theme
                            Exceptional customer service to ease your planning
                            Beautiful and elegant baskets, decor, refined plates, personalized glass designs, boxes for Gata, lavash, and even boxes with rose petals. Floral arrangements with natural flowers are also available. We accept orders of any size.

                            Schedule a consultation today and let us help you make your dream a reality.

                            Visit our Instagram page, Design by Ashya, and start your journey to the perfect wedding.
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
                    <Image src={Image6} w={"310px"} objectFit={"cover"} h={"330px"} />
                    <Image src={Image1} w={"310px"} objectFit={"cover"} h={"330px"} />
                    <Image src={Image3} w={"310px"} objectFit={"cover"} h={"330px"} />
                    <Image src={Image4} w={"310px"} objectFit={"cover"} h={"330px"} />
                    <Image src={Image5} w={"310px"} objectFit={"cover"} h={"330px"} />
                </Flex>
            </Flex>
        </Flex>
    );
}

export default WeddingsPage;