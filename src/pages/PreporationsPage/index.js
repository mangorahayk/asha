import React  from 'react';
import { Flex, Text, Image, Button } from '@chakra-ui/react';
import Cake from '../../assets/image/cake.jpg'
import Cake2 from '../../assets/image/cake2.jpg'
import Cake3 from '../../assets/image/cake3.jpg'
import Cake4 from '../../assets/image/cake4.jpg'
import Annual1 from '../../assets/image/tarosik.jpg'    
import Annual2 from '../../assets/image/baptism6.jpg'    
import Annual3 from '../../assets/image/weddingimg5.jpg'    
import Annual4 from '../../assets/image/Favor4.jpg'    
import ScrollToTop from '../../components/TopScroll/TopScroll';


function Preporations(props) {

    ScrollToTop()

    return (
        <Flex w={"full"} justifyContent={"center"} mt={"70px"}>
            <Flex w={"full"} flexDir={"column"} alignItems={"center"}>
                <Flex w={"full"} alignItems={"center"} bg={"colors.brand.200"} justifyContent={"center"}>
                    <Text fontSize={"35px"} fontFamily={"sans"} p={"15px"}>PREPORATIONS</Text>
                </Flex>
                <Flex maxW={"1600px"} w={"full"} flexDir={"column"} pb={"50px"}>
                    <Flex maxW={"1400px"} w={"full"} justifyContent={"space-around"} mt={"40px"}>
                        <Flex w={"650px"} h={"700px"} flexWrap={"wrap"}>
                            <Image src={Cake} w={"325px"} h={"350px"} objectFit={"cover"} />
                            <Image src={Cake2} w={"325px"} h={"350px"} objectFit={"cover"} />
                            <Image src={Cake3} w={"325px"} h={"350px"} objectFit={"cover"} />
                            <Image src={Cake4} w={"325px"} h={"350px"} objectFit={"cover"} />

                        </Flex>

                        <Flex gap={5} flexDir={"column"} w={"450px"} alignItems={"center"} justifyContent={"center"}>
                            <Text fontFamily={"sans"} fontSize={"25px"} letterSpacing={"1px"}>Cakes</Text>
                            <Text fontSize={"17px"} overflow={"hidden"} textOverflow={"ellipsis"} textAlign={"center"}>
                                Celebrate your memorable day with our exquisite wedding cakes.

                                At Design by Ashya, we believe that every love story deserves a sweet ending. Our custom wedding cakes are crafted with love and artistry to make your special day truly unforgettable. Choose from a variety of flavors, designs, and sizes that reflect your unique style and taste.

                                Let us help you create a cake that not only looks stunning but also has a divine flavor. Schedule a consultation today and find out why we are the preferred choice for couples on the Design by Ashya Instagram page. Make your wedding dreams come true with a cake that is as unique as your love.
                            </Text>
                            <Button variant={"more"}>CONTACT</Button>
                        </Flex>
                    </Flex>

                                <Flex maxW={"1500px"} w={"full"} justifyContent={"space-around"} mt={"40px"}>
                    

                        <Flex gap={5} flexDir={"column"} w={"450px"} alignItems={"center"} justifyContent={"center"}>
                            <Text fontFamily={"sans"} fontSize={"25px"} letterSpacing={"1px"}>Favors</Text>
                            <Text fontSize={"18px"} overflow={"hidden"} textOverflow={"ellipsis"} textAlign={"center"}>
                            Our favours are the perfect choice for wedding events. Create unique table decor using our boxes made from natural materials. They are ideal as a centerpiece that will capture your guests' attention.
                            </Text>
                            <Button variant={"more"}>CONTACT</Button>
                        </Flex>
                        <Flex w={"650px"} h={"700px"} flexWrap={"wrap"}>
                            <Image src={Annual1} w={"325px"} h={"350px"} objectFit={"cover"} />
                            <Image src={Annual4} w={"325px"} h={"350px"} objectFit={"cover"} />
                            <Image src={Annual3} w={"325px"} h={"350px"} objectFit={"cover"} />
                            <Image src={Annual2} w={"325px"} h={"350px"} objectFit={"cover"} />

                        </Flex>
                    </Flex>   

                </Flex>
            </Flex>
        </Flex>
    );
}

export default Preporations;