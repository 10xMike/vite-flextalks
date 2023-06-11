const Hero = () => {
  return (
    <section className="py-16 text-black bg-[#FCA311]">
      <div className="max-w-6xl px-4 mx-auto md:grid md:grid-cols-2 md:gap-8 items-center">
        <div className="md:col-span-1 my-6">
          <img
            src="https://images.pexels.com/photos/3184359/pexels-photo-3184359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Instructor"
            className="object-cover mx-auto md:mx-0 rounded-md shadow-green-400 shadow-[8px_8px_0_0]"
          />
        </div>
        <div className="md:col-span-1">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Learn English with
            <br />
            Professional Instructors
          </h1>
          <p className="mb-6 text-lg italic">
            Unlock your potential and achieve fluency in English. Our
            experienced instructors are here to guide you every step of the way.
          </p>
          <button className="px-6 py-2 font-semibold text-black bg-white hover:bg-[#FFFFFF] border-[1px] border-black">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
