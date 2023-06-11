const Contact = () => {
  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center">Contact Us</h2>
        <div className="flex flex-col items-center lg:flex-row">
          <div className="lg:w-1/2">
            <p className="mb-6">
              If you have any questions or inquiries, feel free to reach out to
              us using the contact information provided below:
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-bold">Email:</h3>
              <p>info@englishcourses.com</p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-bold">Phone:</h3>
              <p>+1 (123) 456-7890</p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-bold">Address:</h3>
              <p>123 Main Street, City, Country</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
