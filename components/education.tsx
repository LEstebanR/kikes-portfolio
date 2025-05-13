import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

interface EducationItemProps {
  title: string;
  institution: string;
  period: string;
}

const EducationItem = ({ title, institution, period }: EducationItemProps) => {
  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
            <Building2 className="size-5 text-muted-foreground" />
          </div>
          <span className="text-lg font-semibold">{institution}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const education = [
    {
      title:
        "Máster MBA en Dirección de Empresas y Gerencia en Proyectos de Ingeniería",
      institution: "Universidad de Murcia, España",
      period: "2024",
    },
    {
      title: "Especialista en Gerencia de Proyectos",
      institution: "Corporación Universitaria Minuto de Dios",
      period: "2019",
    },
    {
      title: "Ingeniero de Producción",
      institution: "ITM Institución Universitaria",
      period: "2014",
    },
    {
      title: "Tecnólogo de producción",
      institution: "ITM Institución Universitaria",
      period: "2010",
    },
  ];

  const aditionalEducation = [
    {
      title: "Curso virtual Data Analitics",
      institution: "Industria Talentos 4.0",
      period: "2021",
    },
    {
      title: "Planificación de la gestión pública y la construcción de la paz",
      institution: "SENA",
      period: "2020",
    },
    {
      title:
        "Project Manager software-Aplicación en programación y seguimiento a proyectos",
      institution: "SENA",
      period: "2019",
    },
    {
      title: "Diplomado: Gestión de recursos y Cooperación Internacional",
      institution: "Secretaria de Productividad y Competividad-CIS",
      period: "2019",
    },
    {
      title:
        "Diplomado: Enfoque gestión Publica territorial-ABC del estado-Programas de Gobierno",
      institution: "Escuela Superior de Administración Pública-ESAP",
      period: "2018",
    },
    {
      title: "Diplomado Análisis Financiero de Proyectos",
      institution: "Corporación Universitaria Minuto de Dios",
      period: "2018",
    },
    {
      title: "Diplomado: Gestión de Desarrollo Económico Local ",
      institution:
        "Federación Colombiana de Municipios-Federación Canadiense de Municipalidades",
      period: "2017",
    },
    {
      title: "Diplomado: Formulacion y estructuración de proyectos",
      institution: "IDEA-ESCUELA SUPERIOR DE ADMINISTRACION PUBLICA",
      period: "2016",
    },
    {
      title: "Curso: uso de Excel y Access para el desarrollo de",
      institution: "SENA",
      period: "2015",
    },
    {
      title: "Curso: ISO 9001:2008: auditoria interna de calidad",
      institution: "SENA",
      period: "2014",
    },
    {
      title:
        "Diplomado: Diseño y gestión propuestas para negocios internacionales",
      institution: "Institución universitaria ITM",
      period: "2014",
    },
    {
      title:
        "Conferencia: martes de la producción- Del pensamiento lineal al pensamiento sistémico",
      institution: "ITM Institución Universitaria.",
      period: "2010",
    },
    {
      title: "Taller-Conferencia: Producción por proyectos",
      institution: "ITM Institución Universitaria.",
      period: "2010",
    },
    {
      title: "Conferencia-Seminario: TPM En Colombia",
      institution: "ITM Institución Universitaria.",
      period: "2010",
    },
    {
      title: "Taller-Conferencia TOC (Teoría de las restricciones)",
      institution: "ITM Institución Universitaria.",
      period: "2010",
    },
    {
      title: "Taller-Conferencia TPM (Manejo Productivo Total)",
      institution: "ITM Institución Universitaria.",
      period: "2010",
    },
    {
      title: "Programación de operaciones-Teoría de colas",
      institution: "ITM Institución Universitaria.",
      period: "2010",
    },
  ];

  return (
    <section id="education" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Educación
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Formación académica
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Una cronología de mi crecimiento académico
          </p>
        </div>

        <div className="relative">
          {education.map((education, index) => (
            <EducationItem key={index} {...education} />
          ))}
        </div>
      </div>
      <div className="max-w-screen-md mx-auto mt-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Cursos, seminarios y talleres
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Una cronología de mis cursos, seminarios y talleres
          </p>
        </div>

        <div className="relative">
          {aditionalEducation.map((education, index) => (
            <EducationItem key={index} {...education} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
