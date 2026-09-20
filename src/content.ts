import { basePath } from "./i18n";

export const site = {
  name: "Fuyera Intelligence",
  origin: "https://fuyera.com",
  email: "hello@fuyera.com",
  appStore: "https://apps.apple.com/gb/app/fuyera-anchor/id6761323790",
  anchorPrivacy: "https://anchor.fuyera.com/privacy",
};

export const pages = {
  "/": {
    title: "Intelligent systems & everyday software — Fuyera",
    description:
      "Explore Fuyera’s professional systems and applications: ambulance mission intelligence, operator assistance, native desktop tools and product engineering.",
  },
  "/products": {
    title: "Products — Fuyera",
    description:
      "Explore Ambulance AI System, Intelligent Operator Assistant, laofu canvas and Anchor. Product capabilities, release status and project-based delivery through Fuyera.",
  },
  "/products/anchor": {
    title: "Anchor — Intentional phone use | Fuyera",
    description:
      "Record why you pick up your phone, keep your intention visible, and return to what matters. Explore Fuyera Anchor for iPhone and iPad.",
  },
  "/products/ambulance-ai": {
    title: "Ambulance AI System — Mission intelligence | Fuyera",
    description:
      "Explore a mission-centred ambulance system: local events, traceable evidence, timeline review and project-specific integration.",
  },
  "/products/intelligent-operator": {
    title: "Intelligent Operator Assistant — Speech & context | Fuyera",
    description:
      "Live transcription, structured call facts and human-reviewed assistance. Explore the pilot-stage software and its project adaptation requirements.",
  },
  "/products/laofu-canvas": {
    title: "laofu canvas — Write and explain on screen | Fuyera",
    description:
      "A native macOS screen annotation tool. Write, highlight and explain over existing content with eight tools and local persistence. Release pending.",
  },
  "/services": {
    title: "Product adaptation & engineering services — Fuyera",
    description:
      "Adapt a product, connect a workflow or build a prototype. Explore product adaptation, system integration and software development with Fuyera.",
  },
  "/technology": {
    title: "Engineering capabilities — Fuyera",
    description:
      "Explore event-driven edge systems, real-time speech processing and native desktop engineering through concrete product foundations.",
  },
  "/company": {
    title: "Company — Fuyera Intelligence",
    description:
      "Meet Fuyera: professional intelligent systems, everyday software products and related adaptation, integration and engineering services.",
  },
  "/contact": {
    title: "Contact — Fuyera",
    description:
      "Discuss a software product, workflow or integration project with Fuyera. Contact our team by email.",
  },
  "/support": {
    title: "Product support — Fuyera",
    description:
      "Find product information and support resources for Anchor, laofu canvas and professional system enquiries.",
  },
  "/legal/privacy": {
    title: "Website privacy — Fuyera",
    description:
      "How the Fuyera company website handles visits, email contact and links to other services.",
  },
  "/legal/terms": {
    title: "Website terms — Fuyera",
    description:
      "Information about using the Fuyera company website and how product and project terms are provided.",
  },
  "/404": {
    title: "Page not found — Fuyera",
    description: "Find your way to Fuyera products, services or support.",
  },
} as const;
export type PagePath = keyof typeof pages;
export function resolvePath(pathname: string): PagePath {
  let decoded: string;
  try { decoded = decodeURIComponent(pathname).replace(/\/{2,}/g, "/"); }
  catch { return "/404"; }
  const canonical = decoded === "/index.html" ? "/" : decoded.replace(/\.html$/, "");
  const path = basePath(canonical).replace(/\/+$/, "") || "/";
  return Object.hasOwn(pages, path) ? (path as PagePath) : "/404";
}

export const services = [
  {
    id: "workflow-engineering",
    name: "Product adaptation",
    short: "Adapt a product to your language, workflow and operating environment.",
    outcome: "A version fitted to the task.",
    audience:
      "Teams evaluating one of the professional systems for their own users.",
    input:
      "The product, target language, user roles and examples of the work it needs to support.",
    deliverable:
      "An adapted interface or workflow, validation examples and operating notes, as defined for the project.",
    acceptance:
      "Run agreed examples from input to output, and check the results against your criteria.",
    boundary:
      "Language, terminology, devices and live operating conditions require validation for the intended use.",
    icon: "workflow",
  },
  {
    id: "ai-integration",
    name: "System & workflow integration",
    short: "Connect speech, AI and data capabilities to the systems your team already uses.",
    outcome: "Interfaces with checkable inputs and outputs.",
    audience:
      "Teams adding model or AI service capabilities to an existing application.",
    input:
      "Interface documentation, operating constraints and the data permitted for the integration.",
    deliverable:
      "Integration components, configuration, tests and deployment or handover notes.",
    acceptance:
      "Check agreed calls, failure cases and operating conditions in the target environment.",
    boundary:
      "Third-party service costs, supported providers and ongoing maintenance are agreed in scope.",
    icon: "integration",
  },
  {
    id: "product-engineering",
    name: "Prototyping & product development",
    short: "Develop a focused prototype or improve an existing product.",
    outcome: "An idea made testable.",
    audience:
      "Founders and teams with a specific product problem to validate or improve.",
    input:
      "A target user, a priority task, existing materials and practical constraints.",
    deliverable:
      "A runnable prototype or agreed feature set, documentation and delivery materials.",
    acceptance:
      "Show that the intended user can complete the agreed task, with clear limits.",
    boundary:
      "Source access, delivery format, iteration rounds and support are agreed for each project.",
    icon: "product",
  },
] as const;
