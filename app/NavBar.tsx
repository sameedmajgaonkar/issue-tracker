"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import classNames from "classnames";
const NavBar = () => {
  const pathName = usePathname();

  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];
  return (
    <NavigationMenu className="px-2 justify-start border-b min-w-full bg-accent text-3xl">
      <NavigationMenuList>
        <NavigationMenuItem>
          <AiFillBug />
        </NavigationMenuItem>
        {links.map(({ href, label }) => (
          <NavigationMenuItem key={href}>
            <NavigationMenuLink asChild>
              <Link
                href={href}
                className={classNames(
                  "text-neutral-500 hover:text-neutral-800 transition-colors font-semibold antialiased",
                  {
                    "text-neutral-950": href === pathName,
                  }
                )}
              >
                {label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
