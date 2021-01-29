import React from 'react';

import Layout from '../../components/layout/Layout';
import Intro from './sections/Intro';
import Step1 from './sections/Step1';
import Step2 from './sections/Step2';

export default function BreakFreePage() {
  return (
    <Layout>
      <Intro />
      <Step1 />
      <Step2 />
    </Layout>
  );
}
