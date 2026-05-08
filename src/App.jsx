export default function Portfolio() {
  const certifications = [
    {
      title: "MongoDB Associate Developer Certification",
      description:
        "Earned the MongoDB Associate Developer Certification from MongoDB with hands-on understanding of database development and application integration.",
      link: "https://lnkd.in/gVNP-in6",
    },
    {
      title: "Aviatrix Certified Engineer (ACE) – Multicloud Network Associate",
      description:
        "Strengthened understanding of multicloud networking concepts across AWS, Azure, Google Cloud, and Oracle Cloud with focus on secure and scalable architectures.",
      link: "https://lnkd.in/giMBJc6F",
    },
    {
      title: "Salesforce AI Associate",
      description:
        "Gained insights into AI applications and automation capabilities within the Salesforce ecosystem.",
      link: "#",
    },
  ];

  const projects = [
    {
      title: "Autonomous Water Cleaning Robot",
      description:
        "AI-integrated robotic system focused on autonomous water surface purification using intelligent navigation and energy optimization techniques.",
      tech: "AI • Robotics • Automation • Computer Vision",
    },
    {
      title: "Square Vacuum Cleaner Prototype",
      description:
        "Designed a square-shaped vacuum cleaner prototype to improve corner cleaning efficiency compared to traditional circular designs.",
      tech: "Embedded Systems • Design Optimization",
    },
    {
      title: "Digital Calendar Application",
      description:
        "Java GUI based application for event management with modular architecture and persistent storage.",
      tech: "Java • OOP • GUI",
    },
    {
      title: "Color Segregation OpenENV",
      description:
        "AI-based software project focused on image color segregation and classification workflows.",
      tech: "AI • Image Processing • Software Development",
      github: "https://github.com/Dhanya13005/color-segregation-openenv---software",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/70 border-b border-cyan-500/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide text-cyan-400">
            Dhanya Sri
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#research" className="hover:text-cyan-400 transition">Research</a>
            <a href="#certifications" className="hover:text-cyan-400 transition">Certifications</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

        <div className="text-center max-w-4xl relative z-10">
          <p className="uppercase tracking-[0.3em] text-cyan-400 mb-4 text-sm">
            Software Engineer • Java Developer • Researcher
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Building Scalable
            <span className="block text-cyan-400">Software Solutions</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Computer Science Engineering student focused on Java development, data structures, problem solving, software engineering, and research-driven innovation.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Dhanya13005"
              target="_blank"
              className="px-6 py-3 rounded-2xl bg-cyan-500 text-white font-semibold hover:scale-105 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/dhanya-sri-ganpisetti-b08bb42a6"
              target="_blank"
              className="px-6 py-3 rounded-2xl border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white transition"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 rounded-2xl border border-cyan-400 text-cyan-600 hover:bg-cyan-400 hover:text-black transition"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              About Me
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Passionate About AI, Robotics & Automation
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              I am Dhanya Sri Ganpisetti, a B.Tech Computer Science Engineering
              student at KL University with strong interests in AI-integrated
              systems, robotics, cloud technologies, and scalable software
              development.
            </p>

            <p className="text-gray-400 leading-relaxed">
              My work combines software engineering principles with innovative
              research to create intelligent systems capable of solving
              real-world challenges efficiently.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              "Java",
              "DSA",
              "Web Development",
              "Problem Solving",
              "OOP",
              "DBMS",
              "SQL",
              "Research",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white/5 border border-cyan-500/10 rounded-3xl p-6 text-center hover:border-cyan-400 transition"
              >
                <p className="font-semibold text-lg">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="bg-white/[0.03] border-y border-cyan-500/10 py-24 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Projects
            </p>

            <h2 className="text-4xl font-bold">
              Featured Engineering & AI Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-cyan-500/10 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-1 transition duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <p className="text-sm text-cyan-400 mb-5">{project.tech}</p>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="inline-block px-5 py-2 rounded-xl bg-cyan-500 text-white font-medium hover:scale-105 transition"
                  >
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-14 text-center">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
            Research Paper
          </p>

          <h2 className="text-4xl font-bold">
            Published Research & Innovation
          </h2>
        </div>

        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-3xl p-10">
          <h3 className="text-3xl font-bold text-cyan-300 leading-snug mb-5">
            AI-Integrated and Energy-Optimized Robotic Systems for Autonomous
            Water Surface Purification: A Comprehensive Survey
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            This research explores AI-integrated and energy-optimized robotic
            systems designed for autonomous water surface purification. The
            survey focuses on intelligent navigation, pollutant detection,
            computer vision, deep learning models including CNNs and SSDs, and
            renewable energy integration for sustainable robotic operations.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-gray-400 text-sm">
            <div>
              <p><span className="text-white font-semibold">Journal:</span> IJIRCCE</p>
              <p><span className="text-white font-semibold">Volume:</span> 13, Issue 11</p>
              <p><span className="text-white font-semibold">Year:</span> 2025</p>
            </div>

            <div>
              <p><span className="text-white font-semibold">DOI:</span> 10.15680/IJIRCCE.2025.1311081</p>
              <p><span className="text-white font-semibold">Status:</span> Scopus Submitted</p>
              <p><span className="text-white font-semibold">Authors:</span> Dhanya Sri et al.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section
        id="certifications"
        className="bg-white/[0.03] border-y border-cyan-500/10 py-24 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Certifications
            </p>

            <h2 className="text-4xl font-bold">
              Learning & Professional Growth
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-cyan-500/10 rounded-3xl p-8 hover:border-cyan-400 transition"
              >
                <h3 className="text-xl font-bold mb-4 text-cyan-300">
                  {cert.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                  {cert.description}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  View Certificate →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-24 text-center">
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
          Contact
        </p>

        <h2 className="text-5xl font-bold mb-6">
          Let’s Build Something Innovative 🚀
        </h2>

        <p className="text-gray-300 text-lg mb-10">
          Interested in AI, automation, robotics, or software engineering collaborations?
        </p>

        <div className="flex flex-wrap justify-center gap-5 text-lg">
          <a
            href="mailto:dhanya.gs13@gmail.com"
            className="px-6 py-3 rounded-2xl bg-cyan-500 text-white font-semibold hover:scale-105 transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Dhanya13005"
            target="_blank"
            className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Dhanya Sri Ganpisetti • dhanya.arade.app
      </footer>
    </div>
  );
}
