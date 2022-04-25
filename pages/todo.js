import { Button, Container, Flex, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import {useRouter} from "next/router";
import Layout from "./component/TodoLayout";

function todo(){
    const router = useRouter();
    return(
    <Flex>
        <TableContainer>
            <Table size='md' variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Number</Th>
                        <Th>Date</Th>
                        <Th>Agenda</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Layout/>
                </Tbody>
            </Table>
        </TableContainer>
        <Button onClick={()=>router.push('/newtodo')}>+</Button>
    </Flex>

    )
}

export default todo