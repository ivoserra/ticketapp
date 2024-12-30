"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MainNavLinks = () => {
  const links = [
    { label: "Dashboard", path: "/", className: "navbar-link" },
    { label: "Tickets", path: "/tickets", className: "navbar-link" },
    { label: "Users", path: "/users", className: "navbar-link" },
  ];

    const currentPath = usePathname();
    // console.log('currentPath', currentPath);

  return (
    <div className="flex items-center gap-2">
      {links.map((item, index) => {
        return (
            <Link key={item.label} href={item.path} className={`navbar-link ${currentPath === item.path && "cursor-default text-primary/70 hover:text-primary/60"}`}>
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

export default MainNavLinks;
