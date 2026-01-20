"use client";

import Image from "next/image";

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
    { src: "/nextjs.png", alt: "Next.js" },
    { src: "/tailwindcss.png", alt: "Tailwind CSS" },
    { src: "/prisma.png", alt: "Prisma" }
  ];

  return (
    <section className="w-full min-h-[calc(100vh-80px)] px-8 py-12">
      <div className="max-w-250 mx-auto w-full h-full flex flex-col justify-center gap-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[auto_auto_1fr] gap-2">

          {/* LEFT */}
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

            {/* SKILLS CARD */}
            <div className="bg-neutral-800 rounded-3xl p-8 flex-1">
              <div className="grid grid-cols-3 gap-4 items-center justify-items-center mb-6">
                {skills.map((skill) => (
                  <Image
                    key={skill.alt}
                    src={skill.src}
                    alt={skill.alt}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
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

          {/* CENTER TOP */}
          <div className="lg:col-span-2 bg-neutral-800 rounded-3xl p-8 flex items-center justify-center">
            <Image
              src="/githubb.png"
              alt="GitHub"
              width={55}
              height={55}
              className="opacity-80"
            />
          </div>


          <div className="lg:col-span-2 bg-neutral-800 rounded-3xl p-8 flex items-center justify-center">
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={50}
              height={50}
              className="opacity-80"
            />
          </div>

          {/* INTRO */}
          <div className="lg:col-span-5 lg:row-span-2 bg-neutral-800 rounded-3xl p-8">
            samiksha
          </div>

          {/* CENTER SECOND */}
          <div className="lg:col-span-2">
            <a
              href="/resume.pdf"    
              download="Samiksha_Jangid_Resume.pdf"
              className="bg-neutral-800 rounded-3xl p-8 flex items-center justify-center hover:opacity-90 transition"
            >
              <Image
                src="/resume.png"
                alt="Resume"
                width={50}
                height={50}
                className="object-contain"
              />
            </a>
          </div>
          <div className="lg:col-span-2 bg-neutral-800 rounded-3xl p-8 flex items-center justify-center">
            <Image
              src="/mail.png"
              alt="Mail"
              width={50}
              height={50}
              className="opacity-80"
            />
          </div>


          {/* PROJECTS */}
          <div className="lg:col-start-4 lg:col-span-9 lg:row-start-3 bg-neutral-800 rounded-3xl p-8">
            project
          </div>

        </div>
      </div>
    </section>
  );
}
