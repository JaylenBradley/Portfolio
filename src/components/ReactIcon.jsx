import {
  FaPython, FaJs, FaReact, FaNodeJs, FaHtml5, FaDatabase, FaChartBar
} from "react-icons/fa";
import {
  SiTensorflow, SiPytorch, SiNumpy, SiMongodb, SiPostgresql,
  SiFastapi, SiExpress, SiTailwindcss, SiFirebase,
} from "react-icons/si";

const icons = {
  tensorflow: SiTensorflow,
  pytorch: SiPytorch,
  numpy: SiNumpy,
  matplotlib: FaChartBar,
  fastapi: SiFastapi,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  react: FaReact,
  express: SiExpress,
  node: FaNodeJs,
  tailwind: SiTailwindcss,
  firebase: SiFirebase,
  python: FaPython,
  js: FaJs,
  sql: FaDatabase,
  htmlcss: FaHtml5,
};

export default function ReactIcon({ name, className }) {
  const IconComponent = icons[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
}