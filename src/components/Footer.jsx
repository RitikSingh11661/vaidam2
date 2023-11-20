'use client'
import { Box, Container, Stack, SimpleGrid, Text, VisuallyHidden, chakra, useColorModeValue } from '@chakra-ui/react'
import { FaTwitter, FaYoutube,FaFacebook, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Footer = () => {
  // const ListHeader = (children => <Text fontWeight={'500'} fontSize={'lg'} mb={2}>{children}</Text>)

  const SocialButton = ({ children, label, href }) => {
    return (
      <chakra.button target='_blank' bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')} fontSize={'xl'} cursor={'pointer'} as={'a'} href={href} transition={'background 0.3s ease'}>
        <VisuallyHidden>{label}</VisuallyHidden>{children}
      </chakra.button>
    )
  }
  
  return (
    <Box bg={'#005897'} color={'white'} mt='1vh'>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            {/* <ListHeader>Company</ListHeader> */}
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>Company</Text>
            <Link to='/about-us' href={'/about-us'}>About Us</Link>
            <Link to='/contact-us' >Contact Us</Link>
            <Link to='/about-us' >Careers</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>Support</Text>
            <Box as="a" href={'#'}>Help Center</Box>
            <Box as="a" href={'#'}>Safety Center</Box>
            <Box as="a" href={'#'}>Community Guidelines</Box>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>Legal</Text>
            <Box as="a" href={'#'}>Cookies Policy</Box>
            <Box as="a" href={'#'}>Privacy Policy</Box>
            <Box as="a" href={'#'}>Terms of Service</Box>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box borderTopWidth={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container as={Stack} maxW={'6xl'} py={4} direction={{ base: 'column', md: 'row' }} spacing={4} justify={{ md: 'space-between' }} align={{ md: 'center' }}>
          <Text>© 2023 Vaidam Health. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'https://twitter.com/vaidamh'}><FaTwitter /></SocialButton>
            <SocialButton label={'Facebook'} href={'https://www.facebook.com/vaidamhealth'}><FaFacebook /></SocialButton>
            <SocialButton label={'YouTube'} href={'https://www.youtube.com/channel/UCHh2QDCBr0IxT67L_uyr5IQ/playlists'}><FaYoutube /></SocialButton>
            <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/company/vaidam-health'}><FaLinkedin /></SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}