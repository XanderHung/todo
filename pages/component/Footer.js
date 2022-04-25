import { Box, Heading, Text } from "@chakra-ui/react"


const Footer =()=>{
    return(
        <Box bg='teal' maxW='100%'>
            <Box p='6'>
                <Heading as='h3' size='lg'>Todo</Heading>
                <Text fontFamily='sans-serif'>
                    Feel Free to Contact Me
                </Text>
            </Box>
        </Box>
    )

}


export default Footer