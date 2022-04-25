import { Box, Button, Container, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { useState } from "react"


function createTodo(){
    const [date,setDate] = useState();
    const [agenda,setAgenda] = useState();
    return(
        <Container>
            <Box as="form">
                <FormControl>
                    <FormLabel htmlFor="Date">Date</FormLabel>
                    <Input 
                        maxW='md'
                        id='date'
                        type='date'
                        value={date}
                        border="1px solid gray" 
                        onChange={(e)=>setDate(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="Agenda">Agenda</FormLabel>
                    <Input
                        maxW='md'
                        id="agenda"
                        type='text'
                        value={agenda}
                        border="1px solid gray"
                        onChange={(e)=>setAgenda(e.target.value)}
                    />
                </FormControl>
                <Button type="submit" colorScheme='teal'>
                    Create Todo
                </Button>
            </Box>
        </Container>
    )
}

export default createTodo