import React from 'react';

function NavLinkMobile({ pageName = 'Home' }) {
  return (
    <li>
      <a
        href="/"
        aria-label="Our product"
        title="Our product"
        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
      >
        {pageName}
      </a>
    </li>
  );
}

export default NavLinkMobile;
