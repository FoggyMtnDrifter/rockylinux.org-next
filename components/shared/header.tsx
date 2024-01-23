"use client";

import React from "react";
import { DesktopNavigation } from "./desktop-navigation";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "./dark-mode-toggle";

export default function Header() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center">
      <a className="flex items-center" href="#">
        <img src="/logo.svg" className="h-8 mr-2" />
        <h1 className="font-bold text-2xl font-display whitespace-nowrap">
          Rocky <span className="font-normal whitespace-nowrap">Linux</span>
        </h1>
      </a>
      <div className="flex w-full justify-center">
        <DesktopNavigation />
      </div>
      <div className="hidden ml-auto w-[150px] lg:flex">
        <ModeToggle />
        <Button className="ml-2">Get Started</Button>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden p-2" size="icon" variant="outline">
            <HamburgerMenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <a href="#">
            {/* <MountainIcon className="h-6 w-6" /> */}
            <span className="sr-only">Acme Inc</span>
          </a>
          <div className="grid gap-2 py-6">
            <a
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="#"
            >
              About
            </a>
            <a
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="#"
            >
              Services
            </a>
            <a
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="#"
            >
              Contact
            </a>
          </div>
          <div className="mt-auto">
            <Button className="w-full">Get Started</Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
