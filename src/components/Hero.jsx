"use client";

export default function Hero() {
    const skills = [
    { src: "/public/express.png", alt: "Express.js" },
    { src: "/public/mongodb.png", alt: "MongoDB" },
    { src: "/public/nodejs.png", alt: "Node.js" },
    { src: "/public/react.png", alt: "React" },
    { src: "/public/python.png", alt: "Python" },
    { src: "/public/figma.png", alt: "Figma" },
    { src: "/public/html.png", alt: "HTML5" },
    { src: "/public/css.png", alt: "CSS3" },
    { src: "/public/js.png", alt: "JavaScript" },
    { src: "/public/nextjs.png", alt: "Next.js" },
    { src: "/public/tailwindcss.png", alt: "Tailwind CSS" },
    { src: "/public/prisma.png", alt: "Prisma" },
    ];
  return (
    <section className="w-full min-h-[calc(100vh-80px)] px-8 py-20">
      <div className="max-w-250 mx-auto w-full h-full flex flex-col justify-center gap-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[auto_auto_1fr] gap-4">

          {/* LEFT */}
          <div className="lg:col-span-3 lg:row-span-3 flex flex-col gap-2">
            <div className="bg-neutral-800 rounded-3xl p-8 flex-2">
              <p className="text-gray-500 text-xs mb-2">A Web Devloper</p>
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Samiksha<br />Jangid
              </h2>
              <p className="text-gray-400 text-xs md:text-base italic leading-relaxed font-light">
              a BTech CS & AI student building things on the web —
              websites, apps, and whatever feels fun to create...
              </p>
              
            </div>
            <div className="bg-neutral-800 rounded-3xl p-8 flex-1">
              skills
            </div>
          </div>

          {/* CENTER TOP row 1 */}
          <div className="lg:col-span-2 bg-neutral-800 rounded-3xl p-8">
            github
          </div>
          <div className="lg:col-span-2 bg-neutral-800 rounded-3xl p-8">
            linkedin
          </div>

          {/* intro card */}
          <div className="lg:col-span-5 lg:row-span-2 bg-neutral-800 rounded-3xl p-8">
            samiksha
          </div>

          {/* CENTER SECOND row 2 */}
          <div className="lg:col-span-2 bg-neutral-800 rounded-3xl p-8">
            resume
          </div>
          <div className="lg:col-span-2 bg-neutral-800 rounded-3xl p-8">
            mail
          </div>

          {/* projects card */}
          <div className="lg:col-start-4 lg:col-span-9 lg:row-start-3 bg-neutral-800 rounded-3xl p-8">
            project
          </div>

        </div>
      </div>
    </section>
  );
}
