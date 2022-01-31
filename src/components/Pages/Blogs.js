import Blog from '../Blog';

export default function Blogs() {
  return (
    <>
      <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-4 lg:py-12 flex flex-col mb-2 lg:justify-between lg:flex-row ">
        <h2 className=" font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none  group">
          Blog
        </h2>
      </div>
      <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-4 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <Blog />
        </div>
      </div>
    </>
  );
}
