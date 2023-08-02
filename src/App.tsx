import React from 'react';
import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import BUSDHandler from './components/BUSDHandler';

function App() {
  return (
    <div className="font-[poppinsbold] h-screen bg-gradient-to-r from-[#ff9800] to-[#ff7500] bg-transparent flex flex-col ">
      <Header />
      <main className="items-center justify-center flex flex-1 w-100 mx-auto md:w-1/3">
        <BUSDHandler />
      </main>
      <Footer />
    </div>
  );
}

export default App;
