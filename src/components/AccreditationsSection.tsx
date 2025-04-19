
import React from 'react';

const AccreditationsSection = () => (
  <section className="py-24 bg-gradient-to-b from-white to-mekloy-light-blue/50 relative z-[1]">
    <div className="container mx-auto px-6">
      <h2 className="section-title text-center">Our Accreditations</h2>
      <p className="section-subtitle text-center">
        Mekloy Integrated Services is proud to meet and exceed industry standards
        through these professional certifications and accreditations.
      </p>
      
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
          <div className="text-5xl mb-6">🏆</div>
          <h3 className="text-xl font-nexa font-semibold text-mekloy-blue text-center mb-3">NEMSA 2024</h3>
          <p className="text-gray-600 text-center">Quality Certified Poles</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
          <div className="text-5xl mb-6">🏆</div>
          <h3 className="text-xl font-nexa font-semibold text-mekloy-blue text-center mb-3">SHELL 2018</h3>
          <p className="text-gray-600 text-center">Shell certified poles</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
          <div className="text-5xl mb-6">🏆</div>
          <h3 className="text-xl font-nexa font-semibold text-mekloy-blue text-center mb-3">ISO 9001</h3>
          <p className="text-gray-600 text-center">QUALITY MANAGEMENT SYSTEM- pending</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
          <div className="text-5xl mb-6">🏆</div>
          <h3 className="text-xl font-nexa font-semibold text-mekloy-blue text-center mb-3">COREN</h3>
          <p className="text-gray-600 text-center">Council for Regulation of Engineering certified Engineers</p>
        </div>
      </div>
    </div>
  </section>
);

export default AccreditationsSection;
