"use client";
import React, { useState } from "react";
import { Home, Calendar, Heart, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const tabs = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Booked", icon: Calendar, path: "/booked" },
    { name: "Preferiti", icon: Heart, path: "/preferiti" },
    { name: "Impostazioni", icon: Settings, path: "/impostazioni" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-inner flex justify-around py-2">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.path;
        return (
          <Link
            key={tab.name}
            to={tab.path}
            onClick={() => setActiveTab(tab.path)}
            className={`flex flex-col items-center text-sm ${
              isActive ? "text-[#045B5A]" : "text-gray-500"
            }`}
          >
            <Icon className="w-6 h-6 mb-1" />
            {tab.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
