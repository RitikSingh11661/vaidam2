import React from 'react'
import { VStack, Input, Select, Textarea, Button, Text, Box, Heading } from '@chakra-ui/react';

export const Contact = ({mt}) => {
    return (
        <Box bg='#d3f1ff' width={'30%'} h={'full'} borderRadius={'3%'} mt={mt} p={'3vh 0'}>
            <Box borderBottom={'1px solid grey'} color={'#005897'}>
                <Heading fontSize={'2xl'} textAlign={'center'}>Need Help?</Heading>
            </Box>
            <VStack p={'0 2vw'} gap={'3vh'}>
                <Input mt={'3vh'} bg='white' type='text' placeholder='Patient Name' />
                <Input bg='white' type='email' placeholder='Enter Email' />
                <Select bg='white' color={'grey'}>
                    <option value={''}>Choose Country</option>
                    <option value={'India'}>India</option>
                    <option value={'Turkey'}>Turkey</option>
                </Select>
                <Input bg='white' type='text' placeholder='Your Phone Number' />
                <Input bg='white' type='text' placeholder='Enter City' />
                <Textarea bg={'white'} placeholder='Describe The Current Medical Problem...' />
                <Button color={'white'} width={'40%'} bg={'red'}>SUBMIT</Button>
                <Text fontSize={'sm'} color={'grey'}>By submitting the form I agree to the Terms of Use and Privacy Policy of Vaidam Health.</Text>
            </VStack>
        </Box>
    )
}