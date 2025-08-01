import ReactMarkdown from "react-markdown";
import Icon from "./Icon";
import { Badge } from "./ui/Badge";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "./ui/Card";


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
        <ReactMarkdown
          components={{
            p: ({ node, ...props }) => (
              <p className="prose max-w-full text-pretty font-sans text-xs text-muted" {...props} />
            ),
          }}
        >
          {description}
        </ReactMarkdown>
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