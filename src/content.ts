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
    title: "AI products. Practical engineering. — Fuyera",
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
      "Live transcription, structured call facts and reviewable assistance for operators. Explore the software foundation and an English-language project edition.",
  },
  "/products/laofu-canvas": {
    title: "laofu canvas — Write and explain on screen | Fuyera",
    description:
      "A native macOS screen annotation tool. Write, highlight and explain over existing content with eight tools and local persistence. Release pending.",
  },
  "/services": {
    title: "Engineering services — Fuyera",
    description:
      "Workflow engineering, AI integration and product engineering, with defined scope, reviewable results and a clear handover.",
  },
  "/technology": {
    title: "Engineering capabilities — Fuyera",
    description:
      "Explore event-driven edge systems, real-time speech processing and native desktop engineering through concrete product foundations.",
  },
  "/company": {
    title: "Company — Fuyera Intelligence",
    description:
      "Meet Fuyera: an AI product and intelligent software company combining product thinking with practical engineering.",
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
    name: "Workflow Engineering",
    short: "Turn a recurring task into a clear, reviewable workflow.",
    outcome: "Connected steps. Useful outputs.",
    audience:
      "Teams whose work moves between documents, tools and manual checks.",
    input:
      "Representative materials, the current steps and the decisions that need human review.",
    deliverable:
      "A working flow, review points, structured outputs and operating instructions.",
    acceptance:
      "Run agreed examples from input to output, and check the results against your criteria.",
    boundary:
      "Human review remains where it matters. A project does not imply fully unattended operation.",
    icon: "workflow",
  },
  {
    id: "ai-integration",
    name: "AI Integration & Deployment",
    short: "Connect AI capabilities to the software your team uses.",
    outcome: "A considered fit for your system.",
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
    name: "Product Engineering",
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
