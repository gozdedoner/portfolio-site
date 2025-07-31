import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import vibetune from "../assests/vibetune.png";
import aichatbot from "../assests/aichatbot.png";
import movieapp from "../assests/movieapp.png";

const projects = [
  {
    title: "VibeTune",
    description:
      "A modern Spotify clone with dark mode, AI playlist generator, and responsive design.",
    image: vibetune,
    link: "https://github.com/gozdedoner/vibetune",
  },
  {
    title: "AI ChatBot",
    description:
      "AI-powered chat interface with typing animation and auto-scroll, built with React.",
    image: aichatbot,
    link: "https://github.com/gozdedoner/ai-robot-ui",
  },
  {
    title: "Movie App",
    description:
      "Movie search application using API, modern responsive UI and dynamic routing.",
    image: movieapp,
    link: "https://github.com/gozdedoner/movie-app",
  },
];

export default function TopProjects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
  };

  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-pink-400 mb-12">
        Top Projects
      </h2>
      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {projects.map((project, index) => (
           <div className="relative p-[2px] rounded-xl overflow-hidden group">
  {/* Neon Border */}
  <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_#ff00cc,_#3333ff,_#00ffcc,_#ff00cc)] blur-sm opacity-70 animate-spin-slow rounded-xl z-0"></div>

  {/* İçerik */}
  <div className="relative bg-white/10 backdrop-blur-lg p-6 rounded-xl z-10 border border-white/20 group-hover:shadow-[0_0_30px_#ff00cc] transition duration-300">
    <img src={project.image} alt={project.title} className="rounded-lg w-full h-64 object-cover mb-4" />
    <h3 className="text-2xl font-bold text-pink-300">{project.title}</h3>
    <p className="text-white mt-2 mb-4">{project.description}</p>
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-2 bg-pink-500 hover:bg-green-400 text-white rounded-lg transition"
    >
      View Project
    </a>
  </div>
</div>

          ))}
        </Slider>
      </div>
    </section>
  );
}
