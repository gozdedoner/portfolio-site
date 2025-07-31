import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aichatbot from "../assests/aichatbot.png";
import vibetune from "../assests/vibetune.png";
import movieapp from "../assests/movieapp.png";
import todolist from "../assests/todolist.png";
import weatherapp from "../assests/weatherapp.png";
import currencyconverter from "../assests/currencyconverter.png";

// Görseller

// Proje verileri

const projects = [
  {
    title: "VibeTune",
    description: "A modern Spotify clone with AI playlists and dark mode.",
    image: vibetune,
    link: "https://github.com/gozdedoner/vibetune",
  },
  {
    title: "AI ChatBot",
    description: "AI-powered chat UI with auto-scroll and typing animation.",
    image: aichatbot,
    link: "https://github.com/gozdedoner/ai-robot-ui",
  },
  {
    title: "Movie App",
    description: "Movie search using API and responsive modern UI.",
    image: movieapp,
    link: "https://github.com/gozdedoner/movie-app",
  },
  {
    title: "To-Do List",
    description: "Task tracker with localStorage and clean UI.",
    image: todolist,
    link: "https://github.com/gozdedoner/to-do-list",
  },
  {
    title: "Weather App",
    description: "Real-time weather search with dynamic visuals.",
    image: weatherapp,
    link: "https://github.com/gozdedoner/weather-app",
  },
  {
    title: "Currency Converter",
    description: "Live exchange rate converter using API.",
    image: currencyconverter,
    link: "https://github.com/gozdedoner/currency-converter",
  },
];

export default function Projects() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-pink-400 mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative p-[2px] rounded-xl overflow-hidden group"
          >
            {/* Neon Border */}
            <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_#ff00cc,_#3333ff,_#00ffcc,_#ff00cc)] blur-sm opacity-70 animate-spin-slow rounded-xl z-0"></div>

            {/* Card Content */}
            <div className="relative bg-white/10 backdrop-blur-lg p-4 rounded-xl z-10 border border-white/20 group-hover:shadow-[0_0_30px_#ff00cc] transition duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-pink-300">
                {project.title}
              </h3>
              <p className="text-white mt-1 mb-3 text-sm">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-pink-500 hover:bg-green-400 text-white rounded-lg transition text-sm"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="text-center mt-16">
        <p className="text-white text-lg mb-4">
          These are just a few of my projects. You can explore more on my GitHub.
        </p>
        <a
          href="https://github.com/gozdedoner"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-pink-500 hover:bg-green-400 text-white rounded-lg shadow-md transition"
        >
          View More on GitHub
        </a>
      </div>
    </section>
  );
}
