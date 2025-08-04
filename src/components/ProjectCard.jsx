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


export function ProjectCard({ project, onMoreInfo }) {
  const { name, href, summary, image, tags, links } = project;

  return (
    <Card>
      <CardHeader>
        {image && (
          <button
            type="button"
            onClick={onMoreInfo}
            className="block w-full"
            style={{ padding: 0, border: "none", background: "none" }}
            aria-label={`Show more info about ${name}`}
          >
            <img
              src={image}
              alt={name}
              width={500}
              height={300}
              className="h-40 w-full cursor-pointer object-cover object-top rounded"
            />
          </button>
        )}
      </CardHeader>
      <CardContent>
        <CardTitle className="text-text mb-2">{name}</CardTitle>
        <ReactMarkdown
          components={{
            p: ({ node, ...props }) => (
              <p className="prose max-w-full text-pretty font-sans text-xs text-text/50" {...props} />
            ),
          }}
        >
          {summary}
        </ReactMarkdown>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {[...tags].sort().map((tag) => (
              <Badge key={tag} className="px-1 py-0 text-[10px]">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <div className="flex flex-row justify-between items-center w-full gap-2 mt-2">
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links && links.length > 0 &&
              links.map((link, idx) => (
                <a href={link?.href} key={idx} target="_blank" rel="noopener noreferrer">
                  <Badge variant="secondary" className="flex gap-2 px-2 py-1 text-[10px]">
                    <Icon name={link.icon} className="size-3" />
                    {link.name}
                  </Badge>
                </a>
              ))}
          </div>
          <button
            type="button"
            onClick={onMoreInfo}
            className="ml-auto px-3 py-1 rounded-md cursor-pointer bg-text text-black text-xs shadow hover:bg-text/80 transition"
          >
            More Info
          </button>
        </div>
      </CardFooter>
    </Card>
  );
}