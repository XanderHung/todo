import { Button, Flex, Spacer, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"


const Navbar =()=>{
    const router = useRouter()
    return(
        <Flex bg="teal" padding='2' justifyContent='space-between'>
            <Button size='md' variant='ghost' onClick={()=> router.push('/')}>
                <Text>Home</Text>
            </Button>
            <Flex>
                <Button size='md' variant='ghost' onClick={()=> router.push('/todo')}>
                    <Text>Todo</Text>
                </Button>
                <Button size='md' variant='ghost' onClick={()=> router.push('/login')}>
                    <Text>Login</Text>
                </Button>
            </Flex>
        </Flex>
    )
}

export default Navbar