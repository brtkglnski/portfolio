import React from 'react';
import './index.css';
import './i18n'; 
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
const App = () => {
  document.documentElement.classList.add("no-transition");
setTimeout(() => {
  document.documentElement.classList.remove("no-transition");
}, 100);
  return (
    <main className="grow min-h-screen overflow-x-hidden h-auto overflow-auto relative bg-slate-50 dark:bg-slate-950 bg-grain flex flex-col items-center transition-colors duration-300">
        <div className="flex flex-col gap-16  z-20  max-w-3xl">
      <Navbar/>
      <Introduction />
      <Experience />
      <Skills/>
      <Projects/>
      <Footer/>
      </div>
      <div className="w-full h-full absolute z-10">
        <div className="w-full max-w-xs bg-blue-400 h-[6rem] absolute translate-x-1/2 right-0 top-[50%] blur-[6rem] rounded-full z-10 opacity-40"></div>
                <div className="w-full max-w-xs bg-blue-400 h-[6rem] absolute -translate-x-1/2 left-0 top-[80%] blur-[6rem] rounded-full z-10 opacity-40"></div>
        </div>
    </main>
  );
}

export default App;
