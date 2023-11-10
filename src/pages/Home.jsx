import { Box, Button, Flex, Heading, Image, Input, Select, Text, Textarea, VStack } from '@chakra-ui/react'
import * as  React from 'react'

export const Home = () => {
  return (
    <Box>
      <Flex justify={'space-evenly'} bgImage={'https://www.vaidam.com/assets/v2/images/blur-background.jpg'}>
        <VStack width={'55%'} gap={'10vh'} mt={'15vh'}>
          <VStack w='60%' m='auto' alignItems={'center'} textAlign={'center'} gap={'3vh'}>
            <Heading color={'#005897'}>Treatment with Unmached Personal Care</Heading>
            <Text fontWeight={'medium'} color={'#005897'} width={'65%'}>Connect with top healthcare providers from all over the world</Text>
          </VStack>
          <Image src='https://www.vaidam.com/assets/v2/images/group-img-vaidam-home.png' />
        </VStack>
        <Box bg='#d3f1ff' width={'30%'} h={'85vh'} borderRadius={'3%'} mt={'7vh'}>
          <Box borderBottom={'1px solid grey'} color={'#005897'} p={'3vh 0'}>
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
            <Input bg='white' type='text' placeholder='Enter City' />
            <Textarea bg={'white'} placeholder='Describe The Current Medical Problem...' />
            <Button color={'white'} width={'40%'} bg={'red'}>SUBMIT</Button>
            <Text fontSize={'sm'} color={'grey'}>By submitting the form I agree to the Terms of Use and Privacy Policy of Vaidam Health.</Text>
          </VStack>
        </Box>
      </Flex>
      <Box height={'20vh'} m={'auto'} w={'55vw'}>
        <Text fontSize={'22px'} fontWeight={'semibold'} textAlign={'center'}>Trusted Doctors, Top Hospitals, Hassles Taken Care</Text>
        <Flex textAlign={'center'} mt={'4vh'}>
        <VStack >
          <Image w={'6vw'} src={'https://www.vaidam.com/assets/v2/images/svg/consult-hos-video.svg'} alt={'logo'} />
          <Text  w={'75%'}>Assistance in choosing the right doctor</Text>
        </VStack>
        <VStack>
          <Image w={'6vw'} src={'https://www.vaidam.com/assets/v2/images/svg/book-appointment.svg'} alt={'logo'} />
          <Text w={'75%'}>Prompt Appointments</Text>
        </VStack>
        <VStack>
          <Image w={'6vw'} src={'https://www.vaidam.com/assets/v2/images/svg/compare-cost.svg'} alt={'logo'} />
          <Text  w={'75%'}>Compare costs, get exculise packages</Text>
        </VStack>
        <VStack>
          <Image w={'6vw'} src={'https://www.vaidam.com/assets/v2/images/svg/hospital-support.svg'} alt={'logo'} />
          <Text w={'75%'}>Help in hospitalization</Text>
        </VStack>
        </Flex>
        <Flex justify={'center'} gap={'1vw'} mt={'10vh'}>
          <Button w={'20vw'} h={'10vh'} bg={'grey'} borderRadius={'3%'}>How Does it Work</Button>
          <Button w={'20vw'} h={'10vh'} bg={'red'} borderRadius={'3%'} color={'white'}>Contact Us Now</Button>
        </Flex>
      </Box>
    </Box>
  )
}
