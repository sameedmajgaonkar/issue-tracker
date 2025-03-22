"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import classNames from "classnames";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { AiFillBug } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const pathName = usePathname();
  const { setTheme, theme } = useTheme();

  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];

  return (
    <NavigationMenu className="px-2 justify-start border-b min-w-full bg-accent text-3xl">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/">
            <AiFillBug />
          </Link>
        </NavigationMenuItem>
        {links.map(({ href, label }) => (
          <NavigationMenuItem key={href}>
            <NavigationMenuLink asChild>
              <Link
                href={href}
                className={classNames(
                  "text-muted-foreground hover:text-primary transition-colors font-semibold antialiased",
                  {
                    "text-primary": href === pathName,
                  }
                )}
              >
                {label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <Button
            variant="ghost"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
