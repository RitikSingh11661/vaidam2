import React from 'react'
import {Box,Stack,Text,Button} from '@chakra-ui/react';

export const Hospitals = () => {
  const [hospitals, setHospitals] = React.useState([{id:1,name:'Jeeves',city:'Delhi',country:'India'}]);

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

  const renderHospitals = () => {
    return (
      <Stack spacing={4}>
        {hospitals.map((hospital) => (
          <Box key={hospital.id}>
            <Text>{hospital.name}</Text>
            <Text>{hospital.city}</Text>
            <Text>{hospital.country}</Text>
          </Box>
        ))}
      </Stack>
    );
  };
  return (
    <Box>
        <Stack spacing={4}>
          <Text>Best Hospitals in India</Text>
          <Stack direction="row" spacing={4}>
            <Stack spacing={2}>
              <Text>By Country</Text>
              <Button onClick={() => filterHospitalsByCountry("India")}>India</Button>
              <Button onClick={() => filterHospitalsByCountry("Turkey")}>Turkey</Button>
              <Button onClick={() => filterHospitalsByCountry("United Arab Emirates")}>United Arab Emirates</Button>
              <Button onClick={() => filterHospitalsByCountry("Thailand")}>Thailand</Button>
              <Button onClick={() => filterHospitalsByCountry("Germany")}>Germany</Button>
            </Stack>
            <Stack spacing={2}>
              <Text>By City</Text>
              <Button onClick={() => filterHospitalsByCity("New Delhi")}>New Delhi</Button>
              <Button onClick={() => filterHospitalsByCity("Hyderabad")}>Hyderabad</Button>
              <Button onClick={() => filterHospitalsByCity("Bangalore")}>Bangalore</Button>
              <Button onClick={() => filterHospitalsByCity("Chennai")}>Chennai</Button>
              <Button onClick={() => filterHospitalsByCity("Mumbai")}>Mumbai</Button>
              <Button onClick={() => filterHospitalsByCity("Gurgaon")}>Gurgaon</Button>
            </Stack>
          </Stack>
        </Stack>
        {renderHospitals()}
      </Box>
  )
}