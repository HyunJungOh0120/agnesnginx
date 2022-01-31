import React from 'react';
import Content from './Content';
// import { Link } from 'react-router-dom';

export default function Contents() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className=" mb-5 font-head text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          Recent Posts
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        <Content imgurl="https://images.pexels.com/photos/268976/pexels-photo-268976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <Content imgurl="https://images.pexels.com/photos/5965668/pexels-photo-5965668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <Content imgurl="https://images.pexels.com/photos/38012/pexels-photo-38012.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
        <Content imgurl="https://images.pexels.com/photos/5412/water-blue-ocean.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      </div>
    </div>
  );
}
