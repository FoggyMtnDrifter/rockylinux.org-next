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

type MenuItem = {
  title: string;
  href: string;
};

type NavigationMenuItemListProps = {
  items: MenuItem[];
};

const aboutItems: MenuItem[] = [
  {
    title: "About Rocky Linux",
    href: "/about",
  },
  {
    title: "Community Charter",
    href: "/about/community-charter",
  },
  {
    title: "Sponsors",
    href: "/about/sponsors",
  },
  {
    title: "Partners",
    href: "/about/partners",
  },
];

const resourcesItems: MenuItem[] = [
  {
    title: "Frequently Asked Questions",
    href: "/resources/faq",
  },
  {
    title: "Wiki",
    href: "https://wiki.rockylinux.org",
  },
  {
    title: "Guides & Manuals",
    href: "https://docs.rockylinux.org",
  },
  {
    title: "GPG Key Info",
    href: "/resources/gpg-key-info",
  },
];

const communityItems: MenuItem[] = [
  {
    title: "Forums",
    href: "https://forums.rockylinux.org",
  },
  {
    title: "Mailing Lists",
    href: "https://lists.resf.org",
  },
  {
    title: "Mattermost",
    href: "https://chat.rockylinux.org",
  },
  {
    title: "IRC",
    href: "https://wiki.rockylinux.org/irc/",
  },
  {
    title: "Calendar",
    href: "https://calendar.google.com/calendar/u/0/embed?src=c_2e1oqh6t0i6sqhja5nu9lq8lgo@group.calendar.google.com",
  },
];

const supportItems: MenuItem[] = [
  {
    title: "Support Providers",
    href: "/support/providers",
  },
  {
    title: "Submit Bug",
    href: "https://bugs.rockylinux.org",
  },
];

const contributeItems: MenuItem[] = [
  {
    title: "Contribute",
    href: "https://wiki.rockylinux.org/contributing/",
  },
  {
    title: "Shop",
    href: "/contribute/shop",
  },
  {
    title: "Donate",
    href: "https://rockylinux.z2systems.com/np/clients/rockylinux/donation.jsp",
  },
];

const dropdownItems: { translationString: string; itemName: MenuItem[] }[] = [
  {
    translationString: "categories.about",
    itemName: aboutItems,
  },
  {
    translationString: "categories.resources",
    itemName: resourcesItems,
  },
  {
    translationString: "categories.community",
    itemName: communityItems,
  },
  {
    translationString: "categories.support",
    itemName: supportItems,
  },
  {
    translationString: "categories.contribute",
    itemName: contributeItems,
  },
];

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
