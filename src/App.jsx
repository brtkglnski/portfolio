import React from 'react';
import './index.css';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
const App = () => {
  return (
    <main className="grow min-h-screen overflow-x-hidden h-auto overflow-auto relative bg-gray-900 bg-grain flex flex-col items-center">
        <div className="flex flex-col gap-16  z-10  max-w-3xl">
      <Introduction />
      <Experience />
      <Skills/>
      <Projects/>
      <Footer/>
      </div>
    </main>
  );
}

export default App;
