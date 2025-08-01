import { useState } from "react";
import headshot from "../../public/Professional-Headshot.jpg";
import Icon from "../components/Icon";
import Socials from "../components/Socials";
import Projects from "../components/Projects";
import certifications from "../data/certifications.json";
import careerData from "../data/career.json";
import education from "../data/education.json"

const workData = careerData.career;
const educationData = education.education;

export default function Home() {
  const [toggle, setToggle] = useState("work");

  const getDate = (item) =>
    item.start && item.end
      ? `${item.start} - ${item.end}`
      : item.dates || item.obtained || "";

  const getRole = (item) =>
    item.role || item.title || (item.issuing_company && item.name) || "";

  const getImage = (item) =>
    item.logo || item.image || headshot;

  const getBullets = (item) =>
    Array.isArray(item.description)
      ? item.description
      : item.bullets || (item.description ? [item.description] : []);

  const getName = (item) =>
    item.name || item.school || item.company || "";

  const getHref = (item) =>
    item.href || "";

  return (
    <main className="flex flex-col items-center min-h-screen bg-background px-4">
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl w-full py-16">
        {/* Left: Bio and Buttons */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-4">
          <h1 className="text-4xl font-bold text-accent flex items-center gap-2">
            Hey, I'm Jay <span role="img" aria-label="wave">👋</span>
          </h1>
          <p className="text-lg text-text text-center md:text-left">
            Placeholder bio: Passionate developer with experience in building modern web applications and a keen interest in UI/UX.
          </p>
          <div className="flex items-center gap-2">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-card text-text hover:bg-primary font-bold flex items-center gap-2 mt-2"
              style={{ height: "40px" }} // force same height as socials
            >
              <Icon name="file-down" className="size-4" />
              Resume
            </a>
            <div style={{ height: "40px", display: "flex", alignItems: "center" }}>
              <Socials variant="button" />
            </div>
          </div>
        </div>
        {/* Right: Headshot */}
        <img
          src={headshot}
          alt="Jay's Headshot"
          className="w-40 h-40 rounded-full object-cover border-4 border-border shadow-lg"
        />
      </div>

      {/* Work/Education Toggle */}
      <div className="px-1 py-1 bg-card rounded-2xl flex w-full max-w-3xl mb-3">
        <button
          className={`flex-1 py-3 rounded-2xl cursor-pointer font-bold transition ${
            toggle === "work"
              ? "bg-primary text-text"
              : "bg-card text-primary"
          }`}
          onClick={() => setToggle("work")}
        >
          Work
        </button>
        <button
          className={`flex-1 py-3 rounded-2xl cursor-pointer font-bold transition ${
            toggle === "education"
              ? "bg-primary text-text"
              : "bg-card text-primary"
          }`}
          onClick={() => setToggle("education")}
        >
          Education
        </button>
      </div>

      {/* Work/Education Data */}
      <div className="w-full max-w-3xl flex flex-col gap-0 mb-8 relative">
        {(toggle === "work" ? workData : educationData).map((item, idx, arr) => (
          <div key={idx} className="flex flex-row items-start relative min-h-[120px]">
            {/* Timeline: image + line */}
            <div className="flex flex-col items-center mr-6 relative z-10">
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.logo || item.image ? (
                    <img
                      src={item.logo || item.image}
                      alt={item.name || item.school || item.company}
                      className="w-20 h-20 rounded-full object-contain border-2 border-primary shadow"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center border-2 border-primary shadow">
                      {/* Simple user SVG icon */}
                      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" className="text-accent">
                        <circle cx="12" cy="8" r="4" fill="currentColor" />
                        <rect x="4" y="16" width="16" height="6" rx="3" fill="currentColor"/>
                      </svg>
                    </div>
                  )}
                </a>
              ) : (
                item.logo || item.image ? (
                  <img
                    src={item.logo || item.image}
                    alt={item.name || item.school || item.company}
                    className="w-20 h-20 rounded-full object-contain border-2 border-primary shadow"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-text flex items-center justify-center border-2 border-primary shadow">
                    <svg width="40" height="40" fill="none" viewBox="0 0 24 24" className="text-muted">
                      <circle cx="12" cy="8" r="4" fill="currentColor" />
                      <rect x="4" y="16" width="16" height="6" rx="3" fill="currentColor"/>
                    </svg>
                  </div>
                )
              )}

              {/* Vertical line: only if not last item */}
              {idx < arr.length - 1 && (
                <div
                  className="w-1 h-full"
                  style={{
                    background: "var(--color-primary)",
                    minHeight: "40px",
                    marginTop: "0.5rem",
                  }}
                />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <div className="text-primary text-xs font-semibold mb-1">
                {item.start && item.end
                  ? `${item.start} - ${item.end}`
                  : item.dates || item.obtained || ""}
              </div>
              <div className="text-2xl font-bold text-text mb-1">
                {item.name || item.school || item.company}
              </div>
              <div className="text-muted text-base mb-2">
                {item.role || item.title || (item.issuing_company && item.name) || ""}
              </div>
              {Array.isArray(item.description) && item.description.length > 0 && (
                <ul className="list-disc pl-5 text-text/50">
                  {item.description.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Featured Projects */}
      <section className="w-full max-w-4xl mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-primary text-2xl font-bold">Featured Projects</h2>
          <a href="/projects" className="text-accent font-bold">
            View All Projects
          </a>
        </div>
        <Projects limit={2} />
      </section>
    </main>
  );
}