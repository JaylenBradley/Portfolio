import {
  FaPython, FaReact, FaHtml5, FaDatabase, FaChartBar
} from "react-icons/fa";
import {
  SiPytorch, SiNumpy, SiPostgresql,
  SiFastapi, SiTailwindcss, SiFirebase, SiDotnet, SiTypescript
} from "react-icons/si";
import {FaAngular, FaGolang} from "react-icons/fa6";
import {TbBrandCSharp} from "react-icons/tb";

const icons = {
  pytorch: SiPytorch,
  numpy: SiNumpy,
  matplotlib: FaChartBar,
  fastapi: SiFastapi,
  postgresql: SiPostgresql,
  react: FaReact,
  tailwind: SiTailwindcss,
  firebase: SiFirebase,
  python: FaPython,
  sql: FaDatabase,
  htmlcss: FaHtml5,
  csharp: TbBrandCSharp ,
  ts: SiTypescript ,
  angular: FaAngular ,
  go: FaGolang,
  aspdotnet: SiDotnet
};

export default function ReactIcon({ name, className }) {
  const IconComponent = icons[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
}