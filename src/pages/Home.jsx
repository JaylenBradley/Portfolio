import { useState } from "react";
import Icon from "../components/Icon";
import Certifications from "../components/Certifications.jsx";
import Projects from "../components/Projects";
import Socials from "../components/Socials";
import careerData from "../data/career.json";
import education from "../data/education.json"

const workData = careerData.career;
const educationData = education.education;

export default function Home() {
  const [toggle, setToggle] = useState("career");

  return (
    <main className="px-4 flex-1 max-w-3xl mx-auto">
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl w-full py-14">
        {/* Left: Bio and Buttons */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-4">
          <h1 className="text-4xl font-bold text-text flex items-center gap-2">
            Hey, I'm <span className="text-accent">Jay</span> <span role="img" aria-label="wave">👋</span>
          </h1>
          <p className="text-lg text-text text-center md:text-left">
            Full-stack software engineer from <br/> Manalapan, NJ with an interest in AI/ML
          </p>
          <div className="flex items-center gap-2">
            <a
              href="https://drive.google.com/file/d/1p1cZnxeL-cAbwkS-QaJhLXtHgihOTJ5E/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-2 rounded-lg border border-primary text-text hover:bg-primary
                font-bold flex items-center gap-2 mt-2 transition"
              style={{ height: "40px" }}
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
          src="/Professional-Headshot.jpg"
          alt="Jay's Headshot"
          className="w-40 h-40 rounded-full object-cover border-2 border-primary shadow-lg"
        />
      </div>

      {/* Career/Education Toggle */}
      <div className="px-1.5 py-1.5 bg-primary rounded-xl flex w-full max-w-3xl mb-2.5">
        <button
          className={`flex-1 py-1.5 rounded-xl cursor-pointer transition ${
            toggle === "career"
              ? "bg-background text-text"
              : "bg-primary text-text"
          }`}
          onClick={() => setToggle("career")}
        >
          Career
        </button>
        <button
          className={`flex-1 py-1.5 rounded-xl cursor-pointer transition ${
            toggle === "education"
              ? "bg-background text-text"
              : "bg-primary text-muted"
          }`}
          onClick={() => setToggle("education")}
        >
          Education
        </button>
      </div>

      {/* Career/Education Data */}
      <div className="w-full max-w-3xl py-4 px-4 flex flex-col gap-0 mb-8 relative border border-primary rounded-xl">
        {/* Vertical timeline line */}
        <div
          className="absolute left-14 top-0 bottom-0 w-px"
          style={{ background: "var(--color-primary)", zIndex: 0 }}
          aria-hidden="true"
        />
        {(toggle === "career" ? workData : educationData).map((item, idx) => (
          <div key={idx} className="flex flex-row items-start relative min-h-[120px]">
            {/* Timeline: image/circle */}
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
            </div>
            {/* Content */}
            <div className="flex-1 pb-8">
              <div className="text-muted text-xs font-semibold mb-1">
                {item.start && item.end
                  ? `${item.start} - ${item.end}`
                  : item.dates || item.obtained || ""}
              </div>
              <div className="text-2xl font-bold text-text mb-1">
                {item.name || item.school || item.company}
              </div>
              <div className="text-muted text-base mb-2">
                {item.role || item.title || ""}
              </div>
              {Array.isArray(item.description) && item.description.length > 0 && (
                <ul className="list-disc pl-5 text-text/70">
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
          <h2 className="text-text text-2xl font-bold">Featured Projects</h2>
          <a href="/projects" className="text-text hover:text-accent font-bold transition">
            View All Projects &rarr;
          </a>
        </div>
        <Projects limit={2} />
      </section>

      {/* Featured Certifications */}
      <section className="w-full max-w-4xl mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-text text-2xl font-bold">Recent Certifications</h2>
          <a href="/certifications" className="text-text hover:text-accent font-bold transition">
            View All Certifications &rarr;
          </a>
        </div>
        <Certifications limit={2} />
      </section>
    </main>
  );
}