import React from "react";
import { studies } from "../data/studies";

const StudiesSection: React.FC = () => {
  return (
    <section id="studies" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Formación Académica
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estudios y certificaciones que respaldan mi experiencia y
            conocimiento en consultoría y gestión organizacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-sm text-gray-500">{study.year}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-blue-700">
                    {study.institution}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {study.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudiesSection;
