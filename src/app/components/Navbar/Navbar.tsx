'use client';

import Link from "next/link";
import React, { useState, useEffect } from "react";

interface Theme {
  id: number,
  name: string;
  fg: string;
  bg: string;
  sbg: string;
  tbg: string;
  br: string;
}

// THEME
const themes: Theme[] = [
  {
    id: 1,
    name: 'void',
    fg: '255, 255, 255',
    bg: '4, 4, 4',
    sbg: '8, 8, 8',
    tbg: '12, 12, 12',
    br: '40, 40, 40',
  },
  {
    id: 2,
    name: 'gruv dark',
    fg: '235, 219, 178',
    bg: '28, 29, 35',
    sbg: '28, 29, 35',
    tbg: '35, 37, 44',
    br: '50, 50, 50',
  },
  {
    id: 3,
    name: 'gruv light',
    fg: '28, 29, 35',
    bg: '235, 219, 178',
    sbg: '225, 208, 168',
    tbg: '225, 204, 158',
    br: '50, 50, 50',
  },
];

export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[1]); // Default to Gruvbox Dark

  // date

  const toggleShowDate = () => {
    setShowDate((prevShowDate) => !prevShowDate);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    // second: "numeric",
    hour12: true,
  }).format(currentDateTime);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(currentDateTime);

  // themes

  useEffect(() => {
    const root = document.documentElement;

    Object.entries(currentTheme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [currentTheme]);

  const switchTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  /**
   * TODO:
   * - store selected theme to localstorage or indexDB
   * - make settings option functional
   */

  return (
    <nav className="flex items-center justify-center my-4 text-base">
      <div className="nav-container w-[60%] rounded-lg px-4 py-2 flex items-center shadow-md justify-between">
        <div className="left">
          <h3>Nikhil</h3>
        </div>
        <div className="right">
          <ul className="flex items-center justify-between gap-x-4">
            <button onClick={toggleShowDate}>
              {showDate ? (
                <>
                  {formattedDate} | {formattedTime}
                </>
              ) : (
                <>
                  {formattedTime}
                </>
              )}
            </button>
            <li>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                >
                  Themes
                </button>
                {isOpen && (
                  <div className="theme-list absolute top-full left-0 mt-2 rounded-md shadow-md">
                    <ul className="p-2">
                      {themes.map((theme) => (
                        <button
                          key={theme.id}
                          onClick={() => switchTheme(theme)}
                          className="p-2 theme text-center w-full whitespace-nowrap my-0.5 rounded-md"
                        >
                          {theme.name}
                        </button>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
            <li>Settings</li>
            <li><Link href={"https://github.com/bonitoflakez/homepage"} target="_blank"><button className="source-link px-2 rounded-md">{"<Source/>"}</button></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
