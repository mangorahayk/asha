import React, { useEffect } from 'react';
import { Flex, Image, Text, Button } from '@chakra-ui/react';
import Bag from '../../../assets/image/bg.jpeg'
import { useNavigate, useLocation } from 'react-router-dom';
import ScrollToTop from '../../../components/TopScroll/TopScroll';
import { useTranslation } from 'react-i18next';


function Weddings() {

  
  const { t } = useTranslation()



  const navigate = useNavigate()
  return (
    <Flex w={"full"} id='weddings'>
      <Flex w={"full"} display={["none", "none", "none", "flex"]}>
        <Image w={"full"} src={Bag} h={"900px"} objectFit={"cover"} filter={"brightness(0.4)"} pos={"relative"} />
        <Flex pt={"150px"} pl={"150px"} gap={10} overflow={"hidden"} flexDir={"column"} maxW={"1050px"} alignItems={"start"} pos={"absolute"} zIndex={"100"} color={"white"}>
          <Text fontFamily={"sans"} fontSize={"25px"} letterSpacing={"1px"}>{t("home.weddings.weddingOrg")}</Text>
          <Text fontSize={"18px"} letterSpacing={"0.5px"} fontWeight={300} whiteSpace={"pre-line"}>
          {t("home.weddings.littleText")}
          </Text>
          <Button variant={"more"} border={"1px solid white"} _hover={{ bg: "white", color: "black" }} onClick={() => navigate('weddings')}>{t("btn.learnMore")}</Button>
        </Flex>
      </Flex>
      <Flex display={["flex", "flex", "flex", "none"]} w={"full"} >
      <Image w={"full"} src={Bag} h={"700px"} objectFit={"cover"} filter={"brightness(0.4)"} pos={"relative"} />
        <Flex pt={"80px"} m={"20px"} gap={7} flexDir={"column"} alignItems={"start"} pos={"absolute"} zIndex={"100"} color={"white"}>
          <Text fontFamily={"sans"} fontSize={"25px"} letterSpacing={"1px"}>{t("home.weddings.weddingOrg")}</Text>
          <Text  fontSize={"16px"} whiteSpace={"pre-line"}>
          {t("home.weddings.littleText")}

          </Text>
          <Button variant={"more"} border={"1px solid white"} _hover={{ bg: "white", color: "black" }} onClick={() => navigate('weddings')}>{t("btn.learnMore")}</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Weddings;