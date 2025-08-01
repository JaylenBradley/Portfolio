import Markdown from "react-markdown";
import Icon from "./Icon";

// Dummy Badge and Card components for illustration
function Badge({ children, className }) {
  return <span className={`rounded bg-muted px-1 py-0 text-xs ${className}`}>{children}</span>;
}
function Card({ children, className }) {
  return <div className={`bg-card rounded-lg shadow border-2 border-border flex flex-col ${className}`}>{children}</div>;
}
function CardHeader({ children }) {
  return <div className="mb-2">{children}</div>;
}
function CardContent({ children, className }) {
  return <div className={`flex flex-col gap-2 ${className}`}>{children}</div>;
}
function CardFooter({ children, className }) {
  return <div className={`flex h-full flex-col items-start justify-between gap-4 ${className}`}>{children}</div>;
}
function CardTitle({ children }) {
  return <h3 className="text-primary text-xl font-bold mb-1">{children}</h3>;
}

// Props: { project }
export function ProjectCard({ project }) {
  const { name, href, description, image, tags, links } = project;

  return (
    <Card>
      <CardHeader>
        {image && (
          <a href={href || image} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt={name}
              width={500}
              height={300}
              className="h-40 w-full object-cover object-top rounded"
            />
          </a>
        )}
      </CardHeader>
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted">
          {description}
        </Markdown>
      </CardContent>
      <CardFooter>
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {[...tags].sort().map((tag) => (
              <Badge key={tag} className="px-1 py-0 text-[10px] bg-secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {[...links].sort((a, b) => a.name.localeCompare(b.name)).map((link, idx) => (
              <a href={link?.href} key={idx} target="_blank" rel="noopener noreferrer">
                <Badge className="flex gap-2 px-2 py-1 text-[10px] bg-accent">
                  <Icon name={link.icon} className="size-3" />
                  {link.name}
                </Badge>
              </a>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}