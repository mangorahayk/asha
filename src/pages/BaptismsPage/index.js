import React  from 'react';
import { Flex, Image, Text, Divider, Button } from '@chakra-ui/react';
import Image1 from '../../assets/image/baptismFav.webp'
import Image2 from '../../assets/image/baptism.jpg'
import Image3 from '../../assets/image/baptismCake.webp'
import Image4 from '../../assets/image/baptismDecor.jpg'
import Image5 from '../../assets/image/baptism6.jpg'
import Image6 from '../../assets/image/baptismFavour.jpg'
import ScrollToTop from '../../components/TopScroll/TopScroll';



function BaptismsPage(props) {

    ScrollToTop()
  


    return (
        <Flex w={"full"} justifyContent={"center"} alignItems={"center"} mt={"70px"} flexDir={"column"}>
             <Flex w={"full"} alignItems={"center"}  bg={"colors.brand.200"} justifyContent={"center"}>
                    <Text fontSize={"35px"} fontFamily={"sans"} p={"15px"}>BAPTISMS</Text>
                </Flex>
            <Flex maxW={"1600px"} w={"full"} flexDir={"column"} p={"10px"}>
               
               
                <Flex maxW={"1400px"} w={"full"} justifyContent={"space-around"} mt={"40px"}>
                <Image src={Image1} w={"650px"} h={"700px"} objectFit={"cover"} />

                    <Flex gap={5} flexDir={"column"} w={"450px"} alignItems={"center"} justifyContent={"center"}>
                        <Text fontFamily={"sans"} fontSize={"25px"} letterSpacing={"1px"}>Baptisms Organization</Text>
                        <Text fontSize={"17px"} overflow={"hidden"} textOverflow={"ellipsis"}>
                        Mark a special day with our baptism accessories.

Welcome to Design by Ashya, where we offer a beautiful selection of baptism accessories to make your child's unique day unforgettable. From exquisite baptism dresses and towels to stylish boxes and personalized gifts, we have everything you need to create lasting memories.
<br />
Why choose us?
<br />

 Quality craftsmanship. Each detail is made with love and care to ensure your little one’s most important moment. Unique assortment. Discover original and stylish accessories that reflect your family's traditions. Visit us today and find the perfect accessories for this sacred event."
                        </Text>
                        <Button variant={"more"}>CONTACT</Button>
                    </Flex>
                </Flex>
                <Flex w={"full"} justifyContent={"space-between"} p={"30px 0"}>
                    <Image src={Image6} w={"310px"} objectFit={"cover"} h={"330px"} />
                    <Image src={Image2} w={"310px"} objectFit={"cover"} h={"330px"} />
                    <Image src={Image3} w={"310px"} objectFit={"cover"} h={"330px"} />
                    <Image src={Image4} w={"310px"} objectFit={"cover"} h={"330px"} />
                    <Image src={Image5} w={"310px"} objectFit={"cover"} h={"330px"} />
                </Flex>
            </Flex>
        </Flex>
    );
}

export default BaptismsPage;