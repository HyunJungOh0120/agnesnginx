import React from 'react';
import { Link } from 'react-router-dom';
import StackGrid from 'react-stack-grid';

const photos = [
  {
    src: require('./../images/travel/01.jpg'),
    width: 3,
    height: 4,
  },

  {
    src: require('./../images/travel/02.jpg'),
    width: 3,
    height: 4,
    page: 'about',
  },
  {
    src: require('./../images/travel/03.jpg'),
    width: 3,
    height: 4,
    page: 'new zealand, Winter, 2019',
  },
  {
    src: require('./../images/travel/04.jpg'),
    width: 3,
    height: 4,
  },
  {
    src: require('./../images/travel/05.jpg'),
    width: 3,
    height: 4,
  },
  {
    src: require('./../images/travel/06.jpg'),
    width: 3,
    height: 4,
  },
  {
    src: require('./../images/travel/07.jpg'),
    width: 4,
    height: 3,
  },
  {
    src: require('./../images/travel/08.jpg'),
    width: 3,
    height: 4,
  },
  {
    src: require('./../images/travel/09.jpg'),
    width: 4,
    height: 3,
  },
  {
    src: require('./../images/travel/10.jpg'),
    width: 4,
    height: 3,
  },
  {
    src: require('./../images/travel/11.jpg'),
    width: 3,
    height: 4,
  },

  {
    src: require('./../images/travel/12.jpg'),
    width: 4,
    height: 3,
  },

  {
    src: require('./../images/travel/13.jpg'),
    width: 3,
    height: 4,
  },
  {
    src: require('./../images/travel/14.jpg'),
    height: 3,
  },
  {
    src: require('./../images/travel/15.jpg'),
    width: 4,
    height: 3,
  },
  {
    src: require('./../images/travel/16.jpg'),
    width: 4,
    height: 3,
  },
  {
    src: require('./../images/travel/17.jpg'),
    width: 4,
    height: 3,
  },
];

export default function Board() {
  const firstWordToUpperCase = (word) => word[0].toUpperCase() + word.slice(1);
  const withPage = (img, idx) => (
    <Link to={`/${img.linkto}`}>
      <div className="relative  rounded m-2   ">
        <img
          src={img.src}
          alt="img"
          key={idx}
          style={{
            maxWidth: '100%',
            cursor: 'pointer',
          }}
        />
        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 flex items-center justify-center bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className=" z-100 font-body text-center text-sm  text-slate-200  ">
            {firstWordToUpperCase(img.page)}
          </p>
        </div>
      </div>
    </Link>
  );

  return (
    <>
      <StackGrid columnWidth={410} duration={0} monitorImagesLoaded={true}>
        {photos.map((img, idx) => {
          if (img.page) {
            if (img.page === 'about') {
              img.linkto = img.page;
              return withPage(img, idx);
            } else {
              img.page = img.page.replaceAll(', ', '_');
              img.linkto = `moments/${img.page}`;
              console.log(img.linkto);
              return withPage(img, idx);
            }
          } else {
            return (
              <div className="m-2">
                <img
                  src={img.src}
                  alt="img"
                  key={idx}
                  style={{
                    maxWidth: '100%',
                  }}
                />
              </div>
            );
          }
        })}
      </StackGrid>
    </>
  );
}
