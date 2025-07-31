import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 pt-28 pb-20">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-pink-500 rounded-xl p-6 shadow-lg text-white">
        <h2 className="text-2xl font-bold text-center mb-5">
          Get in Touch <FaEnvelope className="inline ml-2 text-pink-400" />
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-[#0c0f1d] text-white placeholder-gray-400 border border-pink-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="bg-[#0c0f1d] text-white placeholder-gray-400 border border-pink-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="bg-[#0c0f1d] text-white placeholder-gray-400 border border-pink-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-md shadow-md transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

