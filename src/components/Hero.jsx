"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
    { src: "/prisma.png", alt: "Prisma" },
  ];

  const projects = [
    { title: "Portfolio Website", image: "/project1.png" },
    { title: "AI Chat App", image: "/project2.png" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section className="w-full min-h-[100vh] flex items-center justify-center pt-28 pb-12 px-4" id="home">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[180px_180px_auto] gap-4 w-full"
        >
          {/* Identity Card */}
          <motion.div variants={itemVariants} className="lg:col-span-4 lg:row-span-2 glass rounded-3xl p-8 flex flex-col relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="z-10 relative h-full flex flex-col justify-between">
              <div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-3 py-1 bg-surface border border-white/5 rounded-full mb-4"
                >
                  <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">Web Developer</p>
                </motion.div>
                
                <h2 className="text-white text-4xl font-bold leading-tight tracking-tight mb-2">
                  <span className="block">Samiksha</span>
                  <span className="block text-primary">Jangid</span>
                </h2>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mt-4">
                A BTech CS & AI student building digital experiences — web apps, interfaces, and anything that demands creativity.
              </p>
            </div>
          </motion.div>

          {/* Headline Card */}
          <motion.div variants={itemVariants} className="lg:col-span-5 lg:row-span-1 glass rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group hover:border-white/10 transition-colors">
             <div className="absolute top-0 right-0 p-6 opacity-10 blur-xl">
               <div className="w-32 h-32 bg-primary rounded-full"></div>
             </div>
             <h1 className="text-3xl lg:text-[40px] font-bold leading-[1.1] text-white z-10">
               Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">intelligence</span><br /> into the web.
             </h1>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="lg:col-span-3 lg:row-span-1 grid grid-cols-2 grid-rows-2 gap-3">
            {[
              { href: "https://github.com/samiksha-jangid27", src: "/githubb.png", fallback: "GH", name: "GitHub" },
              { href: "https://www.linkedin.com/in/samiksha-jangid-a30380325/", src: "/linkedin.png", fallback: "IN", name: "LinkedIn" },
              { href: "/resume.pdf", src: "/resume.png", download: true, fallback: "CV", name: "Resume" },
              { href: "mailto:samikshajangid30@gmail.com", src: "/mail.png", fallback: "EM", name: "Email" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                download={item.download}
                title={item.name}
                className="glass rounded-2xl flex items-center justify-center hover:bg-surface-hover hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                {/* Simulated Image Fallback if image path fails */}
                <div className="z-10 bg-white/5 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md">
                   <span className="text-xs font-bold text-gray-300">{item.fallback}</span>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Skills Card */}
          <motion.div variants={itemVariants} className="lg:col-span-3 lg:row-span-1 glass rounded-3xl p-6 flex flex-col justify-between group">
             <div className="flex items-center justify-between mb-4">
                <h3 className="text-white text-lg font-semibold">Tech Stack</h3>
             </div>
             <div className="flex flex-wrap gap-2 justify-center mt-auto">
               {skills.slice(0, 8).map((skill) => (
                 <div key={skill.alt} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-primary/30 transition-all" title={skill.alt}>
                    <div className="w-4 h-4 bg-gray-500/50 rounded-sm"></div> {/* Placeholder for actual images */}
                 </div>
               ))}
               <div className="w-8 h-8 rounded-full bg-surface border border-white/5 flex items-center justify-center text-xs text-gray-500">+{skills.length - 8}</div>
             </div>
          </motion.div>

          {/* Featured Projects Card */}
          <motion.div variants={itemVariants} className="lg:col-span-5 lg:row-span-1 glass rounded-3xl p-6 flex flex-col relative overflow-hidden">
            <div className="flex justify-between items-center z-10 mb-6">
              <h3 className="text-white font-semibold text-lg">Featured Work</h3>
              <Link href="/work" className="text-primary text-sm hover:underline flex items-center gap-1">
                View All <span className="text-lg leading-none">↗</span>
              </Link>
            </div>

            <div className="flex lg:grid-cols-2 gap-4 flex-1 z-10">
              {projects.map((project) => (
                <div key={project.title} className="flex-1 bg-surface border border-white/5 rounded-2xl overflow-hidden group relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    <div className="w-full h-full min-h-[100px] bg-neutral-800 relative z-0">
                       <Image src={project.image} alt={project.title} fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                    </div>
                    <div className="absolute bottom-3 left-3 z-20">
                      <h4 className="text-white text-sm font-medium drop-shadow-md">{project.title}</h4>
                    </div>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
