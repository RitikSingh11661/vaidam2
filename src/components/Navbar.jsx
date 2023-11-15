import { Box, Flex, Text, Input, Button, Stack, Image, Popover, PopoverTrigger, PopoverContent, useColorModeValue } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export const Navbar = () => {
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

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
          <Box mr='1vw'>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <Box fontWeight={'medium'} mr='1vw' color='black' as="a" p={2} href={'#'} _hover={{ textDecoration: 'none', color: linkHoverColor }}>
                <Text as='a' href='/'>Home</Text>
              </Box>
            </Popover>
          </Box>
          <Box mr='1vw'>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Flex align={'center'} fontWeight={'medium'} color='black' as="a" p={2} href={'#'} _hover={{ textDecoration: 'none', color: linkHoverColor }}>
                  <Text as='a' href='/hospitals'>Hospitals</Text>
                  <ChevronDownIcon fontSize={'2xl'} />
                </Flex>
              </PopoverTrigger>
              <PopoverContent border={0} boxShadow={'xl'} bg={popoverContentBgColor} p={4} rounded={'xl'} minW={'sm'}>
                <Stack>
                  <Box as="a" href={'#'} role={'group'} display={'block'} p={2} _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
                    <Stack direction={'row'} align={'center'}>
                      <Box>
                        <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={'medium'}>
                          India
                        </Text>
                      </Box>
                    </Stack>
                  </Box>
                  <Box as="a" href={'#'} role={'group'} display={'block'} p={2} _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
                    <Stack direction={'row'} align={'center'}>
                      <Box>
                        <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={'medium'}>
                          Turkey
                        </Text>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </PopoverContent>
            </Popover>
          </Box>
          <Box mr='1vw'>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Flex align={'center'} fontWeight={'medium'} color='black' as="a" p={2} href={'#'} _hover={{ textDecoration: 'none', color: linkHoverColor }}>
                  <Text as='a' href='/doctors'>Doctors</Text>
                  <ChevronDownIcon fontSize={'2xl'} />
                </Flex>
              </PopoverTrigger>
              <PopoverContent border={0} boxShadow={'xl'} bg={popoverContentBgColor} p={4} rounded={'xl'} minW={'sm'}>
                <Stack>
                  <Box as="a" href={'#'} role={'group'} display={'block'} p={2} _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
                    <Stack direction={'row'} align={'center'}>
                      <Box>
                        <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={'medium'}>
                          India
                        </Text>
                      </Box>
                    </Stack>
                  </Box>
                  <Box as="a" href={'#'} role={'group'} display={'block'} p={2} _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
                    <Stack direction={'row'} align={'center'}>
                      <Box>
                        <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={'medium'}>
                          Turkey
                        </Text>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </PopoverContent>
            </Popover>
          </Box>
          <Box mr='1vw'>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Flex align={'center'} fontWeight={'medium'} color='black' as="a" p={2} href={'#'} _hover={{ textDecoration: 'none', color: linkHoverColor }}>
                  <Text as='a' href='/procedures'>Procedures</Text>
                  <ChevronDownIcon fontSize={'2xl'} />
                </Flex>
              </PopoverTrigger>
              <PopoverContent border={0} boxShadow={'xl'} bg={popoverContentBgColor} p={4} rounded={'xl'} minW={'sm'}>
                <Stack>
                  <Box as="a" href={'#'} role={'group'} display={'block'} p={2} _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
                    <Stack direction={'row'} align={'center'}>
                      <Box>
                        <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={'medium'}>
                          Cardiology
                        </Text>
                      </Box>
                    </Stack>
                  </Box>
                  <Box as="a" href={'#'} role={'group'} display={'block'} p={2} _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
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
          <Box mr='1vw'>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Flex align={'center'} fontWeight={'medium'} color='black' as="a" p={2} href={'#'} _hover={{ textDecoration: 'none', color: linkHoverColor }}>
                  <Text as='a' href='/knowledge'>Knowledge</Text>
                  <ChevronDownIcon fontSize={'2xl'} />
                </Flex>
              </PopoverTrigger>
              <PopoverContent border={0} boxShadow={'xl'} bg={popoverContentBgColor} p={4} rounded={'xl'} minW={'sm'}>
                <Stack>
                  <Box as="a" href={'#'} role={'group'} display={'block'} p={2} _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
                    <Stack direction={'row'} align={'center'}>
                      <Box>
                        <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={'medium'}>
                          Videos
                        </Text>
                      </Box>
                    </Stack>
                  </Box>
                  <Box as="a" href={'#'} role={'group'} display={'block'} p={2} _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
                    <Stack direction={'row'} align={'center'}>
                      <Box>
                        <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={'medium'}>
                          Medical Visa
                        </Text>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </PopoverContent>
            </Popover>
          </Box>
          <Box mr='1vw'>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <Box fontWeight={'medium'} mr='1vw' color='black' as="a" p={2} href={'#'} _hover={{ textDecoration: 'none', color: linkHoverColor }}>
                <Text as='a' href='/patientstories'>Patient Stories</Text>
              </Box>
            </Popover>
          </Box>
          <Box mr='1vw'>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <Box fontWeight={'medium'} mr='1vw' color='black' as="a" p={2} href={'#'} _hover={{ textDecoration: 'none', color: linkHoverColor }}>
                <Text as='a' href='/consultforfree'>Free Consult</Text>
              </Box>
            </Popover>
          </Box>

        </Flex>
        <Flex bg='white'>
          <Input width={'23vw'} placeholder='Search by disease, procedure, doctor or hospital' />
          <Image p={'0 1vw'} src='https://www.vaidam.com/assets/v2/images/svg/search.svg' alt='search icon' />
        </Flex>
      </Flex>
    </Box>
  )
}