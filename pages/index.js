import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";


export default function Home(){
    return(
        <Container>
            <Heading as="h1" size="xl">Todo</Heading>
            <Box maxW='2xl' borderWidth='2px' borderRadius='lg' overflow='hidden' margin='3'>
                <Flex padding='2'>
                <Image boxSize='150px'objectFit='cover' src='/go.png'></Image>
                <Image boxSize='150px' objectFit='cover' src="/next.png"></Image>
                </Flex>
                <Box p='6'>
                    <Text fontFamily='sans-serif'>Hello Todoes, Welcome to my first todolist application. 
                    For building this application I'm using Next.js as a Front end and Go Language as a backend.
                    </Text>   
                    <Text>
                        Feel free to use my application
                    </Text>
                </Box>
            </Box>
        </Container>
    )
}