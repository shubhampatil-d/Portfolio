import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiFlask,
} from "react-icons/si";
import {
  FramerMotionIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import PythonSvg from "@/public/icons/python.svg";
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
// import SassSvg from "@/public/icons/sass.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
// import TypescriptSvg from "@/public/icons/typescript.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
// import SolidjsSvg from "@/public/icons/solidjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import MuiSvg from "@/public/icons/mui.svg";
import ViteSvg from "@/public/icons/vite.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import AwsSvg from "@/public/icons/aws.svg";
import PostmanSvg from "@/public/icons/postman.svg";
// import CppPng from "@/public/icons/cpp.png";
// import DjangoPng from "@/public/icons/django.png";
// import MatplotlibPng from "@/public/icons/matplotlib.png";
// import PandasPng from "@/public/icons/pandas.png";
// import NumpyPng from "@/public/icons/numpy.png";
// import MysqlPng from "@/public/icons/mysql.png";
// import SqliteJpg from "@/public/icons/sqlite.jpg";
// import ThunderClientPng from "@/public/icons/thunder client.png";
// import PowerBIJpg from "@/public/icons/powerBI.jpg";
// import VSCodeSvg from "@/public/icons/vscode.svg";
// import CursorPng from "@/public/icons/cursor.png";
// import DataAnalysisPng from "@/public/icons/data_analysis.png";
// import DataVisualisationPng from "@/public/icons/data_visualisation.png";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      { name: "HTML", icon: HtmlSvg },
      { name: "CSS", icon: CsssSvg },
      { name: "C++", icon: "/icons/cpp.png" },
      { name: "Javascript", icon: JavascriptSvg },
      { name: "Typescript", icon: "/icons/typescript.svg" },
      { name: "Python", icon: PythonSvg },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      { name: "Reactjs", icon: ReactjsSvg },
      { name: "Nextjs", icon: SiNextdotjs },
      { name: "Redux", icon: ReduxSvg },
      { name: "Tailwindcss", icon: TailwindcssSvg },
      { name: "MUI", icon: MuiSvg },
      { name: "Framer motion", icon: FramerMotionIcon },
      { name: "Vite", icon: ViteSvg },
      { name: "Vite PWA", icon: VitePwaIcon },
      { name: "React Router Dom", icon: ReactRouterDomIcon },
      { name: "Django", icon: "/icons/django.png" },
      { name: "Matplotlib", icon: "/icons/matplotlib.png" },
      { name: "Pandas", icon: "/icons/pandas.png" },
      { name: "Numpy", icon: "/icons/numpy.png" },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      { name: "Nodejs", icon: NodejsSvg },
      { name: "Express", icon: SiExpress },
      { name: "Socket.io", icon: SiSocketdotio },
      { name: "Flask", icon: SiFlask },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      { name: "MongoDB", icon: MongoDBSvg },
      { name: "Postgress", icon: PostgressSvg },
      { name: "Prisma", icon: SiPrisma },
      { name: "MySQL", icon: "/icons/mysql.png" },
      { name: "SQLite", icon: "/icons/sqlite.jpg" },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      { name: "Git", icon: GitSvg },
      { name: "Docker", icon: DockerSvg },
      { name: "AWS", icon: AwsSvg },
      { name: "Postman", icon: PostmanSvg },
      { name: "Thunder Client", icon: "/icons/thunder client.jpg" },
      { name: "Power BI", icon: "/icons/powerBI.jpg" },
      { name: "VS Code", icon: "/icons/vscode.jpg" },
      { name: "Cursor", icon: "/icons/cursor.jpg" },
    ],
  },
  {
    sectionName: "Data Science and Analysis",
    skills: [
      { name: "Matplotlib", icon: "/icons/matplotlib.png" },
      { name: "Pandas", icon: "/icons/pandas.png" },
      { name: "Numpy", icon: "/icons/numpy.png" },
      { name: "Power BI", icon: "/icons/powerBI.jpg" },
      { name: "Data Analysis", icon: "/icons/data_analysis.png" },
      { name: "Data Visualization", icon: "/icons/data_visualisation.png" },
    ],
  },
];
