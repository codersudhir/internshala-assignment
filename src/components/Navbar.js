import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-20 bg-indigo-100 text-gray-600">
      <ul className="flex items-center justify-between h-full px-10 border-solid border-2 border-indigo-600">
       
        <Link to="/">
          <li> Work Container </li>
        </Link>
        <div className="flex ">
        <Link to="/">
          <li> FAQ </li>
        </Link>
        <Link to="/">
          <li className="mx-2 px-1 border-2 border-indigo-600 rounded-full"> Sudhir </li>
        </Link>
        </div>
   
      </ul>
      
    </nav>
  );
}
