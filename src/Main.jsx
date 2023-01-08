import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContactUs from './components/Contact/ContactUs';
import CompanyInfo from './components/CompanyInfo/CompanyInfo';

const Main = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/companyinfo" element={<CompanyInfo />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
