import React from 'react'
import { Box, Stack, Text, Button, Image, Heading, VStack, Flex, UnorderedList, ListItem } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
export const Hospitals = () => {
  const [hospitals, setHospitals] = React.useState([{ id: 1, name: 'Jeeves', city: 'Delhi', country: 'India' }]);
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   fetch("https://api.example.com/hospitals")
  //     .then((response) => response.json())
  //     .then((data) => setHospitals(data));
  // }, []);

  const filterHospitalsByCountry = (country) => {
    const filteredHospitals = hospitals.filter((hospital) => hospital.country === country);
    setHospitals(filteredHospitals);
  };

  const filterHospitalsByCity = (city) => {
    const filteredHospitals = hospitals.filter((hospital) => hospital.city === city);
    setHospitals(filteredHospitals);
  };

  return (
    <Box w={'90%'} m='3vh auto'>
      <Flex justify={'center'}>
        <Stack w={'20%'} bg='#fafafa' p='0 0.5vw' gap={'1vw'}>
          <Box>
            <Text fontSize={'2xl'} pb={'2vh'} fontWeight={'semibold'}>By Country</Text>
            <Stack color={'#005897'} p='1vw' gap={'1vw'} maxH={'33vh'} overflowY={'auto'}>
              <Text>India(200)</Text>
              <Text>Turkey(200)</Text>
              <Text>United Arab Emirates(200)</Text>
              <Text>Thailand(200)</Text>
              <Text>Germany(200)</Text>
              <Text>South Africa(200)</Text>
              <Text>Tunisia(200)</Text>
            </Stack>
          </Box>
          <Box >
            <Text fontSize={'2xl'} pb={'2vh'} fontWeight={'semibold'}>By City</Text>
            <Stack color={'#005897'} p='1vw' gap={'1vw'} maxH={'37vh'} overflowY={'auto'}>
              <Text>New Delhi(200)</Text>
              <Text>Hyderabad(200)</Text>
              <Text>Bangalore Arab Emirates(200)</Text>
              <Text>Chennai(200)</Text>
              <Text>Mumbai(200)</Text>
              <Text>Gurgaon Africa(200)</Text>
              <Text>Tunisia(200)</Text>
            </Stack>
          </Box>
          <Box >
            <Text fontSize={'2xl'} pb={'2vh'} fontWeight={'semibold'}>By Department</Text>
            <Stack color={'#005897'} p='1vw' gap={'1vw'} maxH={'35vh'} overflowY={'auto'}>
              <Text>CARDIOLOGY AND CARDIAC SURGERY(200)</Text>
              <Text>COSMETIC AND PLASTIC(200)</Text>
              <Text>DENTALTREATMENT(200)</Text>
              <Text>DEMATOLOGY(200)</Text>
              <Text>ENT SURGERY(200)</Text>
              <Text>GASTROENTEROLOGY(200)</Text>
              <Text>GENERAL SURGERY(200)</Text>
            </Stack>
          </Box>
        </Stack>
        <Stack w={'80%'} p={'1vw'}>
          <Heading textAlign={'center'}>Best Hospitals in India</Heading>
          <Box>
            <Text fontSize={'2xl'} pb={'2vh'} fontWeight={'semibold'}>Hospitals By City</Text>
            <Flex color={'#005897'} p='1vw' gap={'1vw'}>
              <Text>New Delhi(200)</Text>
              <Text>Hyderabad(200)</Text>
              <Text>Bangalore(200)</Text>
              <Text>Chennai(200)</Text>
              <Text>Mumbai(200)</Text>
              <Text>Gurgaon Africa(200)</Text>
              <Text>Tunisia(200)</Text>
            </Flex>
          </Box>
          <Stack gap={'2vh'}>
            <Text fontSize={'2xl'} pb={'2vh'} fontWeight={'semibold'}>2 records found.</Text>
            <Flex>
              <Image w={'30%'} h={'25%'} src='https://www.vaidam.com/sites/default/files/Apollo%20Hospital%20Delhi%20Lobby_0.jpg' alt='hospital' />
              <Stack p='0 1vw' gap={'0.5vw'}>
                <Flex gap={'1.5vw'} h={'9%'}>
                  <Text fontSize={'2xl'} color={'blue'}>Indraprastha Apollo Hospital, New Delhi</Text>
                  <Flex gap={'0.5vw'}>
                    <Image w={'full'} h={'full'} src='https://www.vaidam.com/sites/default/files/accreditations_83.png' alt='badge' />
                    <Image w={'full'} h={'full'} src='https://www.vaidam.com/sites/default/files/accreditations_85.png' alt='badge' />
                  </Flex>
                </Flex>
                <Text>New Delhi, India</Text>
                <Text>Established in : 1996</Text>
                <Text>Number of Beds : 1000</Text>
                <Text>Multi Specialty,</Text>
                <Text>About Indraprastha Apollo Hospital, New Delhi</Text>
                <UnorderedList>
                  <ListItem>Established in 1996, Indraprastha Apollo Hospital is NABL and JCI accredited.</ListItem>
                  <ListItem>Apollo Group offers 10,000 beds across 64 hospitals, more than 2,200 pharmacies, over 100 primary care & diagnostic clinics and 115 telemedicine units across 9 countries.</ListItem>
                  <ListItem>Indraprastha Apollo Hospital has 52 specialties under one roof.</ListItem>
                </UnorderedList>
                <Text textAlign={'right'} textDecor={'underline'} color={'blue'} mb={'1vh'}>More Details</Text>
                <Flex justify={'space-between'}>
                  <Text color='blue'>View Details</Text>
                  <VStack>
                    <Button bg={'red'} color={'white'}>Book Appointment</Button>
                    <Text>Get response within 24hrs</Text>
                  </VStack>
                </Flex>
              </Stack>
            </Flex>
            <Flex p={'2vh 0'} justify={'center'} align={'center'} gap={'3vw'} bg='#13308a' color={'white'}>
              <VStack>
                <Text fontSize={'xl'} fontWeight={'semibold'}>Need help choosing the right hospital?</Text>
                <Text>Get assistance for your treatment from our experienced care team!</Text>
              </VStack>
              <Button onClick={() => navigate('/consultforfree')} bg={'green'} color={'white'} _hover={{ color: 'black', bg: 'white' }}>Click Here</Button>
            </Flex>
            <Flex>
              <Image w={'30%'} h={'25%'} src='https://www.vaidam.com/sites/default/files/medanta_the_medicity_gurgaon_list_view_image-min.jpg' alt='hospital' />
              <Stack p='0 1vw' gap={'0.5vw'}>
                <Flex gap={'1.5vw'} h={'9%'}>
                  <Text fontSize={'2xl'} color={'blue'}>Medanta - The Medicity, Gurgaon</Text>
                  <Flex gap={'0.5vw'}>
                    <Image w={'full'} h={'full'} src='https://www.vaidam.com/sites/default/files/accreditations_83.png' alt='badge' />
                    <Image w={'full'} h={'full'} src='https://www.vaidam.com/sites/default/files/accreditations_85.png' alt='badge' />
                  </Flex>
                </Flex>
                <Text>Gurgaon , India</Text>
                <Text>Established in : 2009</Text>
                <Text>Number of Beds : 1250</Text>
                <Text>Super Specialty,</Text>
                <Text>About Medanta - The Medicity, Gurgaon</Text>
                <UnorderedList>
                  <ListItem>Kokilaben Dhirubhai Ambani Hospital, one of the most modern and state-of-the-art multi-specialty tertiary care hospitals, was launched in 2008 by Reliance Group.</ListItem>
                  <ListItem>The Hospital is accredited by the Joint Commission International (JCI) and the National Accreditation Board for Hospitals & Healthcare Providers (NABH) , College of American Pathology (CAP) Accreditation, USA, National Accreditation Board for Testing and Calibration Laboratories (NABL) Accreditation, India</ListItem>
                  <ListItem>Kokilaben is the only hospital in Mumbai with Full Time Specialist System (FTSS) ensuring easy availability and access to dedicated specialists exclusively attached to Kokilaben Dhirubhai Ambani Hospital.</ListItem>
                </UnorderedList>
                <Text textAlign={'right'} textDecor={'underline'} color={'blue'} mb={'1vh'}>More Details</Text>
                <Flex justify={'space-between'}>
                  <Text color='blue'>View Details</Text>
                  <VStack>
                    <Button bg={'red'} color={'white'}>Book Appointment</Button>
                    <Text>Get response within 24hrs</Text>
                  </VStack>
                </Flex>
              </Stack>
            </Flex>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  )
}