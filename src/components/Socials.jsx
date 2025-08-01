import data from "../data/socials.json";
import Icon from "./Icon";

export default function Socials({ variant = "icon" }) {
  const socials = data.socials;

  if (variant === "button") {
    return (
      <div className="flex gap-2 mt-2">
        {socials.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 gap-2 curspr-pointer rounded font-bold flex items-center bg-card text-primary hover:text-text"
          >
            <Icon name={item.icon} className="size-4" />
          </a>
        ))}
      </div>
    );
  }

  return (
    <section className="flex gap-6">
      {socials.map((item) => (
        <a
          href={item.href}
          key={item.name}
          target="_blank"
          className="text-muted-foreground hover:text-foreground"
          rel="noopener noreferrer"
          title={item.name}
        >
          <span className="sr-only">{item.name}</span>
          <Icon name={item.icon} aria-hidden="true" className="size-5" />
        </a>
      ))}
    </section>
  );
}