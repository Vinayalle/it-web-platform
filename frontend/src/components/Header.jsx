import React, { useState } from "react";
import { MENU_ITEMS } from "../config/menu.config";
import { Link } from "react-router-dom";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);


  return (
    <header className="bg-white rounded-lg shadow-md xl:p-4">
      <nav className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-primary font-heading">
            velixolabs
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden space-x-6 md:flex">
            {MENU_ITEMS.map((item) => (
              <li key={item.label} className="relative group">
                {item.Children ? (
                  <>
                    <span className="font-medium text-gray-700 cursor-pointer hover:text-blue-600">
                      {item.label}
                    </span>

                    {/* Dropdown */}
                    <ul className="absolute left-0 invisible w-48 mt-2 transition-all duration-200 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible">
                      {item.Children.map((child) => (
                        <li key={child.label}>
                          <Link
                            to={child.path}
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
                    to={item.path}
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
            className="text-gray-700 md:hidden focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
       {open && (
  <ul className="pb-4 space-y-2 md:hidden">
    {MENU_ITEMS.map((item) => (
      <li key={item.label}>
        {item.Children ? (
          <>
            {/* Parent */}
            <button
              onClick={() =>
                setOpenMenu(openMenu === item.label ? null : item.label)
              }
              className="flex items-center justify-between w-full font-semibold text-gray-700"
            >
              {item.label}
              <span className="text-sm">
                {openMenu === item.label ? "−" : "+"}
              </span>
            </button>

            {/* Children (only when parent is open) */}
            {openMenu === item.label && (
              <ul className="mt-2 ml-4 space-y-1">
                {item.Children.map((child) => (
                  <li key={child.label}>
                    <Link
                      to={child.path}
                      onClick={() => {
                        setOpen(false);
                        setOpenMenu(null);
                      }}
                      className="block text-muted hover:text-blue-600"
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
            to={item.path}
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
};
