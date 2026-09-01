import CardSection from '@/components/sections/cardSection'
import CoverageMapSection from '@/components/sections/CoverageMapSection'
import ReadyToJoinUs from '@/components/sections/joinUs'
import OurCoverage from '@/components/sections/ourCoverage'
import React from 'react'

export default function CoberturaPage() {
  return (
    <>
      <OurCoverage/>
      <CoverageMapSection/>
      <CardSection/>
      <ReadyToJoinUs/>
    </>
  )
}
