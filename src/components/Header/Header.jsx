import React, {useState} from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


function Header() {

    let [bacG, setBacG] = useState(false)

    const changeBg = () => {
        
    if(window.scrollY >=70){
        setBacG(true)
    }else{
        setBacG(false)
    }

    }
    window.addEventListener('scroll', changeBg)

    let navigate = useNavigate()

    return (
         <Flex w={"full"} maxW={"1920px"} justifyContent={"center"} h={"70px"}  p={"10px"} pos={"fixed"} top={0} zIndex={200} transition={"0.3s"}  bg={ bacG ? "rgba(255, 255, 255, 0.7)" : "transparent"} color={bacG ? "black" : "white"} >
                <Flex justifyContent={"space-between"} w={"full"} alignItems={"center"} >
                    <Flex gap={2}>
                    <Button variant={"base"} onClick={()=>navigate("/dresses")}>DRESSES</Button>
                    <Button variant={"base"}>ABOUT</Button>
                    <Button variant={"base"}>ABOUT</Button>
                    <Button variant={"base"}>ABOUT</Button>
                    </Flex>
                    <Text>L O G O</Text>
                    <Flex gap={2}>
                    <Button variant={"base"}>ABOUT</Button>
                    <Button variant={"base"}>ABOUT</Button>
                    <Button variant={"base"}>ABOUT</Button>
                    <Button variant={"base"}>ABOUT</Button>
                    </Flex>
                </Flex>
         </Flex>   

    );
}

export default Header;