import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleArrowDown, Zap } from "lucide-react";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />
      <div className="relative z-[1] text-center max-w-screen-md">
        <Badge className="rounded-full border-none">
          <Zap className="fill-current" />
          Ingeniero de producción
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Luis Enrique Villada González
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Máster en dirección de empresas y gerencia de proyectos de ingenería
          con 8 años de experiencia ayudando a empresas a mejorar su estructura,
          aumentar su eficiencia y alinear sus operaciones con los objetivos
          estratégicos.
        </p>
        <Link href="#about" className="cursor-pointer">
          <div className="mt-12 flex items-center justify-center gap-4 cursor-pointer">
            <Button size="lg" className="rounded-full text-base">
              Mira mi trabajo <CircleArrowDown className="ml-2 !h-5.5 !w-5.5" />
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
