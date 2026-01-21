import Navbar from "@/components/Navbar";
import Image from "next/image";

const projects = [
  {
    title: "Portfolio Website",
    image: "/project1.png",
    github: "https://github.com/your-username/portfolio",
    live: "https://your-portfolio-link.com",
    description: "Personal portfolio showcasing projects and skills.",
  },
  {
    title: "AI Chat App",
    image: "/project2.png",
    github: "https://github.com/your-username/ai-chat",
    live: "https://your-chat-app-link.com",
    description: "A chat app powered by AI for conversational experiences.",
  },
];

export default function Work() {
  return (
    <div>
      <Navbar />

      <main className="w-full min-h-[calc(100vh-80px)] px-8 py-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl text-white font-bold mb-6">Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className="bg-neutral-800 rounded-2xl overflow-hidden"
              >
                <div className="relative w-full aspect-video bg-neutral-900">
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                </div>

                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                  <p className="text-gray-400 text-sm">{p.description}</p>

                  <div className="mt-3 flex items-center gap-3">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 bg-neutral-900 rounded-md text-gray-200 text-sm hover:bg-neutral-700 transition"
                    >
                      GitHub
                    </a>

                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 bg-orange-500 rounded-md text-white text-sm hover:opacity-90 transition"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
