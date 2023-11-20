import React from 'react'
import { Box, Stack, Text, Button, Image, Heading, VStack, Flex, UnorderedList, ListItem } from '@chakra-ui/react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Filter } from '../components/Filter';
import { FaRegHospital, FaRegStar, FaYoutube } from "react-icons/fa";

export const Doctors = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedCountry = searchParams.get("country");
  const selectedCity = searchParams.get('city');
  const doctor = { name: 'Dr. Y K Mishra', image: 'https://www.vaidam.com/sites/default/files/dr._y_k_mishra_1.jpeg', title: 'Cardiac Surgeon, New Delhi, India', location: 'MANIPAL HOSPITALS DWARKA, DELHI' }

  return (
    <Box w={'90%'} m='3vh auto'>
      <Flex justify={'center'}>
        <Filter selectedCountry={selectedCountry} selectedCity={selectedCity} />
        <Stack w={'80%'} p={'1vw'}>
          <Heading textAlign={'center'}>Best Doctors in {selectedCountry}</Heading>
          <Stack gap={'2vh'}>
            <Text fontSize={'2xl'} pb={'2vh'} fontWeight={'semibold'}>2 records found.</Text>
            <Flex>
              <Image w={'25%'} h={'45%'} src='https://www.vaidam.com/sites/default/files/dr._y_k_mishra_1.jpeg' alt='hospital' />
              <Stack p='0 1vw' gap={'0.5vw'}>
                <Flex gap={'1.5vw'} >
                  <Stack>
                    <Flex align={'center'}>
                      <Text mr='1vw' fontSize={'2xl'} fontWeight={'semibold'} color={'#005897'}>Dr. Y K Mishra</Text>
                      <Link border={'1px solid blue'} target='_blank' to='https://www.youtube.com/embed/BV1jUpmIsuQ?si=C_rdyEJNcrtUipuK'>
                        <FaYoutube fontSize={'30px'} color='red' />
                      </Link>
                    </Flex>
                    <Text fontSize={'md'} fontWeight={'semibold'} color={'grey'}>Cardiac Surgeon, New Delhi, India</Text>
                    <Text fontSize={'md'} fontWeight={'semibold'}>Director, 32 years of experience...</Text>
                  </Stack>
                </Flex>
                <Flex gap={'1vw'} align={'center'}>
                  <FaRegHospital />
                  <Text color={'#005897'}>MANIPAL HOSPITALS DWARKA, DELHI</Text>
                </Flex>
                <Flex gap={'1vw'} align={'center'}>
                  <FaRegStar />
                  <Text>About</Text>
                </Flex>
                <UnorderedList listStyleType={'circle'} >
                  <ListItem>Dr Y K Mishra is one of the renowned & most experienced cardiac surgeons in India.</ListItem>
                  <ListItem>With an experience of over 32 years, he is widely recognised & has successfully performed over 14,000 open heart surgeries, & more than 500 robotic surgeries.</ListItem>
                  <ListItem>In addition to his clinical work, he also has a keen interest in training, education &research work & has been invited as a guest lecturer from all around the world.</ListItem>
                </UnorderedList>
                <Text textAlign={'right'} textDecor={'underline'} color={'blue'} mb={'1vh'}>More Details</Text>
                <Flex justify={'space-between'}>
                  <Text color='blue'>View Details</Text>
                  <Box>
                    <Link to='/consultforfree' state={doctor}>
                      <Button bg={'red'} color={'white'}>Book Appointment</Button>
                      <Text>At hospital | Tele-consult</Text>
                    </Link>
                  </Box>
                </Flex>
              </Stack>
            </Flex>
            <Flex p={'2vh 0'} justify={'center'} align={'center'} gap={'3vw'} bg='#13308a' color={'white'}>
              <VStack>
                <Text fontSize={'xl'} fontWeight={'semibold'}>Need help choosing the right doctor?</Text>
                <Text>Get assistance for your treatment from our experienced care team!</Text>
              </VStack>
              <Button onClick={() => navigate('/consultforfree')} bg={'green'} color={'white'} _hover={{ color: 'black', bg: 'white' }}>Click Here</Button>
            </Flex>
            <Flex>
              <Image w={'25%'} h={'45%'} src='https://www.vaidam.com/sites/default/files/dr._y_k_mishra_1.jpeg' alt='hospital' />
              <Stack p='0 1vw' gap={'0.5vw'}>
                <Flex gap={'1.5vw'} >
                  <Stack>
                    <Flex align={'center'}>
                      <Text mr='1vw' fontSize={'2xl'} fontWeight={'semibold'} color={'#005897'}>Dr. Y K Mishra</Text>
                      <Link border={'1px solid blue'} target='_blank' to='https://www.youtube.com/embed/BV1jUpmIsuQ?si=C_rdyEJNcrtUipuK'>
                        <FaYoutube fontSize={'30px'} color='red' />
                      </Link>
                    </Flex>
                    <Text fontSize={'md'} fontWeight={'semibold'} color={'grey'}>Cardiac Surgeon, New Delhi, India</Text>
                    <Text fontSize={'md'} fontWeight={'semibold'}>Director, 32 years of experience...</Text>
                  </Stack>
                </Flex>
                <Flex gap={'1vw'} align={'center'}>
                  <FaRegHospital />
                  <Text color={'#005897'}>MANIPAL HOSPITALS DWARKA, DELHI</Text>
                </Flex>
                <Flex gap={'1vw'} align={'center'}>
                  <FaRegStar />
                  <Text>About</Text>
                </Flex>
                <UnorderedList listStyleType={'circle'} >
                  <ListItem>Dr Y K Mishra is one of the renowned & most experienced cardiac surgeons in India.</ListItem>
                  <ListItem>With an experience of over 32 years, he is widely recognised & has successfully performed over 14,000 open heart surgeries, & more than 500 robotic surgeries.</ListItem>
                  <ListItem>In addition to his clinical work, he also has a keen interest in training, education &research work & has been invited as a guest lecturer from all around the world.</ListItem>
                </UnorderedList>
                <Text textAlign={'right'} textDecor={'underline'} color={'blue'} mb={'1vh'}>More Details</Text>
                <Flex justify={'space-between'}>
                  <Text color='blue'>View Details</Text>
                  <Box>
                    <Link to='/consultforfree' state={doctor}>
                      <Button bg={'red'} color={'white'}>Book Appointment</Button>
                      <Text>At hospital | Tele-consult</Text>
                    </Link>
                  </Box>
                </Flex>
              </Stack>
            </Flex>
          </Stack>
        </Stack >
      </Flex >
    </Box >
  )
}