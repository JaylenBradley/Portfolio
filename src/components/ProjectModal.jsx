import { useEffect, useRef } from "react";
import Icon from "./Icon";

export default function ProjectModal({ project, open, onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  if (!open || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="bg-background rounded-xl shadow-xl max-w-xl w-full mx-4 p-6 pt-2 relative animate-fadeIn"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="cursor-pointer text-muted hover:text-accent bg-background rounded-full p-2 shadow"
            aria-label="Close"
          >
            <Icon name="x" className="size-6"/>
          </button>
        </div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-lg mb-6 border border-primary"
        />
        <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
        <div className="text-text/50 text-base mb-3">{project.summary}</div>
        {project.tags && project.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-2 py-1 rounded bg-primary text-text/80 hover:bg-primary/80 shadow  text-xs">
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mb-2">
          {Array.isArray(project.description) ? (
            <ul className="list-disc pl-5 text-text/70">
              {project.description.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          ) : (
            <p>{project.description}</p>
          )}
        </div>
        <div className="flex gap-3">
          {project.links && project.links.length > 0 && (
            <div className="flex gap-3">
              {project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md bg-text text-black flex items-center gap-2 hover:bg-text/80 transition"
                >
                  <Icon name={link.icon} className="size-5" />
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}