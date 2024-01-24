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
import { useTranslate } from "@tolgee/react";
import dropdownItems from "@/data/nav/dropdown-items.json";

type MenuItem = {
  title: string;
  href: string;
};

type NavigationMenuItemListProps = {
  items: MenuItem[];
};

export function DesktopNavigation() {
  const { t } = useTranslate();

  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/news" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t("categories.news")}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {dropdownItems.map((item) => (
          <NavigationMenu key={item.translationString}>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                {t(item.translationString)}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuItemList items={item.itemName} />
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenu>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function NavigationMenuItemList({ items }: NavigationMenuItemListProps) {
  return (
    <ul className="w-[250px] p-4">
      {items.map((item) => (
        <NavigationMenuLink
          key={item.title}
          title={item.title}
          href={item.href}
        >
          <a
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            )}
          >
            <div className="text-sm font-medium leading-none">{item.title}</div>
          </a>
        </NavigationMenuLink>
      ))}
    </ul>
  );
}
