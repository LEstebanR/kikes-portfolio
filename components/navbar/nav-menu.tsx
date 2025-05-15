import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

interface NavMenuProps extends NavigationMenuProps {
  onLinkClick?: () => void;
}

export const NavMenu = ({ className, onLinkClick, ...props }: NavMenuProps) => (
  <NavigationMenu
    className={cn("data-[orientation=vertical]:items-start", className)}
    {...props}
  >
    <NavigationMenuList className="gap-1 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#about" onClick={onLinkClick}>
            Sobre mí
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#experience" onClick={onLinkClick}>
            Experiencia
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#projects" onClick={onLinkClick}>
            Proyectos
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#education" onClick={onLinkClick}>
            Educación
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
