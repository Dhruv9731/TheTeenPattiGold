import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white p-4 flex flex-col items-center mt-3">
        <div className="flex flex-row gap-7 justify-center items-center">
          <img
            src="./src/assets/Photos/fot1.png"
            alt="Logo"
            className="w-1/5"
          />
          <img
            src="./src/assets/Photos/fot2.png"

            alt="Logo"
            className="w-1/5"
            
          />
          <img
            src="./src/assets/Photos/fot 1.png"

            alt="Logo"
            className="w-1/5"
          />
          <img
            src="./src/assets/Photos/3.jpg"

            alt="Logo"
            className="w-1/5"
          />
        </div>
        <p className=" font-semibold mt-3">

          &copy; {new Date().getFullYear()} TheTeenPattiGold. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
