import React from "react";

function Image({ imgpath }) {
  return (
    <>
      <section className="relative w-full">
        {/* Image */}
        <img
          src={imgpath}
          alt="Beautiful Landscape"
          className="w-full h-[300px] md:h-[500px] object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-6">
          <h2 className="text-3xl md:text-5xl font-bold">Teen Patti Gold</h2>
          <p className="text-lg md:text-xl mt-2">
            Play Teen Patti Gold and win real money.    
          </p>
          {/* <button className="mt-4 bg-blue-500 px-6 py-2 rounded-lg text-white hover:bg-blue-600 transition">
            Learn More...
          </button> */}
        </div>
      </section>
    </>
  );
}

export default Image;
