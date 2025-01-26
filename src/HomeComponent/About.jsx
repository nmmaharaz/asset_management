const About = () => {
  return (
    <div>
      <section className="bg-[#fef3ee] text-gray-800">
        <div className="container flex flex-col justify-center p-6 w-11/12 mx-auto py-6 lg:py-16 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-lg xl:max-w-lg lg:text-left">
            <h1 className="text-2xl font-bold leading-none sm:text-4xl">
              About Us
            </h1>
            <p className="mt-6 mb-8 text-justify text-lg text-gray-600 sm:mb-12">
              Welcome to <span className="text-black font-bold">SafeAccet</span>, a next-generation web application designed
              to help businesses streamline their asset tracking and management
              processes. Our platform empowers HR managers to easily monitor and
              manage company assets, ensuring that resources are utilized
              efficiently and responsibly. With a focus on simplicity and
              functionality, our system allows you to categorize assets into
              Returnable items like laptops, phones, and office furniture, and
              Non-returnableitems like office supplies. This clear distinction
              helps businesses keep track of inventory and reduce waste.
            </p>
            {/* <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
              >
                Suspendisse
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
              >
                Malesuada
              </a>
            </div> */}
          </div>
          <div className="flex items-center justify-center mt-8 lg:mt-0 ">
            <img
              src="https://i.ibb.co.com/hVkW1gR/hero-img.webp"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
