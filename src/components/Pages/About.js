import React from 'react';

export default function About() {
  return (
    <div className="p-20 m-10 mt-0 bg-stone-100	flex space-x-4">
      <div className="w-6/12 saturate-150 ">
        <img
          src={require('./../../images/about.jpg')}
          alt="portrait"
          className="w-11/12"
        />
      </div>
      <div className="flex flex-col items-start justify-center  w-6/12">
        <h1 className="text-4xl font-head font-bold mb-10">
          Hi! I'm Hyun Jung, Agnes.
        </h1>
        <p className="font-body">
          I'm a Mommy of 2 adorable Maine coon cats 🐈 🐈 🧡
          <br />
          Love 🍷 and 🍺
          <br />
          See you in Singapore
        </p>
      </div>
    </div>
  );
}
