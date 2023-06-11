const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 text-white bg-[#14213D]">
      <div className="flex items-center">
        {/* <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-2" /> */}
        <h1 className="text-xl font-semibold text-black">FlexTalks</h1>
      </div>
      <ul className="flex space-x-4">
        <li>
          <a href="#home" className="text-black hover:text-gray-200">
            Home
          </a>
        </li>
        <li>
          <a href="#courses" className="text-black hover:text-gray-200">
            Courses
          </a>
        </li>
        <li>
          <a href="#about" className="text-black hover:text-gray-200">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="text-black hover:text-gray-200">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
