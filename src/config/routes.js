import React from "react";
export const authRoute = [
  {
    key: "register",
    path: "/register",
    component: React.lazy(() => import("../pages/auth/register")),
  },
  {
    key: "login",
    path: "/login",
    component: React.lazy(() => import("../pages/auth/login")),
  },
];

export const protedRoutes = [
  {
    key: "home",
    path: "/",
    role: ["admin", "user"],
    component: React.lazy(() => import("../pages/home")),
  },
  {
    key: "books",
    path: "/books",
    role: ["admin", "user"],
    component: React.lazy(() => import("../pages/books")),
  },
  {
    key: "profile",
    path: "/profile",
    role: ["admin", "user"],
    component: React.lazy(() => import("../pages/private/profile")),
  },
  {
    key: "security",
    path: "/security",
    role: ["admin", "user"],
    component: React.lazy(() => import("../pages/private/profile/security")),
  },
  {
    key: "setting",
    path: "/setting",
    role: ["admin", " user"],
    component: React.lazy(() => import("../pages/private/profile/setting")),
  },
  {
    key: "create-book",
    path: "/create-book",
    role: ["admin"],
    component: React.lazy(() => import("../pages/private/create/Create-book")),
  },
  {
    key: "create-author",
    path: "/create-author",
    role: ["admin"],
    component: React.lazy(() =>
      import("../pages/private/create/Creata-author")
    ),
  },
];
