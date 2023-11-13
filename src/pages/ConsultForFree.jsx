import { VStack, Input, Select, Textarea, Button, Text, FormLabel, Heading, Box, Flex, FormControl } from '@chakra-ui/react'
import React from 'react'

export const ConsultForFree = () => {
    return (
        <VStack>
            <Box boxShadow={'sm'} p={'3vh 0'}>
                <Heading fontSize={'2xl'} textAlign={'center'}>Help Us With Patient Details</Heading>
            </Box>
            <Flex flexDir={'column'} textAlign={'center'} rounded={'lg'} boxShadow={'lg'} p={'3vw'} gap={'3vh'}>
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input bg='white' type='text' placeholder='Patient Name' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input bg='white' type='email' placeholder='Enter Email' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Country</FormLabel>
                    <Select bg='white' color={'grey'}>
                        <option value={''}>Choose Country</option>
                        <option value={'India'}>India</option>
                        <option value={'Turkey'}>Turkey</option>
                    </Select>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>City</FormLabel>
                    <Input bg='white' type='text' placeholder='Enter City' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Phone No.</FormLabel>
                    <Input bg='white' type='text' placeholder='Your Phone No.' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Medical Issue</FormLabel>
                    <Textarea bg={'white'} placeholder='Describe The Current Medical Problem...' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Patient's Age or Date Of Birth</FormLabel>
                    <Input bg='white' type='text' placeholder='Example: 23 Yrs or 01/01/2000' />
                </FormControl>
                <Button m={'auto'} color={'white'} width={'30%'} bg={'red'}>SUBMIT</Button>
                <Text fontSize={'sm'} color={'grey'}>By submitting the form I agree to the Terms of Use and Privacy Policy of Vaidam Health.</Text>
            </Flex>
        </VStack>
    )
}
