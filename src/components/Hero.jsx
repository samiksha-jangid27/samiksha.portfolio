"use client";

import { motion } from "framer-motion";
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
      link: "https://your-portfolio-link.com",
    },
    {
      title: "AI Chat App",
      image: "/project2.png",
      link: "https://your-chat-app-link.com",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-full min-h-[calc(100vh-80px)] px-4 py-4">
      <motion.div
        className="max-w-5xl mx-auto w-full h-full flex flex-col justify-center gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[auto_auto_1fr] gap-1"
          variants={itemVariants}
        >
          <motion.div className="lg:col-span-3 lg:row-span-3 flex flex-col gap-1" variants={itemVariants}>
            <motion.div
              className="bg-neutral-800 rounded-3xl p-4 flex-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-500 text-xs mb-2">A Web Developer</p>
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Samiksha<br />Jangid
              </h2>
              <p className="text-gray-400 text-xs md:text-sm italic leading-relaxed font-light">
                a BTech CS & AI student building things on the web —
                websites, apps, and whatever feels fun to create...
              </p>
            </motion.div>

            <motion.div
              className="bg-neutral-800 rounded-3xl p-4 h-full flex flex-col justify-between"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-3 gap-2 items-center justify-items-center mb-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.alt}
                    className="flex flex-col items-center group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <motion.div
                      className="p-1 rounded-md transform transition-all duration-300 hover:scale-110 hover:rotate-12"
                      whileHover={{ rotate: 12, scale: 1.1 }}
                    >
                      <Image
                        src={skill.src}
                        alt={skill.alt}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </motion.div>
                    <motion.span
                      className="text-xs text-gray-300 mt-1 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {skill.alt}
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-xs">Most Use</p>
                  <h3 className="text-white text-xl font-bold">Skills</h3>
                </div>

                <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-current text-gray-300"
                  >
                    <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-4 lg:row-span-2 grid grid-cols-2 grid-rows-2 gap-1 h-full"
            variants={itemVariants}
          >
            {[
              { href: "https://github.com/samiksha-jangid27", src: "/githubb.png", alt: "GitHub" },
              { href: "https://www.linkedin.com/in/samiksha-jangid-a30380325/", src: "/linkedin.png", alt: "LinkedIn" },
              { href: "/resume.pdf", src: "/resume.png", alt: "Resume", download: "Samiksha_Jangid_Resume.pdf" },
              { href: "mailto:samikshajangid30@gmail.com", src: "/mail.png", alt: "Mail" },
            ].map((item, index) => (
              <motion.a
                key={item.alt}
                href={item.href}
                target={item.href.startsWith('http') ? "_blank" : undefined}
                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                download={item.download}
                aria-label={`Open ${item.alt}`}
                className="block bg-neutral-800 rounded-3xl p-3 flex items-center justify-center aspect-square h-full transform transition-all duration-300 filter hover:-translate-y-3 hover:brightness-125 hover:shadow-lg active:scale-95"
                whileHover={{ y: -8, brightness: 1.25 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="lg:col-span-5 lg:row-span-2 bg-neutral-800 rounded-3xl p-4 relative overflow-hidden h-full flex flex-col justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-orange-400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Building Skills
              <br />
              For Future.
            </motion.h1>
            <motion.p
              className="text-gray-400 text-sm mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Exploring new technologies and frameworks to stay ahead in the ever-evolving tech landscape.
            </motion.p>
          </motion.div>

          <motion.div
            className="lg:col-start-4 lg:col-span-9 lg:row-start-3 bg-neutral-800 rounded-3xl p-4 h-full flex flex-col"
            variants={itemVariants}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-xl font-bold">Projects</h3>
              <span className="text-gray-500 text-sm">See More →</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
              {projects.slice(0, 2).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  <Link
                    href="/work"
                    className="group block bg-neutral-900 rounded-2xl overflow-hidden hover:scale-[1.03] transition-all duration-300"
                  >
                    <div className="relative w-full aspect-video overflow-hidden bg-neutral-800">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-3">
                      <h4 className="text-white font-semibold text-base">
                        {project.title}
                      </h4>
                      <p className="text-gray-400 text-sm mt-1">See details →</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
