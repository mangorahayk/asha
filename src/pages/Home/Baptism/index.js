import React from 'react';
import { Flex, Image, Text, Button } from '@chakra-ui/react';
import Bag from '../../../assets/image/bg.jpeg'


function Baptisms() {
    return (
        <Flex w={"full"} id='baptisms'>
            <Image w={"full"} src={Bag} h={"900px"} objectFit={"cover"} filter={"brightness(0.4)"} pos={"relative"} />
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
            </Flex>
        </Flex>
    );
}

export default Baptisms;