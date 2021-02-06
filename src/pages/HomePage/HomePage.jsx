import React, { useEffect } from 'react';

import Layout from '../../components/layout/Layout';
import Approach from './sections/Approach';
import Hero from './sections/Hero';
import Mission from './sections/Mission';
import RecentPosts from './sections/RecentPosts';
import Support from './sections/Support';

export default function HomePage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    window.scrollTo(0, 0);
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Layout>
      <Hero sectionName="hero"></Hero>
      <Mission />
      <Approach />
      <Support />
      <RecentPosts />
    </Layout>
  );
}
