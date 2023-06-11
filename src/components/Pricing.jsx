import figure from "../assets/figure.png";

const PricingSection = () => {
  return (
    <section className="py-16 bg-[#E5E5E5]">
      <div className="max-w-4xl px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-semibold text-center">Pricing</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center items-center">
          <div className="p-6 bg-white border-[1px] border-black border-[1px] border-black">
            <h3 className="mb-4 text-lg font-semibold">Basic</h3>
            <p className="mb-4 text-gray-600 italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="mb-4 text-gray-600 italic">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="px-4 py-2 font-semibold text-black bg-[#FCA311]  hover:bg-blue-600 hover:text-white border-[1px] border-black">
              Get Started
            </button>
          </div>
          <img src={figure} className="mx-auto w-16 md:-rotate-90" alt />
          <div className="p-6 bg-white border-[1px] border-black border-[1px] border-black">
            <h3 className="mb-4 text-lg font-semibold">Standard</h3>
            <p className="mb-4 text-gray-600 italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="mb-4 text-gray-600 italic">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="px-4 py-2 font-semibold text-black bg-[#FCA311]  hover:bg-blue-600 hover:text-white border-[1px] border-black">
              Get Started
            </button>
          </div>
          <img src={figure} className="mx-auto w-16 md:-rotate-90" alt />
          <div className="p-6 bg-white border-[1px] border-black border-[1px] border-black">
            <h3 className="mb-4 text-lg font-semibold">Premium</h3>
            <p className="mb-4 text-gray-600 italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="mb-4 text-gray-600 italic">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="px-4 py-2 font-semibold text-black bg-[#FCA311]  hover:bg-blue-600 hover:text-white border-[1px] border-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
