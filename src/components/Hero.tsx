import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      ></div>
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-4">
              Consultor en gestión de proyectos, planeación estratégica y
              desarrollo organizacional
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-xl">
              Soy consultor con experiencia en la estructuración, planeación y
              gestión de proyectos, especializado en desarrollo organizacional,
              mejora de procesos y cumplimiento normativo. Ayudo a empresas
              públicas y privadas a optimizar su estructura, aumentar su
              eficiencia y alinear sus operaciones con los objetivos
              estratégicos. Trabajo con metodologías como PMBOK, BPMN, SCRUM,
              DATA ANALITYCS y enfoque basado en procesos. 8 años de
              experiencia, entregables claros y medibles, trabajo personalizado
              y confidencial.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors text-center"
              >
                Solicitar consulta
              </a>
              <a
                href="#services"
                className="bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors text-center"
              >
                Mis servicios
              </a>
            </div>
            <div className="mt-10 flex items-center">
              <div className="flex -space-x-2">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Cliente"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Cliente"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Cliente"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
              <p className="ml-4 text-sm text-gray-600">
                Más de <span className="font-semibold">200 clientes</span>{" "}
                satisfechos
              </p>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-blue-900/10 rounded-lg blur-lg"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Consultoría empresarial"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-emerald-700">
                      +50%
                    </span>
                    <span className="text-sm text-gray-600">
                      mejora en productividad
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
