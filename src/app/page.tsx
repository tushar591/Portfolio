import React from 'react';
import Hero from '../../components/main/Hero';
import HeroContents from '../../components/sub/HeroContents';

export default function Home() {
  return (
   <main className='h-full w-full '>
    <div className='flex flex-col h-[850px] gap-20'>
        <Hero />
        <HeroContents />
    </div>

   </main>
  );
}
