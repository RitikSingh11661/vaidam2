import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const AboutUs = () => {
    return (
        <Box m='3vh auto'>
            <Stack m='3vh auto' p={'1vw'} w={'75%'} boxShadow={'lg'} gap={'2vw'}>
                <Stack>
                    <Text fontSize={'xl'} fontWeight={'semibold'}>About Us</Text>
                    <Text color={'grey'}>
                        Vaidam will find you the best, hassle free treatment at prices you can afford, so that you can focus only on getting better.
                    </Text>
                </Stack>
                <Stack>
                    <Text fontSize={'xl'} fontWeight={'semibold'}>Why did we start Vaidam.com?</Text>
                    <Text color={'grey'}>
                        At one time or another, everyone needs medical care for a serious health issue. Where is quality medical care available, and how do people get there? We started Vaidam to help people to resolve these issues. We consult family doctors, friends and family, and we search the Internet. We collect all of the pertinent information onto a single platform and make it available to our patients.
                    </Text>
                </Stack>
                <Stack>
                    <Text fontSize={'xl'} fontWeight={'semibold'}>How are we different?</Text>
                    <Text color={'grey'}>We carefully select all of the hospitals and doctors that you see on Vaidam.com. We talk, visit, collect pictures, stories and descriptions that will be useful to you. We provide you with 5 star services, whether we are providing you with treatment, an opinion from one of the doctors on our panel or simply with relevant information.</Text>
                </Stack>
                <Stack>
                    <Text fontSize={'xl'} fontWeight={'semibold'}>Price</Text>
                    <Text color={'grey'}>Naomi was looking for a knee replacement for his mother. The average quote for a single knee replacement is $5,000. Naomi’s budget was $3,500. Our Patient Account Manager researched, negotiated with hospitals, and eventually found an excellent doctor and place of treatment that met Naomi's budget.</Text>
                </Stack>
                <Stack>
                    <Text fontSize={'xl'} fontWeight={'semibold'}>Alternative treatment</Text>
                    <Text color={'grey'}>Robert suffered from back pain. The doctors in his country advised surgery. Robert was reluctant to undergo surgery and discussed his concerns with us. We referred his case to doctors for a second opinion and found a doctor who was confident that he could resolve Robert’s back pain through acupuncture. The cost of his treatment and his with stay in India for a month cost Robert only 10% of the amount that he was quoted for surgery.</Text>
                </Stack>
                <Stack>
                    <Text fontSize={'xl'} fontWeight={'semibold'}>Difficult to treat</Text>
                    <Text color={'grey'}>One patient suffered from schizophrenia and could not get effective help despite trying many places abroad. We referred the case to one of India’s top schizophrenia consultants. The patient was sceptical of the outcome and of the place where the patient would be admitted for rehabilitation. Our team took the patient and the guardians to the consultant’s location and ensured that they were satisfied about the care and comfort that they would receive. Suffering that had lingered for years was treated and resolved in months.</Text>
                </Stack>
            </Stack>
        </Box>
    )
}
