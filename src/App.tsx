import React from 'react';
import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import BUSDHandler from './components/BUSDHandler';

function App() {
  return (
    <div className="font-[poppinsbold] h-screen bg-gradient-to-r from-[#ff9800] to-[#ff7500] bg-transparent flex flex-col ">
      <Header />
      <main className="items-center grid grid-cols-1 flex-1 mx-5 md:grid-cols-3">
        <BUSDHandler />
      </main>
      <Footer />
    </div>
  );
}

export default App;
