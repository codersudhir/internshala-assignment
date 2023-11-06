import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-20 bg-indigo-100 text-gray-600">
      <ul className="flex items-center justify-between h-full px-10">
       
        <Link to="/">
          <li> Work Container </li>
        </Link>
       
      </ul>
    </nav>
  );
}
