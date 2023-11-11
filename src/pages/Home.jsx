import React from 'react'
import { Box, Button, Flex, Heading, Image, Input, Select, Text, Textarea, VStack} from '@chakra-ui/react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import './Home.css';

const carouselPrevNextStyles = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,
  width: 40,
  height: 40,
  cursor: "pointer"
};

export const Home = () => {
  const hospitalData = [
    {
      image: 'https://www.vaidam.com/assets/v2/images/svg/onco.svg',
      name: 'Oncology',
    },
    {
      image: 'https://www.vaidam.com/assets/v2/images/svg/cardio.svg',
      name: 'Cardiology',
    },
    {
      image: 'https://www.vaidam.com/assets/v2/images/svg/ortho.svg',
      name: 'Orthopaedic',
    },
    {
      image: 'https://www.vaidam.com/assets/v2/images/svg/nuro.svg',
      name: 'Neurosurgery',
    },
    {
      image: 'https://www.vaidam.com/assets/v2/images/svg/plastic.svg',
      name: 'Cosmetic',
    },
    {
      image: 'https://www.vaidam.com/assets/v2/images/svg/spine.svg',
      name: 'Spine Energy',
    },
    {
      image: 'https://www.vaidam.com/assets/v2/images/svg/liver.svg',
      name: 'Live Transplant',
    },
    {
      image: 'https://www.vaidam.com/assets/v2/images/svg/ivf.svg',
      name: 'IVF',
    },
  ];

  const items = hospitalData.map((specialty, index) => (
    <VStack key={index} borderRadius={'5%'} border='1px solid blue' align={'center'} justify={'center'} p={'4vh 2vw'} mx={'0.8vw'}>
      <Image h='15vh' borderRadius={'5%'} src={specialty.image} alt='specialty images' />
      <Text>{specialty.name}</Text>
    </VStack>
  ));

  const responsive = { 0: { items: 1 }, 600: { items: 6 } };

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
      <Box m={'5vh auto'} w={'55vw'}>
        <Text fontSize={'22px'} fontWeight={'semibold'} textAlign={'center'} >Trusted Doctors, Top Hospitals, Hassles Taken Care</Text>
        <Flex textAlign={'center'} mt={'4vh'}>
          <VStack >
            <Image w={'6vw'} src={'https://www.vaidam.com/assets/v2/images/svg/consult-hos-video.svg'} alt={'logo'} />
            <Text w={'75%'}>Assistance in choosing the right doctor</Text>
          </VStack>
          <VStack>
            <Image w={'6vw'} src={'https://www.vaidam.com/assets/v2/images/svg/book-appointment.svg'} alt={'logo'} />
            <Text w={'75%'}>Prompt Appointments</Text>
          </VStack>
          <VStack>
            <Image w={'6vw'} src={'https://www.vaidam.com/assets/v2/images/svg/compare-cost.svg'} alt={'logo'} />
            <Text w={'75%'}>Compare costs, get exculise packages</Text>
          </VStack>
          <VStack>
            <Image w={'6vw'} src={'https://www.vaidam.com/assets/v2/images/svg/hospital-support.svg'} alt={'logo'} />
            <Text w={'75%'}>Help in hospitalization</Text>
          </VStack>
        </Flex>
        <Flex justify={'center'} gap={'1vw'} mt={'10vh'}>
          <Button w={'20vw'} h={'9vh'} bg={'#eee'} borderRadius={'3%'}>How Does it Work</Button>
          <Button w={'20vw'} h={'9vh'} bg={'red'} borderRadius={'3%'} color={'white'}>Contact Us Now</Button>
        </Flex>
      </Box>
      <Box w={'80vw'} m={'5vh auto'}>
        <Text fontSize={'22px'} fontWeight={'semibold'} textAlign={'center'} >Latest Updates</Text>
        <Flex gap={'2vw'} mt={'4vh'}>
          <Image w={'25vw'} src={'https://www.vaidam.com/assets/v2/images/website-banner-ehiopia-november-11-23.png'} alt='updates images' />
          <Image w={'25vw'} src={'https://www.vaidam.com/assets/v2/images/sierra-leone-camp-banner-min-1st.jpg'} alt='updates images' />
          <Image w={'25vw'} src={'https://www.vaidam.com/assets/v2/images/liberia-camp-banner-min-replace-2nd.png'} alt='updates images' />
        </Flex>
      </Box>
      <Box bg={'#f9f9f9'} p={'5vh 0'}>
        <VStack w={'25vw'} textAlign={'center'} m={'auto'}>
          <Text fontSize={'22px'} fontWeight={'semibold'} textAlign={'center'} mb={'5vh'} >Know the Top Hospitals</Text>
          <Text>Select City</Text>
          <Select w={'60%'} bg='white' color={'grey'}>
            <option value={'New Delhi'}>New Delhi</option>
            <option value={'Gurgaon'}>Gurgaon</option>
          </Select>
          <Text color={'blue.500'} fontSize={'0.5xs'}>You have Selected: India - New Delhi</Text>
        </VStack>
      </Box>
      <Box w={'80vw'} m={'5vh auto'}>
        <Text fontSize={'22px'} fontWeight={'semibold'} textAlign={'center'} color={'blue'} >Top Hospitals in New Delhi</Text>
        <Flex gap={'2vw'} mt={'4vh'} justify={'center'} align={'center'} textAlign={'center'}>
          <VStack w={'15vw'}>
            <Image borderRadius={'5%'} src={'https://www.vaidam.com/assets/v2/hospitals/delhi/Apollo%20Hospital%20Delhi.jpg'} alt='hospital images' />
            <Text>Indraprastha Apollo Hospital New Delhi</Text>
          </VStack>
          <VStack w={'15vw'}>
            <Image borderRadius={'5%'} src={'https://www.vaidam.com/assets/v2/hospitals/delhi/blk_hospital.jpg'} alt='hospital images' />
            <Text>Indraprastha Apollo Hospital New Delhi</Text>
          </VStack>
        </Flex>
      </Box>
      <Box w={'80vw'} m={'5vh auto'} textAlign={'center'}>
        <Text fontSize={'22px'} fontWeight={'semibold'}>Top Hospitals in New Delhi for</Text>
        <AliceCarousel items={items} responsive={responsive} autoPlay autoPlayInterval={3000} buttonsDisabled={true}/>
        <Text textDecor={'underline'} color={'blue'}>See Best Hospitals in Delhi</Text>
      </Box>
      <Box bg='#f9f9f9' p={'5vh 0'} textAlign={'center'}>
        <Flex width={'70%'} justify={'center'} align={'center'} gap={'10vw'} m='auto'>
          <VStack>
            <Image w='7vw' src='https://www.vaidam.com/assets/v2/images/svg/top-hospital.svg' alt='symbols' />
            <Text fontSize={'4xl'} color={'#005897'}>400+</Text>
            <Text fontSize={'xl'}>Top Class Hospitals</Text>
          </VStack>
          <VStack>
            <Image w='7vw' src='https://www.vaidam.com/assets/v2/images/svg/experienced-doctor.svg' alt='symbols' />
            <Text fontSize={'4xl'} color={'#005897'}>7000+</Text>
            <Text fontSize={'xl'}>Experienced Doctors</Text>
          </VStack>
          <VStack>
            <Image w='7vw' src='https://www.vaidam.com/assets/v2/images/svg/patient-assisted.svg' alt='symbols' />
            <Text fontSize={'4xl'} color={'#005897'}>25000+</Text>
            <Text fontSize={'xl'}>Patient Assisted</Text>
          </VStack>
        </Flex>
        <VStack w='50%' border={'1px solid blue'} m='5vh auto' justify={'center'}>
          <VStack width={'75%'} gap={'3vh'} m='5vh auto'>
            <Text fontSize={'2xl'}>Our services are <Flex fontWeight={'bold'} display={'inline-block'} color={'#005897'}>FREE</Flex> and by using our services your hospital bill does not increase!</Text>
            <Text fontSize={'2xl'} color={'#005897'}><Flex fontWeight={'bold'} display={'inline-block'} color={'#005897'}>25000+ patients</Flex> from <Flex fontWeight={'bold'} display={'inline-block'} color={'#005897'}>105+ countries</Flex> have trusted Vaidam</Text>
          </VStack>
        </VStack>
      </Box>
      <Box w={'80vw'} m={'5vh auto'}>
        <Flex>
          <Image src='https://www.vaidam.com/assets/landingpage/v2/images/google-logo.png' align={'google logo'}/>
          <Flex>4.8 </Flex>
          <Text>Vaidam is Highly Recommended</Text>
        </Flex>
      </Box>
    </Box>
  )
}
