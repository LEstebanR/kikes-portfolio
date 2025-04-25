import React from 'react';
import ConsultantCard from './ConsultantCard';
import { consultants } from '../data/consultants';

const Consultants: React.FC = () => {
  return (
    <section id="consultants" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestro Equipo de Expertos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conozca a nuestros consultores con amplia experiencia en planificación, gestión de proyectos y transformación organizacional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {consultants.map(consultant => (
            <ConsultantCard key={consultant.id} consultant={consultant} />
          ))}
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center bg-blue-50 rounded-xl p-8 shadow-sm">
          <div className="md:w-2/3 md:pr-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">¿Necesita un equipo especializado?</h3>
            <p className="text-gray-600 mb-6">
              Podemos armar un equipo de consultores específicamente diseñado para abordar los desafíos únicos de su organización.
            </p>
            <a 
              href="#contact" 
              className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-medium transition-colors inline-block"
            >
              Solicitar consulta
            </a>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-emerald-500/20 rounded-lg blur-lg"></div>
              <div className="relative bg-white p-4 rounded-lg shadow-md">
                <div className="font-medium text-emerald-700 mb-2">Equipo personalizado</div>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Selección según sus necesidades
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Combinación de especialidades
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Soluciones a medida
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultants;