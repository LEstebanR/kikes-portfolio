import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Logo } from "./navbar/logo";
import { Button } from "./ui/button";
import { Mail, MessageCircle } from "lucide-react";

const footerLinks = [
  {
    title: "Sobre mí",
    href: "#about",
  },
  {
    title: "Experiencia",
    href: "#experience",
  },
  {
    title: "Proyectos",
    href: "#projects",
  },
  {
    title: "Educación",
    href: "#education",
  },
];

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="max-w-screen-md mx-auto">
        <div className="py-12 flex flex-col justify-start items-center">
          {/* Logo */}
          <Logo width={320} height={90} />

          <ul className="mt-6 flex items-center gap-4 flex-wrap">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Luis Villada. Todos los derechos
            reservados.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link href="mailto:lvilladagonzalez0@gmail.com" target="_blank">
              <Button
                variant="outline"
                className="hidden sm:inline-flex rounded-full shadow-none cursor-pointer"
                size="icon"
              >
                <Mail />
              </Button>
            </Link>

            <Link href="https://wa.me/573012707999" target="_blank">
              <Button
                variant="outline"
                className="hidden sm:inline-flex rounded-full shadow-none cursor-pointer"
                size="icon"
              >
                <MessageCircle />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
