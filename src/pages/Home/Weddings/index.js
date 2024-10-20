import React from 'react';
import { Button, Divider, Flex, Image, Text } from '@chakra-ui/react';
import tarosik from '../../../assets/image/tarosik.jpg'
import { useNavigate } from 'react-router-dom';

function Weddings() {

    const navigate = useNavigate()

    return (
        <Flex w={"full"} id='weddings'>
            <Flex w={"full"} alignItems={"center"} p={"40px"} flexDir={"column"} display={["none", "none", "none", "flex"]}>
                <Flex w={"full"} alignItems={"center"} gap={4} justifyContent={"center"} >
                    <Divider maxW={"770px"} borderColor={"black"} />
                    <Text fontSize={"28px"} fontFamily={"sans"}>WEDDINGS</Text>
                    <Divider maxW={"770px"} borderColor={"black"} />
                </Flex>
                <Flex maxW={"1400px"} w={"full"} justifyContent={"space-around"} mt={"40px"}>
                    <Flex gap={5} flexDir={"column"} w={"450px"} alignItems={"center"} justifyContent={"center"}>
                        <Text fontFamily={"sans"} fontSize={"25px"} letterSpacing={"1px"}>Weddings Organization</Text>
                        <Text fontSize={"17px"} overflow={"hidden"} textOverflow={"ellipsis"}>
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
                        <Button variant={"more"} onClick={() => navigate('weddings')}>LEARN MORE</Button>
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

export default Weddings;