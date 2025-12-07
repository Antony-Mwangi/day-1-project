"use client";

import Link from "next/link";
import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link href="/" className="logo">CampusConnect</Link>
      </div>

      <div className="nav-right">
        <button
          className="menu-btn"
          onClick={() => setShowMenu(!showMenu)}
        >
          ☰
        </button>

        <ul className={`nav-links ${showMenu ? "show" : ""}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/departments">Departments</Link></li>
          <li><Link href="/news">News</Link></li>
          <li><Link href="/map">Campus Map</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
