"use client";

import React from "react";
import { DesktopNavigation } from "./desktop-navigation";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { HamburgerMenuIcon, DownloadIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "./dark-mode-toggle";
import HeaderLogo from "./header-logo";
import { MobileNavigation } from "./mobile-navigation";

export default function Header() {
  return (
    <header>
      <nav
        className="mx-auto flex items-center justify-between py-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Rocky Linux</span>
            <HeaderLogo />
          </a>
        </div>
        <MobileNavigation />
        <DesktopNavigation />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ModeToggle />
          <a href="/download">
            <Button className="p-5 ml-2">
              Download
              <span aria-hidden="true" className="ml-2">
                &rarr;
              </span>
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
}
