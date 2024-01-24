"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useTranslate } from "@tolgee/react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import dropdownItems from "@/data/nav/dropdown-items.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ModeToggle } from "./dark-mode-toggle";
import HeaderLogo from "./header-logo";

type MenuItem = {
  title: string;
  href: string;
};

type NavigationMenuItemListProps = {
  items: MenuItem[];
};

export function MobileNavigation() {
  const { t } = useTranslate();

  return (
    <div className="flex lg:hidden">
      <Sheet>
        <ModeToggle />
        <SheetTrigger asChild>
          <Button variant="outline" className="py-5 px-3 ml-2">
            <span className="sr-only">Open Main Menu</span>
            <HamburgerMenuIcon className="h-6 w-6" aria-hidden="true" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full">
          <a href="/">
            <HeaderLogo />
            <span className="sr-only">Rocky Linux</span>
          </a>
          <Accordion type="single" collapsible>
            <a
              className="flex w-full items-center py-4 focus:text-primary border-b text-sm hover:underline"
              href="/news"
            >
              News
            </a>
            {dropdownItems.map((item) => (
              <AccordionItem value={item.translationString}>
                <AccordionTrigger>{t(item.translationString)}</AccordionTrigger>
                <AccordionContent>
                  <NavigationMenuItemList items={item.itemName} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-auto">
            <a href="/download">
              <Button className="p-5 w-full mt-4">
                Download
                <span aria-hidden="true" className="ml-2">
                  &rarr;
                </span>
              </Button>
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function NavigationMenuItemList({ items }: NavigationMenuItemListProps) {
  return (
    <>
      {items.map((item) => (
        <a
          className="flex w-full items-center py-2 focus:text-primary hover:underline"
          href={item.href}
        >
          {item.title}
        </a>
      ))}
    </>
  );
}
