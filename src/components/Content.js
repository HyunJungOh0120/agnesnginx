import React from 'react';

export default function Content({
  title = 'The Starry Night',
  summary,
  date,
  imgurl,
}) {
  const defaultSummary = `Vincent Van Gogh’s most popular painting, The Starry Night was
        created by Van Gogh at the asylum in Saint-Rémy, where he’d
        committed himself in 1889.`;

  return (
    <>
      <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <img
          className="object-cover w-full h-56 md:h-64 xl:h-80"
          src={imgurl}
          alt=""
        />
        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-4 text-xs text-gray-100">{date || 'Jan 9, 2022'}</p>
          <p className="mb-4 text-lg font-bold text-gray-100">{title}</p>
          <p className="text-sm tracking-wide text-gray-300">
            {summary || defaultSummary}
          </p>
        </div>
      </div>
    </>
  );
}
