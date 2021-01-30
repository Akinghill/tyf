import React from 'react'

import Layout from '../../components/layout/Layout'
import Approach from './sections/Approach'
import Hero from './sections/Hero'
import Mission from './sections/Mission'
import RecentPosts from './sections/RecentPosts'
import Support from './sections/Support'

export default function HomePage() {

  return (
    <Layout>
      {/* <Hero sectionName='hero'></Hero>
      <Mission />
      <Approach />
      <Support /> */}
      <RecentPosts/>
    </Layout>
  )
}
