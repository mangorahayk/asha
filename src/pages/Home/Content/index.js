import React from "react";
import Slider from "react-slick";
import { Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { ReactComponent as Star } from '../../../assets/svg/star.svg'
import { ReactComponent as RightArrow } from '../../../assets/svg/rightArrow.svg'
import placeImg2 from '../../../assets/image/contentImg.jpg'
import placeMobile from '../../../assets/image/mobileHall.jpg'
import placeMobile2 from '../../../assets/image/0005-ParadiseOpenHouse_LittleBlueLemon.jpg'
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
        <Flex top={0} pos={"relative"} w={"full"} justifyContent={"center"} overflow={"hidden"}>
            <Flex w={"full"} fontFamily={"serif"} pos={"relative"} display={["none", "none", "none", "flex"]}>
                <Image src={placeImg2} h={"1000px"} w={"100%"} filter={"brightness(0.45)"} />

                <Flex w={"full"} p={"10px"} flexDir={"column"} top={"20%"} zIndex={100} pos={"absolute"} color={"white"}>
                    <Flex justifyContent={"center"} alignItems={"center"} gap={3}>
                        <Divider maxW={"500px"} w={"full"} />
                        <Text fontFamily={"Alex Brush"} fontSize={"35px"}>Design By Ashya</Text>
                        <Divider maxW={"500px"} w={"full"} />

                    </Flex>

                    <Flex flexDir={"column"} p={"90px"}>
                        <Text textAlign={"center"} fontSize={"75px"} letterSpacing={"15px"} fontFamily={"Fredericka the Great"}>FOR YOUR EVENTS </Text>
                        <Text textAlign={"center"} fontSize={"22px"} fontFamily={"Nunito"} >Let your special events shine with us</Text>
                    </Flex>
                    <Flex flexDir={"column"}>
                        <Flex justifyContent={"center"} alignItems={"center"} gap={3} p={"10px 0 0 0"} >
                            <Divider maxW={"500px"} w={"full"} />
                            <Text fontFamily={"Alex Brush"} fontSize={"40px"}>Ashya Wedding</Text>
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
                                <Text fontFamily={"Fredericka the Great"} fontSize={"35px"} letterSpacing={"6px"}>ABOUT US </Text>
                                <CustomBtn title={"DISCOVER"} onclick={null} />
                            </Flex>
                            <Flex flexDir={"column"} alignItems={"center"}>
                                <Text fontFamily={"Fredericka the Great"} fontSize={"35px"} letterSpacing={"6px"}>WEDDINGS </Text>
                                <CustomBtn title={"DISCOVER"} onclick={null} />

                            </Flex>
                            <Flex flexDir={"column"} alignItems={"center"}>
                                <Text fontFamily={"Fredericka the Great"} fontSize={"35px"} letterSpacing={"6px"}>BAPTISMS </Text>
                                <CustomBtn title={"DISCOVER"} onclick={null} />
                            </Flex>
                           
                        </Flex>
                    </Flex>
                </Flex>

            </Flex>
            <Flex w={"full"} fontFamily={"serif"} pos={"relative"} display={["flex", "flex", "flex", "none"]}>
                <Image src={placeMobile2} h={"844px"} w={"100%"} filter={"brightness(0.45)"} objectFit={"cover"} />

                <Flex w={"full"} p={"10px"} flexDir={"column"} top={"15%"} zIndex={100} pos={"absolute"} color={"white"}>
                    <Flex justifyContent={"center"} alignItems={"center"} gap={3}>
                        <Divider maxW={"500px"} w={"full"} />
                        <Flex gap={2} fontSize={"29px"}>
                        <Text fontFamily={"Alex Brush"}>Design</Text>
                        <Text fontFamily={"Alex Brush"}>By</Text>
                        <Text fontFamily={"Alex Brush"}>Ashya</Text>
                        </Flex>
                        <Divider maxW={"500px"} w={"full"} />

                    </Flex>

                    <Flex w={"full"} flexDir={"column"} p={"70px"} alignItems={"center"}>
                        <Text textAlign={"center"} fontSize={"55px"} letterSpacing={"15px"} fontFamily={"Fredericka the Great"}>FOR YOUR EVENTS</Text>
                        <Text textAlign={"center"} fontSize={"19px"} fontFamily={"Nunito"} >Let your special events shine with us</Text>
                    </Flex>
                    <Flex w={"full"} flexDir={"column"}>
                        <Flex w={"full"} justifyContent={"center"} alignItems={"center"} gap={3} p={"10px 0 0 0"} >
                            <Divider maxW={"500px"} w={"full"} />
                            <Text fontFamily={"Alex Brush"} fontSize={"28px"} flexWrap={"nowrap"}>Asha</Text>
                            <Text fontFamily={"Alex Brush"} fontSize={"28px"} flexWrap={"nowrap"}>Wedding</Text>
                            <Divider maxW={"500px"} w={"full"} />
                        </Flex>
                        <Flex justifyContent={"center"} >
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                        </Flex>
                    </Flex>

                    <Flex w={"full"} alignItems={"center"} justifyContent={"center"} pt={"90px"}>
                        <Flex maxW={"1100px"} w={"full"} justifyContent={"space-around"} >
                            <Flex flexDir={"column"} alignItems={"center"}>
                                <Text fontFamily={"Fredericka the Great"} fontSize={"16px"} letterSpacing={"4px"}>DRESSES </Text>
                              
                            </Flex>
                            <Flex flexDir={"column"} alignItems={"center"}>
                                <Text fontFamily={"Fredericka the Great"} fontSize={"16px"} letterSpacing={"4px"}>WEDDINGS </Text>

                            </Flex>
                            <Flex flexDir={"column"} alignItems={"center"}>
                                <Text fontFamily={"Fredericka the Great"} fontSize={"16px"} letterSpacing={"4px"}>ABOUT US </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>

            </Flex>
        </Flex>
    );
}

export default Content;
