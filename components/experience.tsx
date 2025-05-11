import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceItemProps) => {
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
          <span className="text-lg font-semibold">{company}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Consultor de proyectos y planeación sectorial en seguridad",
      company: "Secretaria de gobierno y seguridad ciudadana",
      period: "02-2024 - 11-2024",
      description:
        "Desarrollo de proyectos y planeación sectorial en seguridad, cumplimiento normativo, mejora de procesos y capacitación en seguridad ciudadana en el municipio de Santa Fe de Antioquia.",
      technologies: [
        "Planeación sectorial",
        "Cumplimiento normativo",
        "Mejora de procesos",
        "Capacitación en seguridad ciudadana",
      ],
    },
    {
      title: "Consultor plan de desarrollo municipal",
      company: "Secretaria de planeación y desarrollo territorial",
      period: "02-2024 - 06-2024",
      description:
        "Desarrollo del plan de desarrollo municipal 2024-2028, cumplimiento normativo, mejora de procesos y capacitación en planeación sectorial en el municipio de Santa Bárbara, Antioquia.",
      technologies: [
        "Planeación sectorial",
        "Cumplimiento normativo",
        "Mejora de procesos",
        "Capacitación en planeación sectorial",
      ],
    },
    {
      title: "Profesor",
      company: "Instituto politécnico internacional",
      period: "02-2023 - 06-2024",
      description:
        "Docente en el área de proyectos y planeación sectorial en la carrera de ingeniería de producción.",
      technologies: ["Docencia", "Enseñanza", "Planeación sectorial"],
    },
    {
      title: "Gerente territorial de gobierno",
      company: "Secretaria de gobierno y gestión del gabinete",
      period: "02-2022 - 12-2023",
      description:
        "Gestión de proyectos y planeación sectorial en el municipio de Medellín, Antioquia.",
      technologies: ["Gestión de proyectos", "Planeación sectorial"],
    },
    {
      title: "Asesor de proyectos",
      company: "Secretaria de planeación, infraestructura y desarrollo",
      period: "02-2022 - 16-2023",
      description:
        "Asesoría en proyectos y planeación sectorial en el municipio de Medellín, Antioquia.",
      technologies: ["Asesoría en proyectos", "Planeación sectorial"],
    },
    {
      title: "Profesional plneación y gestión de proyectos",
      company: "Secretaría de desaroolo económico Pascual Bravo",
      period: "02-2021 - 12-2021",
      description:
        "Asesoría en proyectos y planeación sectorial en el municipio de Medellín, Antioquia.",
      technologies: ["Asesoría en proyectos", "Planeación sectorial"],
    },
    {
      title: "Consultor de gobierno",
      company: "Alcaldía Entrerrios",
      period: "01-2021 - 12-2021",
      description:
        "Asesoría en proyectos y planeación sectorial en el municipio de Entrerríos, Antioquia.",
      technologies: ["Asesoría en proyectos", "Planeación sectorial"],
    },
    {
      title: "Asesor de seguimiento plan de desarrollo",
      company: "Alcaldía Hispania",
      period: "09-2021 - 12-2021",
      description:
        "Asesoría en proyectos y planeación sectorial en el municipio de Hispania, Antioquia.",
      technologies: ["Asesoría en proyectos", "Planeación sectorial"],
    },
    {
      title: "Consultor plan de desarrolo",
      company: "Alcaldía La Union",
      period: "03-2020 - 06-2021",
      description:
        "Asesoría en proyectos y planeación sectorial en el municipio de La Union, Antioquia.",
      technologies: ["Asesoría en proyectos", "Planeación sectorial"],
    },
    {
      title: "Asesor modelo de planeación y gestión de proyectos",
      company: "Alcaldía Salgar",
      period: "03-2020 - 12-2021",
      description:
        "Asesoría en proyectos y planeación sectorial en el municipio de Salgar, Antioquia.",
      technologies: ["Asesoría en proyectos", "Planeación sectorial"],
    },
    {
      title: "Consultor de proyectos y planeación sectorial de seguridad",
      company: "Alcaldía Entrerríos",
      period: "05-2020 - 08-2020",
      description:
        "Asesoría en proyectos y planeación sectorial en el municipio de Entrerríos, Antioquia.",
      technologies: ["Asesoría en proyectos", "Planeación sectorial"],
    },
    {
      title: "Consultor de planeación estratégica",
      company: "KODEMPRO",
      period: "01-2019 - 12-2019",
      description:
        "Asesoría en planeación estratégica en el municipio de Medellín, Antioquia.",
      technologies: ["Planeación estratégica"],
    },
    {
      title: "Consultor de planeación sectorial provincia PAP",
      company: "UdeM",
      period: "11-2019 - 12-2019",
      description:
        "Asesoría en planeación sectorial en la provincia de PAP, Antioquia.",
      technologies: ["Planeación sectorial"],
    },
    {
      title: "Asesor proyectos sistema general de regalías",
      company: "Alcaldía Santa Fe de Antioquia",
      period: "01-2019 - 12-2019",
      description:
        "Asesoría en proyectos y planeación sectorial en el municipio de Santa Fe de Antioquia, Antioquia.",
      technologies: ["Asesoría en proyectos", "Planeación sectorial"],
    },
    {
      title:
        "Director de producto, proceso y consultoría proyectos e inteligencia de negocio",
      company: "MyT Consulting SA",
      period: "06-2018 - 12-2020",
      description:
        "Desarrollo de proyectos y planeación sectorial en seguridad, cumplimiento normativo, mejora de procesos y capacitación en seguridad ciudadana.",
      technologies: ["Asesoría en proyectos", "Planeación sectorial"],
    },
    {
      title: "Director de banco de programas y proyectos",
      company: "Alcaldía Santa Bárbara",
      period: "01-2016 - 05-2018",
      description:
        "Desarrollo de proyectos y planeación sectorial en seguridad, cumplimiento normativo, mejora de procesos y capacitación en seguridad ciudadana.",
      technologies: ["Asesoría en proyectos", "Planeación sectorial"],
    },
    {
      title: "Coordinador CEDI logistica, calidad, procesos y proyectos",
      company: "CILES SAS",
      period: "04-2015 - 12-2015",
      description:
        "Desarrollo de proyectos y planeación sectorial en seguridad, cumplimiento normativo, mejora de procesos y capacitación en seguridad ciudadana.",
      technologies: ["Asesoría en proyectos", "Planeación sectorial"],
    },
    {
      title: "Coordinador logistico, planeación y procesos",
      company: "Everfit",
      period: "11-2014 - 02-2015",
      description:
        "Desarrollo de proyectos y planeación sectorial en seguridad, cumplimiento normativo, mejora de procesos y capacitación en seguridad ciudadana.",
      technologies: ["Asesoría en proyectos", "Planeación sectorial"],
    },
    {
      title: "Coordinador logistico, planeación y operaciones",
      company: "Grupo área logística-utsourcing Renault SOFASA y AUTECO",
      period: "07-2014 - 11-2014",
      description:
        "Desarrollo de proyectos y planeación sectorial en seguridad, cumplimiento normativo, mejora de procesos y capacitación en seguridad ciudadana.",
      technologies: ["Asesoría en proyectos", "Planeación sectorial"],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experiencia
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Trayectoria Profesional
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Una cronología de mi crecimiento profesional y logros clave
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
