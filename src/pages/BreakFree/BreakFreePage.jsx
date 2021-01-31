import React from 'react';

import Layout from '../../components/layout/Layout';
import Intro from './sections/Intro';

import { breakFreeData } from '../../data/breakFreeData';
import BreakFreeStep from './sections/BreakFreeStep';

export default function BreakFreePage() {
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
