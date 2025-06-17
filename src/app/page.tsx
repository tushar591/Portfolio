import React from 'react';
import Hero from '../../components/main/Hero';
import Skills from '../../components/main/Skill';
import Projects from '../../components/main/Projects';

export default function Home() {
  return (
   <main className='h-full w-full '>
    <div className='flex flex-col gap-20'>
        <Hero />
        <Skills />
        <Projects />
       
    </div>

   </main>
  );
}
