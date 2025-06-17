import React from 'react';
import Hero from '../../components/main/Hero';
import Skills from '../../components/main/Skill';
import Projects from '../../components/main/Projects';

export default function Home() {
  return (
   <main className='max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8'>
        <Hero />
        <Skills />
        <Projects />
   </main>
  );
}
