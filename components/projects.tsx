import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubLogo } from "./icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  date: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  date,
}: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <Image
          src={image}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{date}</p>

        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Button variant="default" className="rounded-full" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-1 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Grupo de investigación GIVIP",
      description: "Grupo de in vestigación de la Universidad de Antioquia",
      image: "/project.jpg",
      technologies: ["Investigación", "Desarrollo", "Academia"],
      date: "2018",
    },

    {
      title: "Cooperación Internacional Dotación Locales Plaza de Mercado",
      description:
        "Formulación del proyecto para ser ejecutado en el municipio de Santa Bárbara con el apoyo de la embajada de Turquía.",
      image: "/project.jpg",
      technologies: ["Desarrollo", "Formulación"],
      date: "2017",
    },
    {
      title: "50 Mil mejores casas",
      description:
        "Proyecto para la mejoración de viviendas en el municipio de Santa Bárbara.",
      image: "/project.jpg",
      technologies: ["Desarrollo", "Viviendas"],
      date: "2016",
    },
    {
      title: "Centro de Integración Ciudadana",
      description:
        "Proyecto para la mejora de la infraestructura del municipio de Santa Bárbara.",
      image: "/project.jpg",
      technologies: ["Desarrollo", "Viviendas"],
      date: "2016",
    },
    {
      title: "Compactador basura",
      description:
        "Proyecto para la mejora de la infraestructura del municipio de Santa Bárbara.",
      image: "/project.jpg",
      technologies: ["Desarrollo", "Ambiental"],
      date: "2016",
    },
    {
      title: "Cancha municipal en grama sintética",
      description:
        "Proyecto para la mejora de la infraestructura del municipio de Santa Bárbara.",
      image: "/project.jpg",
      technologies: ["Desarrollo", "Deporte"],
      date: "2016",
    },
    {
      title: "Consrucción urbanización El balcón",
      description:
        "Proyecto para la mejora de la infraestructura del municipio de Santa Bárbara junto a FINDETER.",
      image: "/project.jpg",
      technologies: ["Desarrollo", "Viviendas"],
      date: "2016",
    },
    {
      title:
        "Construcción y adecuación placas polideportivas y gimnasio al aire libre",
      description:
        "Proyecto para la mejora de la infraestructura del municipio de Santa Bárbara.",
      image: "/project.jpg",
      technologies: ["Desarrollo", "Deporte"],
      date: "2016",
    },
    {
      title: "Construcción PTAR y sistema de alcantarillado combinado",
      description:
        "Formulación del p  royecto para la mejora de la infraestructura del municipio de Santa Bárbara.",
      image: "/project.jpg",
      technologies: ["Desarrollo", "Deporte"],
      date: "2016",
    },
    {
      title: "Construcción Muro de contención",
      description:
        "Formulación del proyecto para la mejora de la infraestructura del municipio de Santa Bárbara para la entidad DAPARD.",
      image: "/project.jpg",
      technologies: ["Desarrollo", "Prevención"],
      date: "2016",
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Proyectos
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Trabajos destacados
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Algunos de mis mejores proyectos y logros técnicos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
