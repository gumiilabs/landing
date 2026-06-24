import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const projects = [
  {
    meta: "2023\u2013Present \u00b7 Frontend & Figma",
    title: "Appliwaste",
    url: "https://appliwaste.com",
    desc: "Frontend development and Figma prototyping for a waste-management SaaS serving a Patagonia-based client. Managed TestFlight beta deploys across iOS builds.",
  },
  {
    meta: "2024 \u00b7 Full-stack & Firebase",
    title: "Teralyn AI",
    url: "https://www.tera-lyn.com",
    desc: "Landing page, product frontend, and full-suite architecture planning. Integrated Firebase for auth, Firestore, and hosting.",
  },
  {
    meta: "2025 \u00b7 Vanilla HTML/CSS/JS",
    title: "Gumii Labs",
    url: "https://gumiilabs.com",
    desc: "Personal engineering residency. Hand-coded gumiilabs.com in vanilla HTML, CSS, and JavaScript \u2014 no frameworks, no build tools.",
  },
  {
    meta: "2025 \u00b7 Hackathon & Open-source",
    title: "Spatial IDE",
    url: "https://spatialide.com",
    desc: "Open-source spatial development environment built at Major League Hacking @ SMU in 24 hours. Canvas-based diagramming encodes data-flow topology; Gemini API generates full-stack codebases from layout.",
  },
];

const stack = [
  "HTML5", "CSS3/SCSS", "Bootstrap", "JavaScript", "React",
  "Figma", "Firebase", "Git", "Electron", "Python",
];

export default function Work() {
  return (
    <main className="min-h-screen selection:bg-black selection:text-white bg-white flex flex-col">
      <Header />
      <div className="flex-1 pt-32 md:pt-48 pb-32 md:pb-48">
        <section>
          <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 font-bold text-black">
                  Gumii Labs Engineering Residency
                </span>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-none mt-4 text-black">
                  Isaac Banda
                </h1>
              </div>
              <div className="font-mono text-sm text-black/60 leading-relaxed md:text-right">
                Frontend Developer<br/>
                <a href="mailto:isaacbandatech@gmail.com" className="text-black hover:text-accent transition-colors">
                  isaacbandatech@gmail.com
                </a>
                <br/>
                <a href="https://github.com/ibanda-bit" target="_blank" className="text-black hover:text-accent transition-colors">
                  github.com/ibanda-bit
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 mt-24 md:mt-48">
          <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 py-24 md:py-48">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 font-bold text-black">
              Selected
            </span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-none mt-4 mb-16 md:mb-24 text-black">
              Projects.
            </h2>
            <div className="flex flex-col gap-8 md:gap-12">
              {projects.map((p) => (
                <div
                  key={p.title}
                  className="border border-black/10 bg-zinc-50 p-8 md:p-12 flex flex-col gap-3 relative overflow-hidden group hover:border-accent transition-colors duration-300"
                >
                  <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 font-bold text-black relative z-10">
                    {p.meta}
                  </span>
                  <h3 className="relative z-10">
                    <a
                      href={p.url}
                      target="_blank"
                      className="text-2xl md:text-4xl font-bold tracking-tighter uppercase leading-none text-black hover:text-accent transition-colors"
                    >
                      {p.title} &rarr;
                    </a>
                  </h3>
                  <p className="text-sm md:text-base text-black/60 leading-relaxed max-w-2xl relative z-10">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-black/10">
          <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 py-24 md:py-48">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 font-bold text-black">
              Tooling
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase leading-none mt-4 mb-8 text-black">
              Stack.
            </h2>
            <p className="font-mono text-sm md:text-base text-black leading-relaxed">
              {stack.map((item, i) => (
                <span key={item}>
                  {i > 0 && <span className="opacity-30 mx-1">&middot;</span>}
                  {item}
                </span>
              ))}
            </p>
          </div>
        </section>

        <section className="border-t border-black/10">
          <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 py-24 md:py-48">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 font-bold text-black">
              Note
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase leading-none mt-4 mb-8 text-black">
              &mdash;
            </h2>
            <p className="font-mono text-sm md:text-base text-black/60 leading-relaxed max-w-lg">
              Most of my work lives outside commit history &mdash; client deploys, solo builds, rapid prototypes. These URLs are the work.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
