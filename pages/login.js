import { Box, Button, Container,FormControl,FormLabel, Input, Text, useToast} from "@chakra-ui/react"
import React,{ useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"


function login(){
    const toast = useToast();
    const router = useRouter();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const type = 'login'
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post("/api/login", {email, password,type})
        if(res.data.status == 'error'){
            return toast({
                title: res.data.title,
                description: `${res.data.message}, Tried: ${res.data.tried}`,
                status: res.data.status,
                duration: 5000,
                isClosable: true,
            })
        }
        toast({
            title: res.data.title,
            description: `${res.data.message}, Tried: ${res.data.tried}`,
            status: res.data.status,
            duration: 5000,
            isClosable: true,
        })
        return router.push("/")
    }

  
    return (
        <Container>
            <Box as="form" onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input
                        maxW='md'
                        id='email'
                        type='email'
                        value={email}
                        border="1px solid gray"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input
                        maxW='md'
                        id='password'
                        type='password'
                        value={password}
                        border="1px solid gray"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormControl>
                <Button type="submit" colorScheme='teal'>
                    Create
                </Button>
            </Box>
            <Text as='button' onClick={()=>router.push('/register')}>Not Have Account? Register Here.</Text>
        </Container>

        
    )
}

export default login