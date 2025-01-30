import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white p-4 flex flex-col items-center">
        <img src="./src/assets/footer.jpg" alt="Logo" className="w-16 h-16 mb-2" />
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TheTeenPattiGold. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
