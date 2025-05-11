import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes } from "react";
import Link from "next/link";
const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <ProfileImage className="hidden md:block" />

          {/* Content */}
          <div className="flex-1 md:text-left">
            <Badge variant="secondary" className="mb-4">
              Sobre mí
            </Badge>
            <ProfileImage className="mt-3 mb-8 block md:hidden" />
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Me apasiona llevar a las empresas y organizaciones a un nivel de
              excelencia.
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              Consultor con experiencia en la estructuración, planeación y
              gestión de proyectos, especializado en desarrollo organizacional,
              mejora de procesos y cumplimiento normativo. Ayudo a empresas
              públicas y privadas a optimizar su estructura, aumentar su
              eficiencia y alinear sus operaciones con los objetivos
              estratégicos. Trabajo con metodologías como PMBOK, BPMN, SCRUM,
              DATA ANALITYCS y enfoque basado en procesos.
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              {/* <Button className="rounded-full">
                <GithubLogo />
                View Github
              </Button> */}
              <Link
                href="https://drive.google.com/drive/folders/1xXpN2_0qwfsICohfGzVA2ofTm3qiiAts"
                target="_blank"
              >
                <Button variant="outline" className="rounded-full">
                  <Download />
                  Descargar CV
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "mt-10 w-56 h-70 md:w-80 md:h-100 flex items-center justify-center",
      className
    )}
    {...props}
  >
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <Image
        src="/luisvillada.jpg"
        alt="Luis Villada"
        className="object-cover"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  </div>
);
export default About;
