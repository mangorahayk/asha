import { extendTheme } from "@chakra-ui/react"
import Button from "./button"
import { customColors } from "./customColors"
import { customFonts } from "./fonts"
import { customFontFamely } from "./fonts"
import { NavbarCard, HeaderCard } from "./cards"

const breakpoints = {
    base: "0px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  };
  

const theme = extendTheme({
    breakpoints,
    components: {
        Button,
        NavbarCard,
        HeaderCard
      },
      colors: customColors,
      fonts: customFontFamely.fonts,
      fontSize: customFonts.fontSizes

  })


  export default theme