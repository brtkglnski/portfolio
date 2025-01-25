import React from 'react';
import './index.css';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden h-auto overflow-auto relative bg-black bg-grain flex flex-col items-center justify-center before:clipPath-inset before:content-[''] before:absolute before:rounded-full before:bg-purple-900 before:bg-grain before:w-1/2 before:opacity-50 before:aspect-square before:-translate-x-1/2 before:-translate-y-1/2 before:top-1/2 before:left-1/2 before:filter before:blur-12rem">
        <div className="mt-8 flex flex-col gap-16 pb-16 sm:w-4/5 lg:w-1/2 z-10">
      <Introduction />
      <Experience />
      <Skills/>
      <Projects/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
