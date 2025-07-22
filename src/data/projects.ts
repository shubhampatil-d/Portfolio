import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
// import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "TravelBook",
    href: "/projects",
    tags: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
    image: {
      LIGHT: "/images/projects/travel1.png",
      DARK: "/images/projects/travel2.png",
    },
  },
  {
    index: 1,
    title: "Smart_Log_Analyzer_for_Distributed_System",
    href: "/projects",
    tags: [
      "Python",
      "Flask",
      "Pandas",
      "SciPy",
      "Matplotlib",
      "HTML",
      "Jinja2",
    ],
    image: {
      LIGHT: "/images/projects/log1.png",
      DARK: "/images/projects/log2.png",
    },
  },
  {
    index: 2,
    title: "BiteBlitz",
    href: "/projects",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "RESTful API",
      "Python",
      "Flask",
      "Jinja2",
      "HTML5",
      "CSS",
      "Bootstrap",
    ],
    image: {
      LIGHT: "/images/projects/foodi1",
      DARK: "/images/projects/manyGamesDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "TravelBook",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/travel1.png",
      // "/images/projects/travel1.png",
    ],
    description:
      "A modern travel planning app built with Vite, TypeScript, React, shadcn-ui, and Tailwind CSS.",
    sourceCodeHref: "https://github.com/shubhampatil-d/wanderer-web-trips",
    // liveWebsiteHref: "https://preview--wanderer-web-trips.lovable.app/auth",
  },
  {
    name: "Smart_Log_Analyzer_for_Distributed_System",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/log1.png",
      "/images/projects/log2.png",
      "/images/projects/log3.png",
    ],
    description:
      "A log analyzer for distributed systems using Python, Flask, Pandas, SciPy, Matplotlib, HTML, and Jinja2.",
    sourceCodeHref:
      "https://github.com/shubhampatil-d/Smart_Log_Analyzer_for_Distributed_System",
    // liveWebsiteHref: "",
  },
  {
    name: "BiteBlitz",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: ["/images/projects/foodi2.png", "/images/projects/foodi1.png"],
    description:
      "A food delivery and management platform using Node.js, Express.js, MongoDB, JWT, RESTful API, Python, Flask, Jinja2, HTML5, CSS, and Bootstrap.",
    sourceCodeHref: "https://github.com/shubhampatil-d/Food_delivery",
    // liveWebsiteHref: "#",
  },
  {
    name: "Insurance-Management-System",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/insu1.png",
      "/images/projects/insu2.png",
      "/images/projects/insu3.png",
      // "/images/projects/insu4.png",
      "/images/projects/insu5.png",
      "/images/projects/insu6.png",
    ],
    description:
      "Keep track of customer and their policies.This app is made using Python,Django HTML, CSS,Sqlite3 ",
    sourceCodeHref:
      "https://github.com/shubhampatil-d/Insurance-Management-System",
    // liveWebsiteHref: "https://kannban-board.vercel.app",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/port1.png", "/images/projects/port2.png"],
    description:
      "My personal portfolio website made using NodeJD, ExpressJS and Django.",
    sourceCodeHref: "https://github.com/shubhampatil-d/Portfolio",
    // liveWebsiteHref: siteMetadata.siteUrl,
  },

  {
    name: "Crop Recommendation System",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      // "/images/projects/manyGamesDark.webp",
      // "/images/projects/manyGamesLight.webp",
      "/images/projects/crop2.png",
      "/images/projects/crop1.png",
      "/images/projects/crop3.png",
    ],
    description:
      "Crop Recommendation System is built using Machine Learning models like decision tree, random forest,logistic regression.",
    sourceCodeHref:
      "https://www.kaggle.com/code/shubhampatil1999/data-analysis-and-machine-learning-on-crop-dataset",
    // liveWebsiteHref: "https://manygames.vercel.app",
  },
  {
    name: "Exploratory Data Analysis ",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/Explore1.png",
      "/images/projects/Explore2.png",
      "/images/projects/Expore3.png",
    ],
    description:
      "Performed data analysis and visualization using libraries such as NumPy and Pandas, and created various plots including pie charts, word clouds, choropleth maps, box plots, bar plots, and line plots to derive actionable insights",
    sourceCodeHref:
      "https://www.kaggle.com/code/shubhampatil1999/exploratory-data-analysis-on-salary-dataset",
    // liveWebsiteHref: "https://bumbaiya.github.io/CovidTracker",
  },
  {
    name: "Ways to Implement ML Models",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      // "/images/projects/stockPredictor.webp",
      // "/images/projects/stockPredictorCandleChart.webp",
      // "/images/projects/stockPredictorCompareChart.webp",
      "/images/projects/ML.png",
    ],
    description:
      "Implemented various machine learning models including Support Vector Machine (SVM), Decision Tree, Regression, K-Nearest Neighbors (KNN), and Random Forest for predictive analysis and classification tasks",
    sourceCodeHref:
      "https://www.kaggle.com/code/shubhampatil1999/simplest-way-to-implement-ml-models",
  },
];
