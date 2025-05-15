import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 bg-background border dark:border-slate-700/70 max-w-screen-md mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-3">
        <Logo width={80} height={30} />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2">
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

          <div className="md:hidden flex gap-4 items-center">
            <Link href="mailto:lvilladagonzalez0@gmail.com" target="_blank">
              <Button
                variant="outline"
                className="sm:inline-flex rounded-full shadow-none cursor-pointer"
                size="icon"
              >
                <Mail />
              </Button>
            </Link>

            <Link href="https://wa.me/573012707999" target="_blank">
              <Button
                variant="outline"
                className="sm:inline-flex rounded-full shadow-none cursor-pointer"
                size="icon"
              >
                <MessageCircle />
              </Button>
            </Link>
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
