import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
          Bem-vindo!
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Esta é a landing page do seu produto incrível. 
          <br className="hidden md:block" />
          Em breve, algo extraordinário acontecerá aqui.
        </p>
        <div className="mt-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full animate-pulse">
            <div className="w-6 h-6 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
