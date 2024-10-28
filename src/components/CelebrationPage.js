import React, { useState, useEffect } from 'react';

const CelebrationPage = () => {
  const [pageState, setPageState] = useState('loading');
  // Možné stavy: 'loading', 'walking', 'standing', 'opening', 'scratchcard'

  // Simulácia načítania resources
  useEffect(() => {
    // Tu budeme neskôr načítavať obrázky
    setTimeout(() => setPageState('walking'), 1000);
  }, []);

  // Handler pre kliknutie na darček
  const handleGiftClick = () => {
    if (pageState === 'standing') {
      setPageState('opening');
      setTimeout(() => setPageState('scratchcard'), 2000);
    }
  };

  return (
    <div className="min-h-screen w-full relative bg-gradient-to-b from-sky-100 to-sky-200 overflow-hidden">
      {/* Snehové pozadie */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Tu pridáme neskôr animované snehové vločky */}
      </div>

      {/* Kontajner pre tučniaka a darček */}
      <div className="relative h-screen flex items-center justify-center">
        {/* Tu bude tučniak s darčekom */}
        <div className={`transition-all duration-500 ${
          pageState === 'scratchcard' ? 'opacity-0' : 'opacity-100'
        }`}>
          {/* Placeholder pre tučniaka - nahradíme skutočnou animáciou */}
          <div className="w-64 h-64 bg-black rounded-full relative">
            {pageState === 'standing' && (
              <div 
                onClick={handleGiftClick}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
                         w-20 h-20 bg-red-500 cursor-pointer hover:scale-105 
                         transition-transform duration-300"
              />
            )}
          </div>
        </div>
      </div>

      {/* Žreb */}
      {pageState === 'scratchcard' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center 
                      transition-opacity duration-500">
          <h1 className="text-4xl font-bold mb-8 text-blue-800">
            Meninové čísla
          </h1>
          <div className="w-full max-w-lg aspect-[3/4] bg-white rounded-lg shadow-xl">
            {/* Tu pridáme komponent stieracieho žrebu */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CelebrationPage;