import React from 'react';
import './index.css';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
const App = () => {
  return (
    <div className="min-h-screen h-auto overflow-auto relative bg-black bg-grain flex justify-center before:clipPath-inset before:content-[''] before:absolute before:rounded-full before:bg-purple-900 before:bg-grain before:w-1/2 before:opacity-50 before:aspect-square before:-translate-x-1/2 before:-translate-y-1/2 before:top-1/2 before:left-1/2 before:filter before:blur-12rem">
        <div className="sm:w-4/5 lg:w-3/5 z-10">
      <Introduction />
      <Experience />
      </div>
    </div>
  );
}

export default App;
