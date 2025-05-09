import React from "react";
import { caseStudies } from "../data/caseStudies";

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Casos de Éxito
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra cómo he ayudado a empresas a superar sus desafíos y lograr
            resultados excepcionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <span className="text-xs bg-emerald-700 py-1 px-2 rounded font-medium">
                      {caseStudy.client}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-full p-2 text-blue-800">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-gray-500">
                        Resultado:
                      </h4>
                      <p className="text-emerald-700 font-medium">
                        {caseStudy.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center bg-white hover:bg-gray-100 text-blue-900 font-medium py-3 px-6 rounded-md border border-blue-200 shadow-sm transition-colors"
          >
            ¿Listo para su historia de éxito?
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
