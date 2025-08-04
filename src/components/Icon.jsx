import * as LucideIcons from "lucide-react";

function toPascalCase(str) {
  return str
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

export default function Icon({ name, ...props }) {
  const iconName = toPascalCase(name);
  const LucideIcon = LucideIcons[iconName] || LucideIcons["Circle"];
  return <LucideIcon {...props} />;
}