import React from 'react';
import { blogPosts } from '../data/blogPosts';

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recursos y Conocimientos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Artículos, guías y análisis sobre gestión organizacional, liderazgo y tendencias en consultoría.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-blue-700">{post.author}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <a 
                  href="#" 
                  className="inline-block text-blue-800 hover:text-blue-900 font-medium"
                >
                  Leer más →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Ver todos los artículos
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;