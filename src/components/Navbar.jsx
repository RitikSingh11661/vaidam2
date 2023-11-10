import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text , Input, Image} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import React from 'react'

export const Navbar = () => {
  return (
    <Box color={'white'}>
      <Flex p={'0 2vw'} justify={'space-between'} alignItems={'center'}>
        <Text color={'red'} fontWeight={'semibold'}>Become Our Partener!</Text>
        <Button>Select Language</Button>
      </Flex>
      <Flex bg={'#005897'} justify={'space-between'} alignItems={'center'} p={'0 1vw'}>
        <Flex justify={'space-between'} gap={'6vw'} alignItems={'center'}>
          <Box>
            <Text fontSize={'25px'} fontWeight={'bold'}>Vaidam.com</Text>
            <Text borderTop={'1px solid white'} fontSize={'12px'}>For Medical Procedures</Text>
          </Box>
          <Image src={'https://www.vaidam.com/assets/v2/images/png/nabh-small-logo.png'} alt='logo' />
        </Flex>
        <Flex justify={'space-between'} alignItems={'center'} gap={'1vw'}>
          <Text fontWeight={'semibold'}>hello@vaidam.com</Text>
          <Flex borderRadius={'6%'} bgColor={'red'} h='6vh' w='11vw' justify={'center'} alignItems={'center'}>
            <Text>Get A FREE quote</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex height={'10vh'} bg={'#eee'} justify={'space-between'} alignItems={'center'} p={'0 5vw'}>
        <Flex color={'black'} align={'center'}>
          <Text fontWeight={'medium'} mr='1vw'>Home</Text>
          <Menu>
            <MenuButton bg={'transparent'} as={Button} rightIcon={<ChevronDownIcon />}>
              Hopitals
            </MenuButton>
            <MenuList>
              <MenuItem>India</MenuItem>
              <MenuItem>Turkey</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton bg={'transparent'} as={Button} rightIcon={<ChevronDownIcon />}>
              Doctors
            </MenuButton>
            <MenuList>
              <MenuItem>India</MenuItem>
              <MenuItem>Turkey</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton bg={'transparent'} as={Button} rightIcon={<ChevronDownIcon />}>
              Procedures
            </MenuButton>
            <MenuList>
              <MenuItem>CARDIOLOGY</MenuItem>
              <MenuItem>COSMETIC</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton bg={'transparent'} as={Button} rightIcon={<ChevronDownIcon />}>
              Knowledge
            </MenuButton>
            <MenuList>
              <MenuItem>Blogs</MenuItem>
              <MenuItem>Videos</MenuItem>
              <MenuItem>Medical Visa</MenuItem>
            </MenuList>
          </Menu>
          <Text fontWeight={'medium'} mr='2vw'>Patient Stories</Text>
          <Text fontWeight={'medium'} mr='2vw'>FREE Consult</Text>
        </Flex>
        <Flex bg='white'>
          <Input width={'23vw'} placeholder='Search by disease, procedure, doctor or hospital' />
          <Image p={'0 1vw'} src='https://www.vaidam.com/assets/v2/images/svg/search.svg' alt='search icon' />
        </Flex>
      </Flex>
    </Box>
  )
}