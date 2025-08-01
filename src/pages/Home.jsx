import { useState } from "react";
import headshot from "../../public/Professional-Headshot.jpg";

// Dummy data
const workData = [
  {
    id: 1,
    company: "TechCorp",
    title: "Software Engineer",
    description: "Developed scalable web applications.",
    image: headshot,
    dates: "2022 - Present",
    bullets: ["Led frontend team", "Optimized performance", "Mentored interns"],
  },
];
const educationData = [
  {
    id: 1,
    school: "State University",
    title: "B.S. Computer Science",
    description: "Studied software engineering and algorithms.",
    image: headshot,
    dates: "2018 - 2022",
    bullets: ["Dean's List", "Research Assistant", "Graduated Cum Laude"],
  },
];
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Tailwind.",
    image: headshot,
    tech: ["React", "Tailwind", "Vite"],
    website: "#",
    source: "#",
    bullets: ["Responsive design", "Dynamic content", "Fast load times"],
    screenshots: [headshot, headshot],
  },
  {
    id: 2,
    title: "Task Manager",
    description: "A productivity app for managing tasks.",
    image: headshot,
    tech: ["React", "Redux", "Node.js"],
    website: "#",
    source: "#",
    bullets: ["Real-time sync", "User authentication", "Customizable UI"],
    screenshots: [headshot],
  },
];

export default function Header() {
  const [toggle, setToggle] = useState("work");
  const [modal, setModal] = useState(null);
  const [screenshotIdx, setScreenshotIdx] = useState(0);

  const data = toggle === "work" ? workData : educationData;

  return (
    <div className="bg-background items-center p-4">
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl items-center mb-8">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-primary text-4xl font-bold">Hey I'm Jay</h1>
          <p className="text-text text-lg">
            Placeholder bio: Passionate developer with experience in building modern web applications and a keen interest in UI/UX.
          </p>
          <div className="flex gap-2 mt-2">
            <a
              href="https://drive.google.com/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-accent text-background font-bold"
            >
              Resume
            </a>
            <a
              href="https://linkedin.com/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-primary text-card font-bold"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-card text-primary border border-primary font-bold"
            >
              GitHub
            </a>
            <a
              href="mailto:placeholder@email.com"
              className="px-4 py-2 rounded bg-secondary text-text font-bold"
            >
              Email
            </a>
          </div>
        </div>
        <img
          src={headshot}
          alt="Jay's Headshot"
          className="w-40 h-40 rounded-full object-cover border-4 border-border ml-0 md:ml-8 mt-8 md:mt-0"
        />
      </div>

      {/* Work/Education Toggle */}
      <div className="flex w-full max-w-3xl mb-6">
        <button
          className={`flex-1 py-3 rounded-l-lg bg-card text-text font-bold border border-border ${
            toggle === "work" ? "bg-accent text-background" : ""
          }`}
          onClick={() => setToggle("work")}
        >
          Work
        </button>
        <button
          className={`flex-1 py-3 rounded-r-lg bg-card text-text font-bold border border-border ${
            toggle === "education" ? "bg-accent text-background" : ""
          }`}
          onClick={() => setToggle("education")}
        >
          Education
        </button>
      </div>

      {/* Experience/Education Section */}
      <div className="w-full max-w-3xl flex flex-col gap-4 mb-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row bg-card rounded-lg shadow p-6 border-2 border-border"
          >
            <img
              src={item.image}
              alt={item.title || item.school}
              className="w-20 h-20 rounded-full object-cover border-2 border-border mr-0 md:mr-6 mb-4 md:mb-0"
            />
            <div className="flex-1">
              <h2 className="text-primary text-2xl font-bold mb-1">
                {item.title || item.school}
              </h2>
              <div className="text-muted mb-2">{item.dates}</div>
              <p className="text-text mb-2">{item.description}</p>
              <ul className="list-disc pl-5 text-muted">
                {item.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Projects */}
      <div className="w-full max-w-4xl mb-4 flex items-center justify-between">
        <h2 className="text-primary text-2xl font-bold">Featured Projects</h2>
        <a href="#" className="text-accent font-bold">
          View More
        </a>
      </div>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="bg-card rounded-lg shadow p-6 border-2 border-border flex flex-col"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-32 object-cover rounded mb-4"
            />
            <h3 className="text-primary text-xl font-bold mb-1">{proj.title}</h3>
            <p className="text-text mb-2">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-muted text-background text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-2 mt-auto">
              <a
                href={proj.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded bg-accent text-background font-bold text-xs"
              >
                Website
              </a>
              <a
                href={proj.source}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded bg-primary text-card font-bold text-xs"
              >
                Source
              </a>
              <button
                className="px-3 py-1 rounded bg-secondary text-text font-bold text-xs"
                onClick={() => {
                  setModal(proj);
                  setScreenshotIdx(0);
                }}
              >
                More Info
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for More Info */}
      {modal && (
        <div className="fixed inset-0 bg-background bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg shadow-lg p-8 max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-muted"
              onClick={() => setModal(null)}
            >
              &#10005;
            </button>
            <h3 className="text-primary text-xl font-bold mb-2">{modal.title}</h3>
            <ul className="list-disc pl-5 text-text mb-4">
              {modal.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="flex items-center justify-center mb-4">
              <button
                className="px-2 py-1 text-muted"
                disabled={screenshotIdx === 0}
                onClick={() => setScreenshotIdx(screenshotIdx - 1)}
              >
                &#8592;
              </button>
              <img
                src={modal.screenshots[screenshotIdx]}
                alt={`Screenshot ${screenshotIdx + 1}`}
                className="w-40 h-40 object-cover rounded mx-4"
              />
              <button
                className="px-2 py-1 text-muted"
                disabled={screenshotIdx === modal.screenshots.length - 1}
                onClick={() => setScreenshotIdx(screenshotIdx + 1)}
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};