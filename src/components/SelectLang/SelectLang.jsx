import React, { useState, useEffect } from "react";
import { ReactComponent as ArmIcon } from "../../assets/svg/armenia.svg";
import { ReactComponent as UnitedIcon } from "../../assets/svg/unated.svg";
import { useOutsideClick } from '@chakra-ui/react'
import { useTranslation } from "react-i18next";
import { Box, Flex, Text, Menu, MenuButton, MenuItemOption, MenuDivider, Button, MenuList, MenuOptionGroup } from "@chakra-ui/react";


import './index.css'


const SelectLang = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = React.useRef()


  useOutsideClick({
    ref: ref,
    handler: () => setIsOpen(false),
  })

  const [flags, setFlags] = useState([
    {
      id: 1,
      lang: "EN",
      icon: <UnitedIcon className="icons" />,
      key: "en"
    },
    {
      id: 2,
      lang: "HY",
      icon: <ArmIcon className="icons" />,
      key: "hy"
    }
  ]);



  const changeLanguage = (language, id) => {
    i18n.changeLanguage(language);
    let data = flags.filter(el => el.key === language);
    let otherData = flags.find(el => el.key !== language);
    data.push(otherData);
    setFlags(data);
    setIsOpen(false);
    window.location.reload()
  };


  useEffect(() => {
    let key = window.localStorage.getItem('i18nextLng');
    if (!key) {
      key = "en"
      localStorage.setItem('i18nextLng', key)
    }
    let data = flags.filter(el => el.key === key);
    let otherData = flags.find(el => el.key !== key);
    data.push(otherData);
    setFlags(data);
  }, [])

  return (
    <Box m={0} p={0}>
      <Menu closeOnSelect={false} h={"20px"}>
        <MenuButton as={Button} onClick={() => setIsOpen(!isOpen)} variant={"base"} m={0} p={0}>
          <Flex alignItems={"center"} gap={1}>
            <Text fontSize={"15px"}>{flags[0]?.lang}</Text>
            {flags[0]?.icon}

          </Flex>
        </MenuButton>
        <MenuList minWidth='20px' >
          <MenuOptionGroup defaultValue={"am"} color={"black"}>
            {flags.map(el => (
              <li key={el.id} onClick={() => (changeLanguage(el.key, el.id, el.lang))} style={{listStyleType: "none"}}>
                <Flex gap={0} m={0} p={0}>
                  <MenuItemOption color={"black"} h={"40px"}>
                    <Flex alignItems={"center"} gap={1}>
                      {el.lang}{el.icon}
                    </Flex>
                  </MenuItemOption>
                </Flex>
              </li>
            ))}
          </MenuOptionGroup>

        </MenuList>
      </Menu>
    </Box>

  );
}

export default SelectLang;