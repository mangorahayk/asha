import React, { useEffect } from 'react';
import { Flex, Image, Text, Button } from '@chakra-ui/react';
import Bag from '../../../assets/image/bg.jpeg'
import { useNavigate, useLocation } from 'react-router-dom';


function Weddings() {
  const { pathname } = useLocation()


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname.weddings]);



  const navigate = useNavigate()
  return (
    <Flex w={"full"} id='weddings'>
      <Flex w={"full"} display={["none", "none", "none", "flex"]}>
        <Image w={"full"} src={Bag} h={"900px"} objectFit={"cover"} filter={"brightness(0.4)"} pos={"relative"} />
        <Flex pt={"150px"} pl={"150px"} gap={10} overflow={"hidden"} flexDir={"column"} maxW={"1050px"} alignItems={"start"} pos={"absolute"} zIndex={"100"} color={"white"}>
          <Text fontFamily={"sans"} fontSize={"25px"} letterSpacing={"1px"}>Weddings Organization</Text>
          <Text fontSize={"18px"} >
            Create your dream wedding with us: Design by Ashya, where we believe that every detail is important for your special day. Discover our amazing collection of wedding accessories — from elegant veils and exquisite tiaras to personalized decor and beautiful gifts.
            <br />
            Why choose us?
            <br />
            Personalized options to match your theme
            Exceptional customer service to ease your planning
            Beautiful and elegant baskets, decor, refined plates, personalized glass designs, boxes for Gata, lavash, and even boxes with rose petals. Floral arrangements with natural flowers are also available. We accept orders of any size.
...
          </Text>
          <Button variant={"more"} border={"1px solid white"} _hover={{ bg: "white", color: "black" }} onClick={() => navigate('weddings')}>LEARN MORE</Button>
        </Flex>
      </Flex>
      <Flex display={["flex", "flex", "flex", "none"]} w={"full"}>
      <Image w={"full"} src={Bag} h={"700px"} objectFit={"cover"} filter={"brightness(0.4)"} pos={"relative"} />
        <Flex pt={"150px"} m={"20px"} gap={7} flexDir={"column"} alignItems={"start"} pos={"absolute"} zIndex={"100"} color={"white"}>
          <Text fontFamily={"sans"} fontSize={"25px"} letterSpacing={"1px"}>Weddings Organization</Text>
          <Text  fontSize={"16px"}>
            Create your dream wedding with us: Design by Ashya, where we believe that every detail is important for your special day. Discover our amazing collection of wedding accessories — from elegant veils and exquisite tiaras to personalized decor and beautiful gifts.
            <br />
            Why choose us?
            <br />
            Personalized options to match your theme
            Exceptional customer service to ease your planning
            Beautiful and elegant baskets, decor, refined plates, personalized glass designs, boxes for Gata, lavash ...
          </Text>
          <Button variant={"more"} border={"1px solid white"} _hover={{ bg: "white", color: "black" }} onClick={() => navigate('weddings')}>LEARN MORE</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Weddings;