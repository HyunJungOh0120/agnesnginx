import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLink({ pageName = 'Home' }) {
  return (
    <li>
      <Link
        to={pageName.toLowerCase()}
        className="font-body text-sm tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
      >
        {pageName}
      </Link>
    </li>
  );
}
