import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Button to Open Drawer */}
      <button
        // className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        className="w-8 h-8 rounded-full border text-white flex items-center justify-center"
        onClick={() => setIsOpen(true)}
      >
          <CiMenuBurger size={20} />
          </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-52 bg-white shadow-lg transform transition-transform z-50 p-4 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-600" onClick={() => setIsOpen(false)}>
          <IoMdClose size={24} />
        </button>

        {/* Drawer Content */}
        {/* <h2 className="text-xl font-semibold">Drawer Content</h2>
        <p className="text-gray-600 mt-2">This is a right-side drawer using Tailwind CSS.</p> */}
        <div className="mt-8">
        <ol className="text-center font-bold">
          <li >
            About
          </li>
          <li className="mt-4">
            Skills
          </li>
          <li className="mt-4">
            Projects
          </li>
          <li className="mt-4">
            Contact
          </li>
        </ol>
        </div>
        
      </div>
    </div>
  );
};

export default Drawer;
