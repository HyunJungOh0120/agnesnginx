import React from 'react';
import saying1 from './../images/saying1.jpg';
import saying2 from './../images/saying2.jpg';

export default function Sayings() {
  return (
    <>
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="flex flex-col  w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  인생을 즐겨라
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Seize The Day
                <br className="hidden md:block" />{' '}
                <span className="inline-block text-deep-purple-accent-400">
                  La vie en rose
                </span>
              </h2>
            </div>
            <div className="flex flex-col items-center md:flex-row"></div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto bg-center  bg-fixed lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover sm:w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src={saying1}
            alt=""
          />
        </div>
      </div>

      <div className="relative flex flex-col py-16 text-left lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 left-0 w-full max-w-xl px-0 mx-auto bg-fixed bg-center bg-cover lg:pl-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover bg-fixed w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src={saying2}
            alt=""
          />
        </div>
        <div className="flex flex-col items-end w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 pl-16 flex flex-col justify-items-start lg:my-40 lg:max-w-lg lg:pr-5 sm:mt-12">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-serif text-3xl font-bold tracking-tight  text-gray-900 sm:text-4xl sm:leading-none">
                Vous etes une perle rare
                <br className="hidden md:block" />
              </h2>
              <div>
                <p className="inline-block pr-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Par une belle nuit Étoilée
                </p>
              </div>
              <p className="text-base text-gray-700 md:text-sm">
                Il n'y a qu'un bonheur dans la vie, c'est d'aimer et d'être
                aime.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              {/* <Link
                to="/about"
                aria-label=""
                about
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Read more
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
