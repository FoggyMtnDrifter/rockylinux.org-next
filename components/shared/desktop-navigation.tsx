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

const components: { title: string; href: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
  },
];

const aboutItems: { title: string; href: string }[] = [
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

const resourcesItems: { title: string; href: string }[] = [
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

const communityItems: { title: string; href: string }[] = [
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

const supportItems: { title: string; href: string }[] = [
  {
    title: "Support Providers",
    href: "/support/providers",
  },
  {
    title: "Submit Bug",
    href: "https://bugs.rockylinux.org",
  },
];

const contributeItems: { title: string; href: string }[] = [
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
        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              {t("categories.about")}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[250px] p-4">
                {aboutItems.map((item) => (
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
                      <div className="text-sm font-medium leading-none">
                        {item.title}
                      </div>
                    </a>
                  </NavigationMenuLink>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              {t("categories.resources")}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[250px] p-4">
                {resourcesItems.map((item) => (
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
                      <div className="text-sm font-medium leading-none">
                        {item.title}
                      </div>
                    </a>
                  </NavigationMenuLink>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              {t("categories.community")}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[250px] p-4">
                {communityItems.map((item) => (
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
                      <div className="text-sm font-medium leading-none">
                        {item.title}
                      </div>
                    </a>
                  </NavigationMenuLink>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              {t("categories.support")}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[250px] p-4">
                {supportItems.map((item) => (
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
                      <div className="text-sm font-medium leading-none">
                        {item.title}
                      </div>
                    </a>
                  </NavigationMenuLink>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              {t("categories.contribute")}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[250px] p-4">
                {contributeItems.map((item) => (
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
                      <div className="text-sm font-medium leading-none">
                        {item.title}
                      </div>
                    </a>
                  </NavigationMenuLink>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
