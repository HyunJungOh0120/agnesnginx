import React from 'react';
// import { Link } from 'react-router-dom';
import StackGrid from 'react-stack-grid';

const pictures = [
  require('./../images/cats/01.jpg'),
  require('./../images/cats/02.jpg'),
  require('./../images/cats/03.jpg'),
  require('./../images/cats/04.jpg'),
  require('./../images/cats/05.jpg'),
  require('./../images/cats/06.jpg'),
  require('./../images/cats/07.jpg'),
  require('./../images/cats/08.jpg'),
  require('./../images/cats/09.jpg'),
  require('./../images/cats/10.jpg'),
  require('./../images/cats/11.jpg'),
  require('./../images/cats/12.jpg'),
  require('./../images/cats/13.jpg'),
  require('./../images/cats/14.gif'),
  require('./../images/cats/15.jpg'),
];

export default function Gallery() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6  md:mb-8">
        <h2 className=" mb-5 font-head text-3xl font-bold tracking-tight text-center text-gray-800 sm:text-4xl sm:leading-none md:mb-6 group">
          Always Makes Me Smile
        </h2>
      </div>
      <StackGrid
        columnWidth={230}
        duration={0}
        gutterHeight={10}
        gutterWidth={10}
        monitorImagesLoaded={true}
      >
        {pictures.map((img, idx) => {
          // return <GalleryPic imgUrl={img} key={idx} />;
          return (
            <div className="m-0" key={idx}>
              <img
                src={img}
                alt="img"
                style={{
                  maxWidth: '100%',
                }}
              />
            </div>
          );
        })}
      </StackGrid>
    </div>
  );
}
