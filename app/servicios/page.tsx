import ReadyToJoinUs from '@/components/sections/joinUs'
import OurProcess from '@/components/sections/ourProcess'
import OurServices from '@/components/sections/ourServices'
import ServicesCards from '@/components/sections/ourServicesCards'
import React from 'react'

export default function ServiciosPage() {
  return (
    <>
      <OurServices/>
      <ServicesCards/>
      <OurProcess/>
      <ReadyToJoinUs/>
    </>
  )
}
