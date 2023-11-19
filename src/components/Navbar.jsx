import React from 'react';
import { Link } from 'react-router-dom'
import { Box, Flex, Text, Input, Button, Stack, Image, Popover, PopoverTrigger, PopoverContent, useColorModeValue } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export const Navbar = () => {
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  const hospitalsByCountries = ['India', 'Turkey'];
  const doctorsByCountries = ['India', 'Turkey'];
  const knowledgeNavs = ['Videos', 'Medical Visa'];

  const Subnav = ({ to, data }) => {
    return (
      <PopoverContent border={0} boxShadow={'xl'} bg={popoverContentBgColor} p={4} rounded={'xl'} minW={'sm'}>
        <Stack>
          {data.map((route, i) => {
            const name = route;
            if (route === 'Medical Visa') route = 'medicalvisa';
            const href = to === '/knowledge' ? `${to}/${route}` : `${to}?country=${route}`
            // return <Link key={i} to={`${to}?country=${country}`}>
            return <Box key={i} as='a' href={href} role={'group'} display={'block'} p={2} _hover={{ bg: 'pink.50' }}>
              <Stack direction={'row'} align={'center'}>
                <Box>
                  <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={'medium'}>{name}</Text>
                </Box>
              </Stack>
            </Box>
            // </Link>
          })}
        </Stack>
      </PopoverContent>
    )
  }

  return (
    <Box color={'white'}>
      <Flex p={'0 2vw'} justify={'space-between'} alignItems={'center'}>
        <Text color={'red'} fontWeight={'semibold'}>Become Our Partener!</Text>
        <Button>Select Language</Button>
      </Flex>
      <Flex bg={'#005897'} justify={'space-between'} alignItems={'center'} p={'0 1vw'}>
        <Flex justify={'space-between'} gap={'6vw'} alignItems={'center'}>
          <Link to='/'>
            <Text fontSize={'25px'} fontWeight={'bold'}>Vaidam.com</Text>
            <Text borderTop={'1px solid white'} fontSize={'12px'}>For Medical Procedures</Text>
          </Link>
          <Image src={'https://www.vaidam.com/assets/v2/images/png/nabh-small-logo.png'} alt='logo' />
        </Flex>
        <Flex justify={'space-between'} alignItems={'center'} gap={'1vw'}>
          <Text fontWeight={'semibold'} as={'a'} href='mailto:hello@vaidam.com'>hello@vaidam.com</Text>
          <Flex _hover={{ textDecor: 'underline' }} borderRadius={'6%'} bgColor={'red'} h='6vh' w='11vw' justify={'center'} alignItems={'center'}>
            <Link to='/consultforfree'>Get A FREE quote</Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex height={'10vh'} bg={'#eee'} justify={'space-between'} alignItems={'center'} p={'0 5vw'}>
        <Flex w={'62%'} gap={'0.2vw'} color={'black'} align={'center'} >
          <Box>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <Box fontWeight={'medium'} mr='1vw' color='black' p={2} _hover={{ textDecoration: 'none', color: linkHoverColor }}>
                <Link to='/'>Home</Link>
              </Box>
            </Popover>
          </Box>
          <Box>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Flex align={'center'} fontWeight={'medium'} color='black' _hover={{ textDecoration: 'none', color: linkHoverColor }}>
                  <Link to='/hospitals'>Hospitals</Link>
                  <ChevronDownIcon fontSize={'2xl'} />
                </Flex>
              </PopoverTrigger>
              <Subnav to='/hospitals' data={hospitalsByCountries} />
            </Popover>
          </Box>
          <Box>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Flex align={'center'} fontWeight={'medium'} color='black' p={2} _hover={{ textDecoration: 'none', color: linkHoverColor }}>
                  <Link to='/doctors'>Doctors</Link>
                  <ChevronDownIcon fontSize={'2xl'} />
                </Flex>
              </PopoverTrigger>
              <Subnav to='/doctors' data={doctorsByCountries} />
            </Popover>
          </Box>
          <Box>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Flex align={'center'} fontWeight={'medium'} color='black' p={2} _hover={{ textDecoration: 'none', color: linkHoverColor }}>
                  <Link to='/procedures'>Procedures</Link>
                  <ChevronDownIcon fontSize={'2xl'} />
                </Flex>
              </PopoverTrigger>
              <PopoverContent border={0} boxShadow={'xl'} bg={popoverContentBgColor} p={4} rounded={'xl'} minW={'sm'}>
                <Stack>
                  <Box role={'group'} display={'block'} p={2} _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
                    <Stack direction={'row'} align={'center'}>
                      <Box>
                        <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={'medium'}>
                          Cardiology
                        </Text>
                      </Box>
                    </Stack>
                  </Box>
                  <Box role={'group'} display={'block'} p={2} _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
                    <Stack direction={'row'} align={'center'}>
                      <Box>
                        <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={'medium'}>
                          Cosmetic
                        </Text>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </PopoverContent>
            </Popover>
          </Box>
          <Box>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Flex align={'center'} fontWeight={'medium'} color='black' p={2} _hover={{ textDecoration: 'none', color: linkHoverColor }}>
                  <Link to='/knowledge/videos'>Knowledge</Link>
                  <ChevronDownIcon fontSize={'2xl'} />
                </Flex>
              </PopoverTrigger>
              <Subnav to='/knowledge' data={knowledgeNavs} />
            </Popover>
          </Box>
          <Box>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <Box fontWeight={'medium'} mr='1vw' color='black' p={2} _hover={{ textDecoration: 'none', color: linkHoverColor }}>
                <Link to='/patientstories'>Patient Stories</Link>
              </Box>
            </Popover>
          </Box>
          <Box>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <Box fontWeight={'medium'} mr='1vw' color='black' p={2} _hover={{ textDecoration: 'none', color: linkHoverColor }}>
                <Link to='/consultforfree'>Free Consult</Link>
              </Box>
            </Popover>
          </Box>
        </Flex>
        <Flex bg='white' w={'30%'}>
          <Input w={'90%'} placeholder='Search by disease, procedure, doctor or hospital' />
          <Image p={'0 1vw'} src='https://www.vaidam.com/assets/v2/images/svg/search.svg' alt='search icon' />
        </Flex>
      </Flex>
    </Box>
  )
}