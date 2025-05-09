import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../data/services";

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrezco soluciones integrales para optimizar sus operaciones y
            potenciar el crecimiento de su organización.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center bg-white hover:bg-gray-100 text-blue-900 font-medium py-3 px-6 rounded-md border border-blue-200 shadow-sm transition-colors"
          >
            Consulta personalizada
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

export default Services;
