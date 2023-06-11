const Footer = () => {
  const currentDate = new Date();

  return (
    <footer className="py-4 bg-[#14213D] text-center">
      <div className="container mx-auto px-4">
        <p className="text-white">FlexTalks &copy;</p>
        <p className="text-white italic">
          {currentDate.toLocaleDateString()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
