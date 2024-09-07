import React from "react";
import Slider from "react-slick";
import { Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { ReactComponent as Star } from '../../../assets/svg/star.svg'
import { ReactComponent as RightArrow } from '../../../assets/svg/rightArrow.svg'
import placeImg1 from '../../../assets/image/weddingImg1.webp'
import placeImg2 from '../../../assets/image/contentImg.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomBtn from "../../../components/CustomBtn/CustomBtn";




function Content() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        autoplaySpeed: 3000,
    };
    return (
        <Flex top={0} pos={"relative"} w={"full"} justifyContent={"center"}>
            <Flex w={"full"} fontFamily={"serif"} pos={"relative"}>
                <Image src={placeImg2} h={"1000px"} w={"100%"} filter={"brightness(0.45)"} />

                <Flex w={"full"} p={"10px"} flexDir={"column"} top={"20%"} zIndex={100} pos={"absolute"} color={"white"}>
                    <Flex justifyContent={"center"} alignItems={"center"} gap={3}>
                        <Divider maxW={"500px"} w={"full"} />
                        <Text > L O G O</Text>
                        <Divider maxW={"500px"} w={"full"} />

                    </Flex>

                    <Flex flexDir={"column"} p={"90px"}>
                        <Text textAlign={"center"} fontSize={"100px"} letterSpacing={"20px"} fontFamily={"Fredericka the Great"}>LOREM</Text>
                        <Text textAlign={"center"} fontSize={"20px"} fontFamily={"Nunito"} >Lorem Ipsum dolor sit amet</Text>
                    </Flex>
                    <Flex flexDir={"column"}>
                        <Flex justifyContent={"center"} alignItems={"center"} gap={3} p={"10px 0 0 0"} >
                            <Divider maxW={"500px"} w={"full"} />
                            <Text fontFamily={"Alex Brush"} fontSize={"40px"}>Asha Wedding</Text>
                            <Divider maxW={"500px"} w={"full"} />
                        </Flex>
                        <Flex justifyContent={"center"} >
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                        </Flex>
                    </Flex>

                    <Flex w={"full"} alignItems={"center"} justifyContent={"center"} p={"70px"}>
                        <Flex w={"1100px"} justifyContent={"space-between"} >
                            <Flex flexDir={"column"} alignItems={"center"}>
                                <Text fontFamily={"Fredericka the Great"} fontSize={"35px"} letterSpacing={"6px"}>DRESSES </Text>
                                <CustomBtn title={"DISCOVER"} onclick={null} />
                            </Flex>
                            <Flex flexDir={"column"} alignItems={"center"}>
                                <Text fontFamily={"Fredericka the Great"} fontSize={"35px"} letterSpacing={"6px"}>WEDDINGS </Text>
                                <CustomBtn title={"DISCOVER"} onclick={null} />

                            </Flex>
                            <Flex flexDir={"column"} alignItems={"center"}>
                                <Text fontFamily={"Fredericka the Great"} fontSize={"35px"} letterSpacing={"6px"}>ABOUT US </Text>
                                <CustomBtn title={"DISCOVER"} onclick={null} />

                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>

            </Flex>
        </Flex>
    );
}

export default Content;
