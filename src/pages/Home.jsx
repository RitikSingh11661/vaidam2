import React from 'react'
import { Box, Button, Flex, Heading, Image,Select, Text,VStack } from '@chakra-ui/react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Home.css';
import { StarIcon } from '@chakra-ui/icons';
import { Contact } from '../components/Contact';

export const Home = () => {
  const specialitiesData = [
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

  const feedbackData = [
    { image: 'https://i.ibb.co/XXC7FXx/image.png' },
    { image: 'https://i.ibb.co/XXC7FXx/image.png' },
    { image: 'https://i.ibb.co/XXC7FXx/image.png' }
  ]

  const items = specialitiesData.map((specialty, index) => (
    <VStack key={index} borderRadius={'5%'} border='1px solid blue' align={'center'} justify={'center'} p={'4vh 2vw'} mx={'0.8vw'}>
      <Image h='15vh' borderRadius={'5%'} src={specialty.image} alt='specialty images' />
      <Text>{specialty.name}</Text>
    </VStack>
  ));

  const feedbackItems = feedbackData.map((specialty, index) => (
    <Image w='100%' key={index} border={'1px solid grey'} src={specialty.image} alt='specialty images' />
  ));

  const responsive = { 0: { items: 1 }, 600: { items: 6 } };
  const feedbackResponsive = { 0: { items: 1 }, 600: { items: 1 } };

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
        <Contact mt='7vh'/>
      </Flex>
      <Box m={'5vh auto'} w={'55vw'}>
        <Text fontSize={'22px'} fontWeight={'semibold'} textAlign={'center'}>Trusted Doctors, Top Hospitals, Hassles Taken Care</Text>
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
        <Text fontSize={'22px'} fontWeight={'semibold'} textAlign={'center'} color={'blue'}>Top Hospitals in New Delhi</Text>
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
        <Text fontSize={'22px'} fontWeight={'semibold'} mb={'5vh'}>Top Hospitals in New Delhi for</Text>
        <AliceCarousel items={items} responsive={responsive} autoPlay autoPlayInterval={3000} buttonsDisabled={true} />
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
      <VStack w={'80vw'} m={'5vh auto'}>
        <VStack w='85%' m={'auto'} gap={'5vh'}>
          <Flex justify={'space-between'} align={'center'} gap={'10vw'}>
            <Image src='https://www.vaidam.com/assets/landingpage/v2/images/google-logo.png' align={'google logo'} />
            <Flex justify={'center'} align={'center'} gap={'1vw'}>
              <Text fontSize={'2xl'} fontWeight={'semibold'}>4.8</Text>
              <StarIcon fontSize={'3xl'} color={'#e9c902'} />
              <StarIcon fontSize={'3xl'} color={'#e9c902'} />
              <StarIcon fontSize={'3xl'} color={'#e9c902'} />
              <StarIcon fontSize={'3xl'} color={'#e9c902'} />
            </Flex>
            <Text fontSize={'xl'} fontWeight={'semibold'}>Vaidam is Highly Recommended</Text>
          </Flex>
          <AliceCarousel items={feedbackItems} responsive={feedbackResponsive} autoPlay autoPlayInterval={3000} buttonsDisabled={true} />
          <Text textDecor={'underline'} color={'blue'}>See All Reviews</Text>
        </VStack>
      </VStack>
      <Box m={'5vh auto'} w={'65vw'}>
        <Text fontSize={'22px'} fontWeight={'semibold'} textAlign={'center'} >Vaidam Featured in</Text>
        <Flex justify={'space-between'} align={'center'} mt={'4vh'}>
          <Image w={'15%'} h={'50%'} src={'https://www.vaidam.com/assets/v2/images/jpeg/ivey.jpeg'} alt={'featured logo'} />
          <Image w={'15%'} h={'50%'} src={'https://www.vaidam.com/assets/v2/images/jpeg/economic-times.jpeg'} alt={'featured logo'} />
          <Image w={'15%'} h={'50%'} src={'https://www.vaidam.com/assets/v2/images/jpeg/yourstory.jpeg'} alt={'featured logo'} />
          <Image w={'15%'} h={'50%'} src={'https://www.vaidam.com/assets/v2/images/jpeg/entrepreneur.jpeg'} alt={'featured logo'} />
          <Image w={'15%'} h={'50%'} src={'https://www.vaidam.com/assets/v2/images/jpeg/pcmag.jpeg'} alt={'featured logo'} />
        </Flex>
      </Box>
      <VStack m={'5vh auto'} w={'80vw'} gap={'3vw'}>
        <Flex w={'full'} justify={'space-between'}>
          <Text fontSize={'22px'} fontWeight={'semibold'} textAlign={'center'} >Why Vaidam?</Text>
          <Text fontSize={'2xl'} color={'#005897'} fontWeight={'semibold'}>25,000+ patients from 105+ countries have trusted Vaidam</Text>
        </Flex>
        <Flex gap={'3vw'} align={'center'}>
          <Flex w={'40%'} borderRight='1px solid grey' gap={'1vw'}>
            <Image w={'5vw'} src='https://www.vaidam.com/assets/v2/images/png/nabh.png' alt='logo' />
            <Text w='11vw' fontSize={'sm'} fontWeight={'semibold'}>NABH Certified Healthcare Discovery Platform</Text>
          </Flex>
          <Text w={'57%'} fontSize={'smaller'}>Vaidam is NABH certified healthcare discovery platform that will connect you to top-notch medical experts, hospitals, wellness options, and trusted travel partners to help identify and make the right healthcare choices.</Text>
        </Flex>
        <Flex gap={'3vw'} align={'center'}>
          <Flex w={'40%'} borderRight='1px solid grey' gap={'1vw'}>
            <Image w={'5vw'} src='https://www.vaidam.com/assets/v2/images/png/nabh.png' alt='logo' />
            <Text w='11vw' fontSize={'sm'} fontWeight={'semibold'}>NABH Certified Healthcare Discovery Platform</Text>
          </Flex>
          <Text w={'57%'} fontSize={'smaller'}>Vaidam is NABH certified healthcare discovery platform that will connect you to top-notch medical experts, hospitals, wellness options, and trusted travel partners to help identify and make the right healthcare choices.</Text>
        </Flex>
        <Flex gap={'3vw'} align={'center'}>
          <Flex w={'40%'} borderRight='1px solid grey' gap={'1vw'}>
            <Image w={'5vw'} src='https://www.vaidam.com/assets/v2/images/png/nabh.png' alt='logo' />
            <Text w='11vw' fontSize={'sm'} fontWeight={'semibold'}>NABH Certified Healthcare Discovery Platform</Text>
          </Flex>
          <Text w={'57%'} fontSize={'smaller'}>Vaidam is NABH certified healthcare discovery platform that will connect you to top-notch medical experts, hospitals, wellness options, and trusted travel partners to help identify and make the right healthcare choices.</Text>
        </Flex>
      </VStack>
      <VStack bg={'#f9f9f9'} p={'5vh 0'}>
        <Text fontSize={'xs'} w={'80vw'} textAlign={'center'} color={'grey'}>Note: Vaidam Health does not provide medical advice, diagnosis or treatment. The services and information offered on www.vaidam.com are intended solely for informational purposes and cannot replace the professional consultation or treatment by a physician. Vaidam Health discourages copying, cloning of its webpages and its content and it will follow the legal procedures to protect its intellectual property</Text>
      </VStack>
    </Box>
  )
}