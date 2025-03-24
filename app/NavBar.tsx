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
import { useSession, signIn, signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

const NavBar = () => {
  const { setTheme, theme } = useTheme();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/">
            <AiFillBug className="text-xl md:text-3xl" />
          </Link>
        </NavigationMenuItem>
        <NavLinks />
      </NavigationMenuList>
      <NavigationMenuList>
        <NavigationMenuItem>
          <AuthStatus />
        </NavigationMenuItem>
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

const NavLinks = () => {
  const pathName = usePathname();
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];

  return links.map(({ href, label }) => (
    <NavigationMenuItem key={href}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={classNames(
            "text-muted-foreground hover:text-primary transition-colors antialiased",
            {
              "text-primary": href === pathName,
            }
          )}
        >
          {label}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  ));
};

const AuthStatus = () => {
  const { data: session, status } = useSession();

  if (status === "loading")
    return <Skeleton className="h-9 w-16 rounded-4xl bg-neutral-500" />;

  if (status === "unauthenticated")
    return (
      <Button variant="outline" onClick={() => signIn()}>
        Login
      </Button>
    );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        <Avatar>
          <AvatarImage
            src={session!.user!.image!}
            alt="avatar"
            referrerPolicy="no-referrer"
          />
          <AvatarFallback delayMs={3000}>?</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-3">
        <DropdownMenuLabel>{session!.user!.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
          <DropdownMenuLabel>Logout</DropdownMenuLabel>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavBar;
