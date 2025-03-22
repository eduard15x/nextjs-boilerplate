import PageInfo from "@/components/PageInfo";

export const metadata = {
  title: "Contact Digital Nomad Entertainment",
};

const Contact = () => {
  return (
    <div className="mb-24">
      <PageInfo
        title={"get in touch with us"}
        titleCss="text-title-xl"
        description="Have questions about trial-based hiring or flexible workforce solutions? Get in touch today!"
        descriptionCss="px-10"
      />

      <div className="contact-form-container mt-24 mb-32 text-white grid grid-cols-3 gap-12">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-700"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-700"
        />
        <input
          type="text"
          placeholder="Company"
          className="w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-700"
        />
        <div className="col-span-2 col-start-1 col-end-3">
          <textarea
            placeholder="Message"
            className="w-full col-span-2 row-span-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-700 h-28"
          ></textarea>
        </div>
        <div className="col-span-2 col-start-3 col-end-4 flex flex-col">
          <div className="flex-grow">
            <select
              defaultValue={"Select a Service"}
              className="w-full text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-700"
            >
              <option value="" className="text-white">
                Select a Service
              </option>
              <option className="text-white">Web Development</option>
              <option className="text-white">SEO Optimization</option>
              <option className="text-white">Digital Marketing</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-violet-800 cursor-pointer text-white px-6 py-3 w-full font-semibold hover:bg-violet-600 transition duration-200"
          >
            Submit
          </button>
        </div>
      </div>

      <PageInfo title={"direct contact iformation"} titleCss="text-title-xs" />

      <div className="mt-12 text-gray-200 flex flex-col items-center p-4">
        <div className="flex">
          <div className="w-80">
            <div className="text-lg font-semibold mb-1">Email</div>
            <div>contact@dnesolutions.com</div>
          </div>
          <div className="w-80">
            <div className="text-lg font-semibold mb-1">Phone</div>
            <div>+48 601 234 567</div>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="w-80">
            <div className="text-lg font-semibold mb-1">Working Hours</div>
            <div>Mon-Fri: 9:00-16:00</div>
            <div>Mon-Fri: 9:00AM - 4:00PM</div>
          </div>
          <div className="w-80">
            <div className="text-lg font-semibold mb-1">Office Location</div>
            <div>Al. Grunwaldzka 472C, 80-309 Gdańsk, Poland</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
