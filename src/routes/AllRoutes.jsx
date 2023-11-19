import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from '../pages/NoteFound'
import { Home } from '../pages/Home'
import { Doctors } from '../pages/Doctors'
import { Hospitals } from '../pages/Hospitals'
import { PatientStories } from '../pages/PatientStories'
import { ConsultForFree } from '../pages/ConsultForFree'
import { Videos } from '../pages/Videos'
import { MedicalVisa } from '../pages/MedicalVisa'
import { AboutUs } from '../components/AboutUs'
import { ContactUs } from '../components/ContactUs'

export const AllRoutes =()=> {
  return (
    <Routes>
        <Route exect path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/hospitals' element={<Hospitals/>}/>
        <Route path='/patientstories' element={<PatientStories/>}/>
        <Route path='/consultforfree' element={<ConsultForFree/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/knowledge/videos' element={<Videos/>}/>
        <Route path='/knowledge/medicalvisa' element={<MedicalVisa/>}/>
        {/* <Route path='/privacypolicy' element={<PrivacyPolicy/>}/> */}
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}