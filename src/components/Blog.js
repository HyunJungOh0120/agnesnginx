import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <img
          src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="object-cover w-full h-64"
          alt=""
        />
        <div className="p-5 border border-t-0">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <Link
              to="/"
              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
              aria-label="Category"
              title="traveling"
            >
              traveling
            </Link>
            <span className="text-gray-600">— 28 Dec 2020</span>
          </p>
          <a
            href="/"
            aria-label="Category"
            title="Simple is better"
            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            Simple is better
          </a>
          <p className="mb-2 text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit sed quia
            consequuntur magni voluptatem doloremque.
          </p>
          <Link
            to="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </Link>
        </div>
      </div>
    </>
  );
}
