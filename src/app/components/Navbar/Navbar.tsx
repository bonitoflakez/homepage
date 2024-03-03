'use client';

import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [showDate, setShowDate] = useState(false);

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
            <li>Themes</li>
            <li>Settings</li>
            <li><Link href={"https://github.com/bonitoflakez/homepage"} target="_blank"><button className="source-link px-2 rounded-md">{"<Source/>"}</button></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
