import { Children } from "react";

export const MENU_ITEMS = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Services",
    Children: [
      {
        label: "Web Development",
        path: "/services/web-development",
      },
      {
        label: "Backend & API",
        path: "/services/backend-api",
      },
      {
        label: "Cloud & DevOps",
        path: "/services/cloud-devops",
      },
      {
        label: "Startup MVP & SaaS",
        path: "/services/startup-mvp-saas",
      },
    ],
  },
  {
    label: "Case Studies",
    path: "/case-studies",
  },
  {
    label: "Technologies",
    path: "/technologies",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Blog",
    path: "/blogs",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];
