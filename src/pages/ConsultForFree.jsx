import { ChevronDownIcon } from '@chakra-ui/icons';
import { VStack, Input, Select, Textarea, Button, Text, FormLabel, Heading, Box, Flex, FormControl, Image, Stack, Menu, MenuButton, MenuList, MenuItem, Checkbox } from '@chakra-ui/react'
import React from 'react'
import { useLocation } from 'react-router-dom'

export const ConsultForFree = () => {
    const hospital = useLocation().state;
    const doctor = useLocation().state;
    const [searchDoctor, setSearchDoctor] = React.useState('');
    const [searchSpeciality, setSearchSpeciality] = React.useState('');
    const [showOther, setShowOther] = React.useState(false);
    const [showDoctors, setShowDoctors] = React.useState(false);
    const [showSpecialities, setShowSpecialities] = React.useState(false);
    const allDoctors = ['Dr. Dummy1', 'Dr. Dummy2', 'Dr. Dummy3'];
    const allSpecialties = ['Cardiology', 'Orthopedics', 'Dermatology'];

    // Function to filter based on search
    const filteredDoctors = allDoctors.filter(doctor => doctor.toLowerCase().includes(searchDoctor.toLowerCase()));
    const filteredSpecialties = allSpecialties.filter(spec => spec.toLowerCase().includes(searchSpeciality.toLowerCase()));

    // Function to handle input change
    const handleDoctorInputChange = (e) => {
        setSearchDoctor(e.target.value);
        setShowDoctors(true);
    };

    const handleSpecialtyInputChange = (e) => {
        setSearchSpeciality(e.target.value);
        setShowSpecialities(true);
    };

    // Function to handle doctor selection
    const handleDoctorSelection = (Specialty) => {
        setSearchDoctor(Specialty);
        setShowDoctors(false);
    };
    const handleSpecialtySelection = (Specialty) => {
        setSearchSpeciality(Specialty);
        setShowSpecialities(false);
    };
    console.log('doctor',doctor)

    return (
        <VStack w={'40%'} m={'auto'}>
            {!(hospital||doctor) && <Box boxShadow={'sm'} p={'3vh 0'}>
                <Heading fontSize={'2xl'} textAlign={'center'}>Help Us With Patient Details</Heading>
            </Box>}
            <Flex flexDir={'column'} textAlign={'center'} rounded={'lg'} boxShadow={'lg'} p={'3vw'} gap={'3vh'}>
                {hospital?.type && (
                    <>
                        <Flex gap={'1vw'}>
                            <Image w={'30%'} src={hospital?.image} alt='hospital' />
                            <Stack gap={'1vh'} textAlign={'start'}>
                                <Heading fontSize={'2xl'}>Hospital Choosen</Heading>
                                <Text color={'#005897'}>{hospital?.name}</Text>
                            </Stack>
                        </Flex>
                        <FormControl isRequired>
                            <FormLabel>Select Appointment Date</FormLabel>
                            <Input type='Date' placeholder='Patient Name' />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Select Doctor</FormLabel>
                            <VStack gap={'2vw'} align='stretch'>
                                <Menu align='stretch' autoSelect>
                                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>{searchDoctor || 'Choose Doctor'}</MenuButton>
                                    <MenuList minW={'prose'} visibility={showDoctors}>
                                        <Input placeholder='Search' onChange={handleDoctorInputChange} />
                                        {filteredDoctors.map((doctor) => (
                                            <MenuItem key={doctor} onClick={() => handleDoctorSelection(doctor)}>{doctor}</MenuItem>
                                        ))}
                                    </MenuList>
                                </Menu>
                                <Checkbox onChange={(e) => setShowOther(e.target.checked)} align={'stretch'}>Other</Checkbox>
                            </VStack>
                        </FormControl>
                        {showOther && <FormControl>
                            <FormLabel>Select Doctor Speciality</FormLabel>
                            <Stack align='stretch' maxH={'10vh'} overflowY={'auto'}>
                                <Menu align='stretch' autoSelect>
                                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>{searchSpeciality || 'Choose Doctor Speciality'}</MenuButton>
                                    <MenuList minW={'prose'} visibility={showSpecialities}>
                                        <Input placeholder='Search' onChange={handleSpecialtyInputChange} />
                                        {filteredSpecialties.map((spec) => (
                                            <MenuItem key={spec} onClick={() => handleSpecialtySelection(spec)}>{spec}</MenuItem>
                                        ))}
                                    </MenuList>
                                </Menu>
                            </Stack>
                        </FormControl>}
                    </>
                )}
                {doctor && (
                    <>
                        <Flex gap={'1vw'}>
                            <Image w={'30%'} src={doctor?.image} alt='doctor' />
                            <Stack gap={'1vh'} textAlign={'start'}>
                                <Heading fontSize={'2xl'}>Doctor Choosen</Heading>
                                <Text color={'#005897'}>{doctor?.name}</Text>
                                <Text fontSize={'md'} fontWeight={'semibold'} color={'grey'}>{doctor?.title}</Text>
                                <Text color={'#005897'}>{doctor?.location}</Text>
                            </Stack>
                        </Flex>
                        <FormControl isRequired>
                            <FormLabel>Select Appointment Date</FormLabel>
                            <Input type='Date' placeholder='Patient Name' />
                        </FormControl>
                    </>
                )}
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input bg='white' type='text' placeholder='Patient Name' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input bg='white' type='email' placeholder='Enter Email' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Country</FormLabel>
                    <Select bg='white' color={'grey'}>
                        <option value={''}>Choose Country</option>
                        <option value={'India'}>India</option>
                        <option value={'Turkey'}>Turkey</option>
                    </Select>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>City</FormLabel>
                    <Input bg='white' type='text' placeholder='Enter City' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Phone No.</FormLabel>
                    <Input bg='white' type='text' placeholder='Your Phone No.' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Medical Issue</FormLabel>
                    <Textarea bg={'white'} placeholder='Describe The Current Medical Problem...' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Patient's Age or Date Of Birth</FormLabel>
                    <Input bg='white' type='text' placeholder='Example: 23 Yrs or 01/01/2000' />
                </FormControl>
                <Button m={'auto'} color={'white'} width={'30%'} bg={'red'}>SUBMIT</Button>
                <Text fontSize={'sm'} color={'grey'}>By submitting the form I agree to the Terms of Use and Privacy Policy of Vaidam Health.</Text>
            </Flex>
        </VStack>
    )
}
