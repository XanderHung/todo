import { Box, Button, Container, FormControl, FormLabel, Input } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/router"


function Register(){
    const type = 'register'
    const router = useRouter();
    const [name,setName]= useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleSubmit = async (e) =>{
        e.preventDefault()
        await axios.post("/api/login",{name,email,password,type})
        return router.push("/login")
    }
    return(
        <Container>
            <Box as="form" onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel htmlFor="name">
                        Name
                    </FormLabel>
                    <Input 
                        maxW='md' 
                        id='name'
                        type='text'
                        value={name}
                        border="1px solid gray"
                        onChange={(e) => setName(e.target.value)}
                        />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="email">
                        Email
                    </FormLabel>
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
                    <FormLabel htmlFor="password">
                        Password
                    </FormLabel>
                    <Input 
                        maxW='md' 
                        id='password'
                        type='password'
                        value={password}
                        border="1px solid gray"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="confirmPassword">
                        Confirm Password
                    </FormLabel>
                    <Input 
                        maxW='md' 
                        id='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        border="1px solid gray"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                </FormControl>
                <Button type="submit" colorScheme='teal'> 
                    Register
                </Button>
            </Box>
        </Container>
    )
}

export default Register