import { defineStyleConfig } from '@chakra-ui/react'
import { color } from 'framer-motion';

const Button = defineStyleConfig({

  // Two variants: outline and solid
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'purple.500',
      color: 'purple.500',
    },
    solid: {
      bg: 'green',
      color: 'white',
    
    },
    black: {
        bg:"black",
        color:"white"
    },
    red: {
        bg:"red",
        color:"white"
    },
    grey: {
      bg:"grey",
      color:"white"
  },
  base :{
    border:"none",
    fontWeight:400,
    letterSpacing:"1px",
    fontSize:"14px",
    _hover:{color:"#CEA300"},
    
  },
  discover: {
    w:"150px",
    alignItems:"center",
    border:"1px solid white",
    fontSize:"14px",
    letterSpacing:"1px",
  }
},

// The default size and variant values
defaultProps: {
  size: 'md',
  variant: 'outline',
},
})

export default Button;