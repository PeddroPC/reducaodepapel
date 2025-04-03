import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-700 to-green-600 py-12 shadow-lg">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Título principal com efeito de destaque */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          <span className="opacity-90">Do Papel para o Digital </span>
        </h1>
        
        {/* Subtítulo com maior destaque */}
        <p className="text-xl md:text-2xl text-green-50 font-medium mt-4">
            ♻️ Reduza, Digitalize, Preserve ♻️
        </p>
        
      </div>
    </header>
  );
};

export default Header;