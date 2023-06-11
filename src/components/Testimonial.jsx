/* eslint-disable react/no-unescaped-entities */
const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-200 border-[1px] border-black">
      <div className="max-w-4xl px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-semibold text-center">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white ">
            <p className="mb-4 text-gray-600 italic">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fringilla lorem vitae tellus cursus, a commodo risus interdum."
            </p>
            <h4 className="text-lg font-semibold">John Doe</h4>
            <p className="text-gray-500">CEO, Company Name</p>
          </div>
          <div className="p-6 bg-white ">
            <p className="mb-4 text-gray-600 italic">
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat."
            </p>
            <h4 className="text-lg font-semibold">Jane Smith</h4>
            <p className="text-gray-500">Marketing Manager, Company Name</p>
          </div>
          <div className="p-6 bg-white ">
            <p className="mb-4 text-gray-600 italic">
              "Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur."
            </p>
            <h4 className="text-lg font-semibold">Alex Johnson</h4>
            <p className="text-gray-500">Designer, Company Name</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
