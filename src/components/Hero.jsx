"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
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
    { src: "/next_js.png", alt: "Next.js" },
    { src: "/tailwindcss.png", alt: "Tailwind CSS" },
    { src: "/prisma.png", alt: "Prisma" }
  ];

  const projects = [
    {
      title: "Portfolio Website",
      image: "/project1.png",
    },
    {
      title: "AI Chat App",
      image: "/project2.png",
    },
  ];

  return (
    <section className="w-full min-h-[calc(100vh-80px)] px-4 py-4">
      <div className="max-w-5xl mx-auto w-full flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[170px_170px_1fr] gap-2 w-full lg:scale-[0.95] origin-top">

          {/* Left Column */}
          <div className="lg:col-span-3 lg:row-span-3 flex flex-col gap-2">
            <div className="bg-neutral-800 rounded-2xl p-8">
              <p className="text-gray-500 text-xs mb-1">A Web Developer</p>
              <h2 className="text-white text-3xl font-bold leading-tight">
                Samiksha<br />Jangid
              </h2>
              <p className="text-gray-400 text-s italic mt-2">
                a BTech CS & AI student building things on the web —
                websites, apps, and whatever feels fun to create...
              </p>
            </div>

            <div className="bg-neutral-800 rounded-2xl p-7 flex flex-col justify-between flex-1">
              <div className="grid grid-cols-3 gap-1.5 justify-items-center">
                {skills.map((skill) => (
                  <div key={skill.alt} className="group flex flex-col items-center">
                    <Image src={skill.src} alt={skill.alt} width={40} height={40} />
                    <span className="text-[10px] text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition">
                      {skill.alt}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-2">
                <div>
                  <p className="text-gray-500 text-xs">Most Used</p>
                  <h3 className="text-white text-lg font-semibold">Skills</h3>
                </div>
                <div className="w-7 h-7 bg-neutral-900 rounded-full flex items-center justify-center">
                  <span className="text-gray-400">→</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Cards */}
          <div className="lg:col-span-4 lg:row-span-2 grid grid-cols-2 grid-rows-2 gap-2">
            {[
              { href: "https://github.com/samiksha-jangid27", src: "/githubb.png" },
              { href: "https://www.linkedin.com/in/samiksha-jangid-a30380325/", src: "/linkedin.png" },
              { href: "/resume.pdf", src: "/resume.png", download: true },
              { href: "mailto:samikshajangid30@gmail.com", src: "/mail.png" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                download={item.download}
                className="bg-neutral-800 rounded-2xl flex items-center justify-center hover:-translate-y-2 transition"
              >
                <Image src={item.src} alt="" width={36} height={36} />
              </a>
            ))}
          </div>

          {/* Hero Text */}
          <div className="lg:col-span-5 lg:row-span-2 bg-neutral-800 rounded-2xl p-4 flex flex-col justify-center">
            <h1 className="text-[42px] font-bold leading-tight text-orange-400">
              Building Skills<br />For Future.
            </h1>
            <p className="text-gray-400 text-sm mt-2">
              Exploring new technologies and frameworks to stay ahead.
            </p>
          </div>

          {/* Projects */}
          <div className="lg:col-start-4 lg:col-span-9 lg:row-start-3 bg-neutral-800 rounded-2xl p-3 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-white font-semibold text-lg">Projects</h3>
              <span className="text-gray-500 text-sm">See More →</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
              {projects.map((project) => (
                <Link
                  key={project.title}
                  href="/work"
                  className="bg-neutral-900 rounded-xl overflow-hidden hover:scale-[1.02] transition"
                >
                  <div className="relative aspect-video">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                  </div>
                  <div className="p-2">
                    <h4 className="text-white text-sm font-medium">{project.title}</h4>
                    <p className="text-gray-400 text-xs">See details →</p>
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
