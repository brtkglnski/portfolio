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
    <main className="grow min-h-screen overflow-x-hidden h-auto overflow-auto relative bg-blue-50 dark:bg-slate-950 bg-grain flex flex-col items-center transition-colors duration-300">
        <div className="flex flex-col gap-16  z-10  max-w-3xl">
      <Navbar/>
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
