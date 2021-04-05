import React, { useEffect } from 'react';

import Layout from '../../components/layout/Layout';
import Intro from './sections/Intro';

import { breakFreeData } from '../../data/breakFreeData';
import BreakFreeStep from './sections/BreakFreeStep';
import Contact from '../../components/Contact';

export default function BreakFreePage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    window.scrollTo(0, 0);
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Layout>
      <Intro />
      {breakFreeData.data.map((breakfreeStep, i) => (
        <BreakFreeStep
          breakFreeData={breakfreeStep}
          reverse={i % 2 === 0 ? false : true}
        ></BreakFreeStep>
      ))}
    </Layout>
  );
}
