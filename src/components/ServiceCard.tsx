import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { title, description, icon, pricing } = service;
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons];

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col h-full">
      <div className="flex items-center mb-4">
        {IconComponent && (
          <div className="bg-blue-100 p-3 rounded-md text-blue-800">
            <IconComponent size={24} />
          </div>
        )}
        <h3 className="text-xl font-semibold text-gray-800 ml-3">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="border-t pt-4 mt-auto">
        <div className="text-emerald-700 font-semibold">{pricing}</div>
        <a href="#contact" className="mt-3 inline-block text-blue-800 hover:text-blue-900 font-medium">
          Solicitar información →
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;