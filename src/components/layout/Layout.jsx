import React from 'react';
import Contact from '../Contact';
import Footer from '../Footer';
import Navbar from '../Navbar';

export default function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Contact />
      <Footer />
    </>
  );
}
