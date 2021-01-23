import React from 'react'

import Layout from '../../components/layout/Layout'
import NewIntro from './sections/NewIntro'
import Step1 from './sections/Step1'


export default function BreakFreePage() {

  return (
    <Layout>
      <NewIntro/>
      <Step1/>
    </Layout>
  )
}