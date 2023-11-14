import React from 'react'
import { Box, Flex, Text, Image, Stack, Select} from '@chakra-ui/react'
import { Contact } from '../components/Contact'

export const PatientStories = () => {
  const patientTestimonials = [['Anthony From Nigeria Successfully Treated with a Right Hemicolectomy and Chemotherapy in India', '18 Oct 2023', 'https://www.vaidam.com/sites/default/files/anthony-min.jpg'], ['Kabir Zubairu From Nigeria Receives Chemotherapy in India', '18 Oct 2023', 'https://www.vaidam.com/sites/default/files/kabir-min.jpg']];
  const cancer = [['Transarterial Chemoembolization (TACE) in Germany: Understanding the Procedure', '16 Aug 2023', 'https://www.vaidam.com/sites/default/files/tace-in-germany-list-image.png'], ['Dendritic Cell Therapy in Germany', '11 Aug 2023', 'https://www.vaidam.com/sites/default/files/dendritic-cell-therapy-germany-list-image.png']]

  const categories = { patientTestimonials, cancer };
  const allCategories = [...patientTestimonials, ...cancer];
  const [activeCategory, setactiveCategory] = React.useState();

  const RenderCategories = () => {
    return (
      <Stack mt={'4vh'} gap={'5vw'}>
        {activeCategory ? categories[activeCategory].map((cat, index) => {
          return (
            <Flex gap={'1vw'} h='30%' w={'full'}>
              <Stack w='70%' key={index + cat}>
                <Text fontSize={'xl'} fontWeight={'semibold'} lineHeight={'4vh'}>{cat[0]}</Text>
                <Flex fontSize={'xs'} gap={'3vw'}>
                  <Text>Category: {activeCategory}</Text>
                  <Text>Created Date: {cat[1]}</Text>
                </Flex>
              </Stack>
              <Image boxShadow={'md'} w={'27%'} h='fit-content' src={cat[2]} alt={activeCategory} />
            </Flex>
          )
        }) : allCategories.map((cat, index) => {
          return (
            <Flex gap={'1vw'} h='30%' w={'full'}>
              <Stack w='70%' key={index + cat}>
                <Text fontSize={'xl'} fontWeight={'semibold'} lineHeight={'4vh'}>{cat[0]}</Text>
                <Flex fontSize={'xs'} gap={'3vw'}>
                  <Text>Category: {activeCategory}</Text>
                  <Text>Created Date: {cat[1]}</Text>
                </Flex>
              </Stack>
              <Image boxShadow={'md'} w={'27%'} h='fit-content' src={cat[2]} alt={activeCategory} />
            </Flex>
          )
        })
        }
      </Stack >
    )
  }

  return (
    <Box w={'90%'} m='3vh auto'>
      <Flex justify={'space-between'} borderBottom={'1px solid grey'}>
        <Flex w={'50%'} gap={'2vw'}>
          <Stack w='full'>
            <Image boxShadow={'md'} src='https://www.vaidam.com/sites/default/files/camila_da_silva_baiao_mateus_1.jpg' alt='patient story' />
            <Box h='22%'>
              <Text fontSize={'xl'} fontWeight={'semibold'} lineHeight={'4vh'}>A Patient from Uganda had her Breast Cancer Reviewed in India</Text>
            </Box>
            <Box w={'60%'} fontSize={'xs'}>
              <Text>Category: Patient Testimonials</Text>
              <Text>Created Date: 06 Nov 2023</Text>
            </Box>
          </Stack>
          <Stack w='full'>
            <Image boxShadow={'md'} src='https://www.vaidam.com/sites/default/files/bamusiima_winfred_sarah_testimonial.jpg' alt='patient story' />
            <Box h='22%'>
              <Text fontSize={'xl'} fontWeight={'semibold'} lineHeight={'4vh'}>An Angolan couple had a joyful journey to India for a successful IVF treatment</Text>
            </Box>
            <Box w={'60%'} fontSize={'xs'}>
              <Text>Category: Patient Testimonials</Text>
              <Text>Created Date: 08 Nov 2023</Text>
            </Box>
          </Stack>
        </Flex>
        <Stack w={'45%'} h={'60vh'}>
          <Flex gap={'1vw'} h='30%' align={'center'}>
            <Image boxShadow={'md'} w={'50%'} h={'90%'} src='https://www.vaidam.com/sites/default/files/patient_testimonial_-_olumboy_umanyozov-min.jpg' alt='patient story' />
            <Stack w='99%'>
              <Text fontSize={'xl'} fontWeight={'semibold'} lineHeight={'4vh'}>Uzbekistan Patient with Throat Cancer Successfully Treated in India</Text>
              <Box w={'60%'} fontSize={'xs'}>
                <Text>Category: Patient Testimonials</Text>
                <Text>Created Date: 08 Nov 2023</Text>
              </Box>
            </Stack>
          </Flex>
          <Flex gap={'1vw'} h='30%' align={'center'}>
            <Image boxShadow={'md'} w={'50%'} h={'90%'} src='https://www.vaidam.com/sites/default/files/shihab-min.jpg' alt='patient story' />
            <Stack w='99%'>
              <Text fontSize={'xl'} fontWeight={'semibold'} lineHeight={'4vh'}>Bangladesh Patient Receives Specialized PRP Therapy in India</Text>
              <Box w={'60%'} fontSize={'xs'}>
                <Text>Category: Patient Testimonials</Text>
                <Text>Created Date: 27 Oct 2023</Text>
              </Box>
            </Stack>
          </Flex>
          <Flex gap={'1vw'} h='30%' align={'center'}>
            <Image boxShadow={'md'} w={'50%'} h={'90%'} src='https://www.vaidam.com/sites/default/files/adil-min.jpg' alt='patient story' />
            <Stack w='99%'>
              <Text fontSize={'xl'} fontWeight={'semibold'} lineHeight={'4vh'}>Baby From Ivory Coast Successfully Treated with Occupational Therapy in India</Text>
              <Box w={'60%'} fontSize={'xs'}>
                <Text>Category: Patient Testimonials</Text>
                <Text>Created Date: 27 Nov 2023</Text>
              </Box>
            </Stack>
          </Flex>
        </Stack>
      </Flex>
      <Flex justify={'space-between'} mt='4vw' >
        <Stack w='60%'>
          <Flex bg='#005897' justify={'space-between'} p={'1vw'}>
            <Text fontSize={'2xl'} fontWeight={'semibold'} color={'white'}>Select Category</Text>
            <Select bg='white' w='60%' onChange={(e) => setactiveCategory(e.target.value)}>
              <option value="">Select Category</option>
              <option value={'patientTestimonials'}>Patient Testimonials</option>
              <option value={'cancer'}>Cancer</option>
            </Select>
          </Flex>
          <RenderCategories />
        </Stack>
        <Contact />
      </Flex>
    </Box>
  )
}