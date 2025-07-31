import React from "react";
import profileImage from "../assests/gozdeportfolyo.jpg";

export default function AboutMe() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16">
      {/* Cam efekt sadece bu kutuda */}
      <div className="backdrop-blur-lg bg-white/10 border border-gray-600 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-pink-500/50 hover:scale-105 max-w-xl">
        <h2 className="text-3xl font-bold text-pink-400 hover:text-green-300 transition-colors duration-300 mb-4">
          About Me
        </h2>
        <p className="text-white leading-relaxed">
          Hello! I'm Gözde Döner, a passionate Frontend Developer with a background in architecture. I love designing beautiful and responsive interfaces using React, TypeScript, and modern UI libraries. My goal is to create immersive digital experiences by combining frontend technologies with creativity.
        </p>
      </div>

      {/* Profil Fotoğrafı */}
      <img
        src={profileImage}
        alt="Gözde Döner"
        className="w-48 md:w-60 rounded-xl shadow-lg border-2 border-pink-400 hover:border-green-300 transition-all duration-300 hover:scale-105 outline-none"
      />
    </section>
  );
}
