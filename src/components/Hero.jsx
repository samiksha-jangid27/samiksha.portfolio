"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    { src: "/express.png", alt: "Express.js" },
    { src: "/mongodb.png", alt: "MongoDB" },
    { src: "/nodejs.png", alt: "Node.js" },
    { src: "/react.png", alt: "React" },
    { src: "/python.png", alt: "Python" },
    { src: "/figma.png", alt: "Figma" },
    { src: "/html.png", alt: "HTML5" },
    { src: "/css.png", alt: "CSS3" },
    { src: "/js.png", alt: "JavaScript" },
    { src: "/nextjs.png", alt: "Next.js" },
    { src: "/tailwindcss.png", alt: "Tailwind CSS" },
    { src: "/prisma.png", alt: "Prisma" }
  ];

  const projects = [
    {
      title: "Portfolio Website",
      image: "/project1.png",
      link: "https://your-portfolio-link.com",
    },
    {
      title: "AI Chat App",
      image: "/project2.png",
      link: "https://your-chat-app-link.com",
    },
  ];

  return (
    <section className="w-full min-h-[calc(100vh-80px)] px-8 py-8">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-center gap-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[auto_auto_1fr] gap-2">

          <div className="lg:col-span-3 lg:row-span-3 flex flex-col gap-2">
            <div className="bg-neutral-800 rounded-3xl p-8 flex-2">
              <p className="text-gray-500 text-xs mb-2">A Web Developer</p>
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Samiksha<br />Jangid
              </h2>
              <p className="text-gray-400 text-xs md:text-base italic leading-relaxed font-light">
                a BTech CS & AI student building things on the web —
                websites, apps, and whatever feels fun to create...
              </p>
            </div>

            <div className="bg-neutral-800 rounded-3xl p-8 h-full flex flex-col justify-between">
              <div className="grid grid-cols-3 gap-4 items-center justify-items-center mb-6">
                {skills.map((skill) => (
                  <div key={skill.alt} className="flex flex-col items-center">
                    <button
                      onClick={() =>
                        setActiveSkill(activeSkill === skill.alt ? null : skill.alt)
                      }
                      className={`p-1 rounded-md transform transition-all duration-300 hover:scale-105 hover:rotate-12 ${
                        activeSkill === skill.alt ? "rotate-180 scale-105" : ""
                      }`}
                      aria-pressed={activeSkill === skill.alt}
                    >
                      <Image
                        src={skill.src}
                        alt={skill.alt}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </button>
                    <span
                      className={`text-xs text-gray-300 mt-1 transition-opacity duration-300 ${
                        activeSkill === skill.alt ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {skill.alt}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-xs">Most Use</p>
                  <h3 className="text-white text-2xl font-bold">Skills</h3>
                </div>

                <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current text-gray-300"
                  >
                    <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 lg:row-span-2 grid grid-cols-2 grid-rows-2 gap-2 h-full">
              <a
                href="https://github.com/samiksha-jangid27"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub"
                className="block bg-neutral-800 rounded-3xl p-8 flex items-center justify-center aspect-square h-full transform transition-all duration-200 filter hover:-translate-y-2 hover:brightness-110 active:scale-95"
              >
                <Image
                  src="/githubb.png"
                  alt="GitHub"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/samiksha-jangid-a30380325/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn"
                className="block bg-neutral-800 rounded-3xl p-8 flex items-center justify-center aspect-square h-full transform transition-all duration-200 filter hover:-translate-y-2 hover:brightness-110 active:scale-95"
              >
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </a>

              <a
                href="/resume.pdf"
                download="Samiksha_Jangid_Resume.pdf"
                aria-label="Download Resume"
                className="block bg-neutral-800 rounded-3xl p-8 flex items-center justify-center aspect-square h-full transform transition-all duration-200 filter hover:-translate-y-2 hover:brightness-110 active:scale-95"
              >
                <Image
                  src="/resume.png"
                  alt="Resume"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </a>

              <a
                href="mailto:samikshajangid30@gmail.com"
                aria-label="Send Email"
                className="block bg-neutral-800 rounded-3xl p-8 flex items-center justify-center aspect-square h-full transform transition-all duration-200 filter hover:-translate-y-2 hover:brightness-110 active:scale-95"
              >
                <Image
                  src="/mail.png"
                  alt="Mail"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </a>
            </div>

          <div className="lg:col-span-5 lg:row-span-2 bg-neutral-800 rounded-3xl p-7 relative overflow-hidden h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-orange-400">
              Building Skills
              <br />
              For Future.
            </h1>
          </div>

          <div className="lg:col-start-4 lg:col-span-9 lg:row-start-3 bg-neutral-800 rounded-3xl p-8 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-2xl font-bold">Projects</h3>
              <span className="text-gray-500 text-sm">Selected Work</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
              {projects.slice(0, 2).map((project) => (
                <Link
                  key={project.title}
                  href="/work"
                  className="group block bg-neutral-900 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform"
                >
                  <div className="relative w-full aspect-video overflow-hidden bg-neutral-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <h4 className="text-white font-semibold text-lg">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">See details →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
