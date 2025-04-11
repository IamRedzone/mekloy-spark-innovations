
import React from 'react';

const LogisticsSection = () => (
  <section id="logistics" className="section relative py-24 z-[1]">
    <div className="absolute inset-0 bg-logistics-pattern bg-cover bg-fixed">
      <div className="absolute inset-0 bg-gradient-to-r from-mekloy-blue/95 to-black/90"></div>
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-nexa font-bold text-white mb-6">Logistics Excellence</h2>
          <p className="text-xl text-gray-200 mb-8">
            Beyond manufacturing and retail, Mekloy provides comprehensive logistics 
            solutions to ensure your products arrive safely and on time, every time.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start bg-white/10 backdrop-blur-md p-4 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-mekloy-yellow text-mekloy-blue flex items-center justify-center font-bold mr-4 mt-1">✓</div>
              <div>
                <h3 className="text-xl font-nexa font-semibold text-white mb-2">Nationwide Delivery</h3>
                <p className="text-gray-300">Reliable transportation across all states in Nigeria</p>
              </div>
            </li>
            <li className="flex items-start bg-white/10 backdrop-blur-md p-4 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-mekloy-yellow text-mekloy-blue flex items-center justify-center font-bold mr-4 mt-1">✓</div>
              <div>
                <h3 className="text-xl font-nexa font-semibold text-white mb-2">Supply Chain Management</h3>
                <p className="text-gray-300">End-to-end coordination from manufacturing to installation</p>
              </div>
            </li>
            <li className="flex items-start bg-white/10 backdrop-blur-md p-4 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-mekloy-yellow text-mekloy-blue flex items-center justify-center font-bold mr-4 mt-1">✓</div>
              <div>
                <h3 className="text-xl font-nexa font-semibold text-white mb-2">Project Logistics</h3>
                <p className="text-gray-300">Specialized transport for large-scale infrastructure projects</p>
              </div>
            </li>
            <li className="flex items-start bg-white/10 backdrop-blur-md p-4 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-mekloy-yellow text-mekloy-blue flex items-center justify-center font-bold mr-4 mt-1">✓</div>
              <div>
                <h3 className="text-xl font-nexa font-semibold text-white mb-2">Inventory Management</h3>
                <p className="text-gray-300">Efficient storage and distribution of electrical products</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-black/30 backdrop-blur-md p-8 rounded-xl border border-white/10">
          <h3 className="text-2xl font-nexa font-bold text-white mb-6">Safety Standards</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-mekloy-yellow pl-4 py-2">
              <h4 className="text-xl font-nexa font-semibold mb-2 text-white">HSSE Compliance</h4>
              <p className="text-gray-300">Rigorous adherence to Health, Safety, Security, and Environmental standards</p>
            </div>
            <div className="border-l-4 border-mekloy-yellow pl-4 py-2">
              <h4 className="text-xl font-nexa font-semibold mb-2 text-white">Quality Control</h4>
              <p className="text-gray-300">Comprehensive inspection procedures for all transported goods</p>
            </div>
            <div className="border-l-4 border-mekloy-yellow pl-4 py-2">
              <h4 className="text-xl font-nexa font-semibold mb-2 text-white">Professional Training</h4>
              <p className="text-gray-300">Ongoing education for our logistics team on best practices</p>
            </div>
            <div className="border-l-4 border-mekloy-yellow pl-4 py-2">
              <h4 className="text-xl font-nexa font-semibold mb-2 text-white">Risk Management</h4>
              <p className="text-gray-300">Proactive identification and mitigation of potential challenges</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LogisticsSection;
