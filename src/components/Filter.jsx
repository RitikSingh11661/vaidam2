import React from 'react'
import { Stack, Box, Text, Flex } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom';
import { CloseIcon } from '@chakra-ui/icons';

export const Filter = ({selectedCountry,selectedCity}) => {
  const setSearchParams = useSearchParams()[1];
  const [country, setCountry] = React.useState(selectedCountry || 'India');
  const [city, setCity] = React.useState(selectedCity);
  const countriesList = ['India', 'Turkey', 'United Arab Emirates', 'Thailand', 'Germany', 'South Africa', 'Tunisia']
  const IndiaCities = ['New Delhi', 'Hyderabad', 'Bangalore', 'Chennai', 'Mumbai', 'Gurgaon']
  const TurkeyCities = ['Istanbul', 'Izmir', 'Ankara', 'Kocaeli', 'Pendic', 'Bursa']
  const citiesList = { India: IndiaCities, Turkey: TurkeyCities };
  const [cities, setCities] = React.useState(citiesList[country] || []);

  const RenderCountries = () => {
    return (
      <Stack color={'#005897'} p='1vw' gap={'1vw'} maxH={'33vh'} overflowY={'auto'}>
        {countriesList?.length > 0 && countriesList?.map((c, i) => <Text key={i} cursor={'pointer'} onClick={() => setCountry(c)}>{c}(200)</Text>)}
      </Stack>
    )
  }

  const RenderCities = () => {
    return (
      <Stack color={'#005897'} p='1vw' gap={'1vw'} maxH={'33vh'} overflowY={'auto'}>
        {cities?.length > 0 && cities?.map((c, i) => <Text key={i} cursor={'pointer'} onClick={() => setCity(c)}>{c}(200)</Text>)}
      </Stack>
    )
  }

  const handleReset = () => {
    setCountry('India');
    setCities('');
  }

  React.useEffect(() => {
    const params = {};
    country && (params.country = country);
    city && (params.city = city);
    setSearchParams(params);
    setCities(citiesList[country]);
  }, [country, city, selectedCountry,setSearchParams]);

  return (
    <Stack w={'20%'} bg='#fafafa' p='0 0.5vw' gap={'1vw'}>
      <Flex cursor={'pointer'} onClick={handleReset} justify={'flex-end'} align={'center'} gap={'1vw'}>
        <Text fontSize={'lg'} color={'#005897'} fontWeight={'semibold'}>Reset Filter</Text>
        <CloseIcon />
      </Flex>
      <Box>
        <Text fontSize={'2xl'} pb={'2vh'} fontWeight={'semibold'}>By Country</Text>
        <RenderCountries />
      </Box>
      <Box >
        <Text fontSize={'2xl'} pb={'2vh'} fontWeight={'semibold'}>By City</Text>
        <RenderCities />
      </Box>
      <Box >
        <Text fontSize={'2xl'} pb={'2vh'} fontWeight={'semibold'}>By Department</Text>
        <Stack color={'#005897'} p='1vw' gap={'1vw'} maxH={'33vh'} overflowY={'auto'}>
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
  )
}