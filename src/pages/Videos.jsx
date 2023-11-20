import {Heading, Flex, Text, Stack, SimpleGrid} from '@chakra-ui/react'
import React from 'react'

export const Videos = () => {
    return (
        <Stack w={'90%'} m='3vh auto' gap={'3vw'}>
            <Heading textAlign={'center'}>Vaidam Videos</Heading>
            <Flex gap={'2vw'}>
                <Text fontWeight='bold'>Videos Related To:</Text>
                <Flex color='#005897' gap={'2vw'}>
                    <Text>About City(60)</Text>
                    <Text>Doctors(60)</Text>
                    <Text>Procedures(60)</Text>
                    <Text>About Vaidam(60)</Text>
                    <Text>Patient Testimonials(60)</Text>
                </Flex>
            </Flex>
            <Stack gap={'2vh'}>
                <Text pb={'vh'} fontWeight={'semibold'}>Total 1294 videos found.</Text>
                <SimpleGrid  gridTemplateColumns={'repeat(3,1fr)'} gap={'5vw'}>
                    <Stack w={'80%'} >
                        <iframe height="200" src="https://www.youtube.com/embed/gjjEZ7UssmQ?si=Lkq1HN-sFejzSD-_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <Text fontSize={'xs'}>NOVEMBER 17, 2023</Text>
                        <Text color={'#005897'}>Patient From Spain Successfully Received Gastric Sleeve Surgery in Turkey</Text>
                    </Stack>
                    <Stack w={'80%'}>
                        <iframe height="200" src="https://www.youtube.com/embed/gjjEZ7UssmQ?si=Lkq1HN-sFejzSD-_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <Text fontSize={'xs'}>NOVEMBER 17, 2023</Text>
                        <Text color={'#005897'}>Patient From Spain Successfully Received Gastric Sleeve Surgery in Turkey</Text>
                    </Stack>
                    <Stack w={'80%'}>
                        <iframe height="200" src="https://www.youtube.com/embed/gjjEZ7UssmQ?si=Lkq1HN-sFejzSD-_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <Text fontSize={'xs'}>NOVEMBER 17, 2023</Text>
                        <Text color={'#005897'}>Patient From Spain Successfully Received Gastric Sleeve Surgery in Turkey</Text>
                    </Stack>
                    <Stack w={'80%'}>
                        <iframe height="200" src="https://www.youtube.com/embed/gjjEZ7UssmQ?si=Lkq1HN-sFejzSD-_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <Text fontSize={'xs'}>NOVEMBER 17, 2023</Text>
                        <Text color={'#005897'}>Patient From Spain Successfully Received Gastric Sleeve Surgery in Turkey</Text>
                    </Stack>
                    <Stack w={'80%'}>
                        <iframe height="200" src="https://www.youtube.com/embed/gjjEZ7UssmQ?si=Lkq1HN-sFejzSD-_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <Text fontSize={'xs'}>NOVEMBER 17, 2023</Text>
                        <Text color={'#005897'}>Patient From Spain Successfully Received Gastric Sleeve Surgery in Turkey</Text>
                    </Stack>
                    <Stack w={'80%'}>
                        <iframe height="200" src="https://www.youtube.com/embed/gjjEZ7UssmQ?si=Lkq1HN-sFejzSD-_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <Text fontSize={'xs'}>NOVEMBER 17, 2023</Text>
                        <Text color={'#005897'}>Patient From Spain Successfully Received Gastric Sleeve Surgery in Turkey</Text>
                    </Stack>
                    <Stack w={'80%'}>
                        <iframe height="200" src="https://www.youtube.com/embed/gjjEZ7UssmQ?si=Lkq1HN-sFejzSD-_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <Text fontSize={'xs'}>NOVEMBER 17, 2023</Text>
                        <Text color={'#005897'}>Patient From Spain Successfully Received Gastric Sleeve Surgery in Turkey</Text>
                    </Stack>
                    <Stack w={'80%'}>
                        <iframe height="200" src="https://www.youtube.com/embed/gjjEZ7UssmQ?si=Lkq1HN-sFejzSD-_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <Text fontSize={'xs'}>NOVEMBER 17, 2023</Text>
                        <Text color={'#005897'}>Patient From Spain Successfully Received Gastric Sleeve Surgery in Turkey</Text>
                    </Stack>
                </SimpleGrid>
            </Stack>
        </Stack>
    )
}
