import React, { useEffect } from 'react';
import { Flex, Image, Text, Button } from '@chakra-ui/react';
import Bag from '../../../assets/image/bg.jpeg'
import { useNavigate, useLocation } from 'react-router-dom';


function Weddings() {
    const {pathname} = useLocation()

    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname.weddings]);



    const navigate = useNavigate()
    return (
        <Flex w={"full"} id='baptisms'>
            <Image w={"full"} src={Bag} h={"900px"} objectFit={"cover"} filter={"brightness(0.4)"} pos={"relative"} />
            <Flex pt={"150px"} ml={"300px"} gap={10} flexDir={"column"} w={"1050px"} alignItems={"start"} pos={"absolute"} zIndex={"100"} color={"white"}>
                <Text fontFamily={"sans"} fontSize={"25px"} letterSpacing={"1px"}>Weddings Organization</Text>
                <Text fontSize={"19px"} overflow={"hidden"} textOverflow={"ellipsis"}>
                Create your dream wedding with us: Design by Ashya, where we believe that every detail is important for your special day. Discover our amazing collection of wedding accessories — from elegant veils and exquisite tiaras to personalized decor and beautiful gifts.
                            <br />
                            Why choose us?
                            <br />
                            Personalized options to match your theme
                            Exceptional customer service to ease your planning
                            Beautiful and elegant baskets, decor, refined plates, personalized glass designs, boxes for Gata, lavash, and even boxes with rose petals. Floral arrangements with natural flowers are also available. We accept orders of any size.

                            Schedule a consultation today and let us help you make your dream a reality.

                            Visit our Instagram page, Design by Ashya, and start your journey to the perfect wedding
                </Text>
                <Button variant={"more"} border={"1px solid white"} _hover={{ bg: "white", color: "black" }} onClick={() => navigate('weddings')}>LEARN MORE</Button>
            </Flex>
        </Flex>
    );
}

export default Weddings;