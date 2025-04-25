import React from 'react';
import { Consultant } from '../types';

interface ConsultantCardProps {
  consultant: Consultant;
}

const ConsultantCard: React.FC<ConsultantCardProps> = ({ consultant }) => {
  const { name, role, bio, expertise, image, yearsOfExperience } = consultant;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-0 right-0 bg-blue-900 text-white py-1 px-3 rounded-bl-lg">
          <span className="text-sm font-medium">{yearsOfExperience} años exp.</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-emerald-700 font-medium mb-3">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-500 mb-2">Áreas de especialización:</h4>
          <div className="flex flex-wrap gap-2">
            {expertise.map((skill, index) => (
              <span 
                key={index}
                className="bg-blue-50 text-blue-800 text-xs font-medium px-2.5 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <a 
          href="#contact" 
          className="inline-block text-blue-800 hover:text-blue-900 font-medium"
        >
          Contactar →
        </a>
      </div>
    </div>
  );
};

export default ConsultantCard;