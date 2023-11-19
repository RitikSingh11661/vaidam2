import { Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const MedicalVisa = () => {
    return (
        <Stack m='3vh auto' gap={'3vw'}>
            <Stack textAlign={'center'}>
                <Heading textAlign={'center'}>Need Visa for your Medical trip?</Heading>
                <Text fontSize={'lg'} color={'grey'}>Please select the country you want to travel from and your destination country</Text>
            </Stack>
            <VStack bg={'#f9f9f9'} justify={'center'}>
                <Image w={'60%'} src='https://i.ibb.co/c8hxFb8/medical-visa.png' alt='medical_visa'/>
            </VStack>
        </Stack>
    )
}