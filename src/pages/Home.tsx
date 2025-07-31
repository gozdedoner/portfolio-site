import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import TopProjects from "../components/TopProjects";
import bgDarkGrid from "../assests/bg-dark-grid.png";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgDarkGrid})` }}
    >
      {/* Sabit koyu arka plan, cam efekt yok */}
      <div className="min-h-screen">
        <Navbar />
        <AboutMe />
        <TopProjects />

        {/* CTA Bölümü */}
        <div className="flex justify-center items-center py-20 px-4">
          <div className="bg-white/10 backdrop-blur-xl border border-teal-300/30 rounded-2xl p-10 w-full max-w-4xl shadow-lg text-center transition duration-300 hover:border-teal-400 hover:shadow-[0_0_40px_#2dd4bf]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 drop-shadow-[0_0_5px_#2dd4bf]">
              Let’s build something great together!
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link
                to="/projects"
                className="bg-teal-400/20 text-teal-300 font-semibold px-6 py-3 rounded-md shadow-[0_0_15px_#2dd4bf] border border-teal-300 hover:bg-teal-400/40 hover:shadow-[0_0_25px_#2dd4bf] transition-all duration-300"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="bg-teal-400/20 text-teal-300 font-semibold px-6 py-3 rounded-md shadow-[0_0_15px_#2dd4bf] border border-teal-300 hover:bg-teal-400/40 hover:shadow-[0_0_25px_#2dd4bf] transition-all duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
