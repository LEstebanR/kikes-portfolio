import { Service } from "../types";

export const services: Service[] = [
  {
    id: "1",
    title: "Diagnóstico Organizacional Express",
    description:
      "Informe de situación actual, mapa de riesgos iniciales, recomendaciones prioritarias.",
    icon: "lightbulb",
    pricing: "$150 - $300 USD",
  },
  {
    id: "2",
    title: "Planeación Estratégica Asistida",
    description:
      "Análisis FODA, definición de objetivos estratégicos, mapa estratégico y KPI's iniciales, guía de implementación",
    icon: "clipboard-list",
    pricing: "$400 - $800 USD",
  },
  {
    id: "3",
    title: "Modelación de Procesos y Procedimientos",
    description:
      "Diagramas BPMN y fichas de proceso, Manuales de funciones y procedimientos, Alineación con normativas (ej. ISO, Norma 3100)",
    icon: "refresh-cw",
    pricing: "$1000-1200 USD por mes (según duración y complejidad)",
  },
  {
    id: "4",
    title: "Gestión de Proyectos por Fases",
    description:
      "Diseño de cronograma (Gantt, Work Breakdown Structure), definición de entregrables y recursos, acompañamiento y seguimiento semanal",
    icon: "settings",
    pricing: "$1000-1200 USD por mes (según duración y complejidad)",
  },
];
