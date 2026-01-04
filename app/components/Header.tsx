"use client";

import { useState } from "react";
import Link from "next/link";
import { MENU_ITEMS } from "../config/menu.config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="bg-white rounded-lg shadow-md xl:p-4">
      <nav className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary">
            velixolabs
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden space-x-6 md:flex">
            {MENU_ITEMS.map((item) => (
              <li key={item.label} className="relative group">
                {item.children ? (
                  <>
                    <span className="font-medium text-gray-700 cursor-pointer hover:text-blue-600">
                      {item.label}
                    </span>

                    {/* Dropdown */}
                    <ul className="absolute left-0 invisible w-56 mt-2 transition-all duration-200 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className="font-medium text-gray-700 hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <ul className="pb-4 space-y-2 md:hidden">
            {MENU_ITEMS.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenMenu(openMenu === item.label ? null : item.label)
                      }
                      className="flex justify-between w-full font-semibold"
                    >
                      {item.label}
                      <span>{openMenu === item.label ? "−" : "+"}</span>
                    </button>

                    {openMenu === item.label && (
                      <ul className="mt-2 ml-4 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.path}
                              onClick={() => {
                                setOpen(false);
                                setOpenMenu(null);
                              }}
                              className="block text-gray-600 hover:text-blue-600"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.path}
                    onClick={() => {
                      setOpen(false);
                      setOpenMenu(null);
                    }}
                    className="block text-gray-700 hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
