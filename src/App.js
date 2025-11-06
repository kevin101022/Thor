import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import ScamEducation from './components/ScamEducation/ScamEducation';
import AnalysisTips from './components/AnalysisTips/AnalysisTips';
import FAQ from './components/FAQ/FAQ';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <ScamEducation />
        <AnalysisTips />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;