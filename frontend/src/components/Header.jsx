import React, { useState } from "react";
import { MENU_ITEMS } from "../config/menu.config";
import { Link } from "react-router-dom";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);


  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-primary font-heading">
            velixolabs
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {MENU_ITEMS.map((item) => (
              <li key={item.label} className="relative group">
                {item.Children ? (
                  <>
                    <span className="cursor-pointer font-medium text-gray-700 hover:text-blue-600">
                      {item.label}
                    </span>

                    {/* Dropdown */}
                    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
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
            className="md:hidden text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
       {open && (
  <ul className="md:hidden pb-4 space-y-2">
    {MENU_ITEMS.map((item) => (
      <li key={item.label}>
        {item.Children ? (
          <>
            {/* Parent */}
            <button
              onClick={() =>
                setOpenMenu(openMenu === item.label ? null : item.label)
              }
              className="w-full flex justify-between items-center font-semibold text-gray-700"
            >
              {item.label}
              <span className="text-sm">
                {openMenu === item.label ? "−" : "+"}
              </span>
            </button>

            {/* Children (only when parent is open) */}
            {openMenu === item.label && (
              <ul className="ml-4 mt-2 space-y-1">
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
