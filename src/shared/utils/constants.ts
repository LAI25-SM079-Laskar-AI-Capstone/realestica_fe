// src/constants/routes.ts

export type AppRoute = {
  name: string;
  path: string;
  iconClassName?: string;
  showInFooter?: boolean;
};

export const featureRoutes: AppRoute[] = [
  {
    name: "Cari Properti",
    path: "/",
    iconClassName: "bxr bx-home-alt-3",
  },
  {
    name: "Tren Pasar",
    path: "/market",
    iconClassName: "bxr bx-trending-up",
  },
];

export const additionalRoutes: AppRoute[] = [
  {
    name: "tentang kami",
    path: "/about",
    iconClassName: "bx  bx-community",
  },
  {
    name: "hubungi kami",
    path: "/contact",
    iconClassName: "bx  bx-contact-book",
  },
];

export const allRoutes = [...featureRoutes, ...additionalRoutes];
