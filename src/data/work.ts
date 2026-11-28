export interface Highlight {
  /** Short bold lead-in, e.g. "Frontend Performance". Optional. */
  lead?: string;
  text: string;
}

export interface Role {
  title: string;
  company: string;
  location?: string;
  /** "YYYY-MM" */
  start: string;
  /** "YYYY-MM". Leave out for a current role ("Present"). */
  end?: string;
  highlights: Highlight[];
  /** Key technologies, most important first. */
  stack?: string[];
}

// Work timeline, newest first. The section renders whatever is here, in this order.
// Text is copied from the LinkedIn profile (Nov 2026); the trailing tech list on each bullet
// moved into `stack`.
export const work: Role[] = [
  {
    // CHECK: LinkedIn says "Software Engineer Intern", resume says "Software Developer Intern".
    title: "Software Engineer Intern",
    company: "Easley-Dunn Productions",
    location: "Los Angeles, CA", // from the resume; LinkedIn has no location
    start: "2026-09",
    highlights: [
      {
        lead: "UI/UX Redesign",
        text: "Led the end-to-end redesign of an existing product, turning Figma designs into React interfaces that simplified core workflows and improved navigation.",
      },
      {
        lead: "Requirements to Features",
        text: "Gathered user requirements and pain points and turned them into reusable UI components and features, shipped in an Agile/Kanban workflow with AI-assisted development.",
      },
      {
        lead: "Data Visualization",
        text: "Building the frontend and data visualizations for a game design simulation tool.",
      },
    ],
    stack: ["React", "TypeScript", "Figma", "Kanban", "UI/UX Research", "Gathering customer requirements"],
  },
  {
    title: "Research Assistant",
    company: "NYU Courant",
    location: "New York, NY", // CHECK: LinkedIn has no location for this role
    start: "2026-02",
    end: "2026-04",
    highlights: [
      {
        lead: "Computer Vision",
        text: "Fine-tuned RT-DETR and YOLOv11 object detection models to detect birds in wildlife images for climate change research.",
      },
      {
        lead: "Model Evaluation",
        text: "Compared transformer-based (RT-DETR) and CNN-based (YOLOv11) detectors on accuracy and inference speed, and selected YOLOv11 for the project.",
      },
    ],
    stack: ["Python", "PyTorch", "Ultralytics"],
  },
  {
    title: "Grader",
    company: "NYU Courant",
    location: "New York, NY",
    start: "2025-09",
    end: "2025-12",
    highlights: [
      {
        text: "Graded assignments and exams for the graduate course Optimization and Linear Algebra for Data Science students.",
      },
    ],
    stack: ["Optimization and Linear Algebra"],
  },
  {
    title: "Software Engineer",
    company: "Wipro",
    location: "Gurugram, India",
    start: "2021-07",
    end: "2024-07",
    // CHECK: LinkedIn lists 10 bullets. 4 are shown; the rest are commented out below. Swap freely.
    highlights: [
      {
        lead: "Full-Stack Development",
        text: "Built enterprise invoicing workflows for a B2B fintech SaaS platform serving 10K+ users and led multiple core modules end to end, from design through delivery.",
      },
      {
        lead: "Frontend Performance",
        text: "Rearchitected transaction tables rendering 1K+ rows with virtual scrolling, pagination, and memoized transformations, contributing to a 90% cut in critical page load time (5 min to 30 sec).",
      },
      {
        lead: "Backend Reliability",
        text: "Implemented conditional DTO mappings and exception handling in Java middleware, reducing transaction-related failures by 15%.",
      },
      {
        lead: "Software Quality",
        text: "Resolved 60+ defects through unit, integration, and regression testing and refactored tightly coupled components and shared state, reducing production defects by 30%.",
      },
      // {
      //   lead: "Mentorship",
      //   text: "Mentored 2 new engineers on the platform's codebase, code reviews, and release process, getting both shipping production code within 3 weeks.",
      // },
      // {
      //   lead: "Release Management",
      //   text: "Ran monthly production releases and drove root-cause analysis on critical incidents, taking high-priority regressions from diagnosis to deployment in 1-2 hours.",
      // },
      // {
      //   lead: "Workflow Redesign",
      //   text: "Redesigned the invoice approval workflow, removing 2-3 page navigations per invoice and speeding up approvals for client businesses.",
      // },
      // {
      //   lead: "API Integration",
      //   text: "Refactored observable pipelines and added shareReplay response caching, eliminating 10+ redundant API calls per user session.",
      // },
      // {
      //   lead: "Cross-Functional Delivery",
      //   text: "Partnered with product, design, backend, and QA to ship customer-facing invoicing workflows end to end, refining API contracts with backend engineers, contributing to a ~20% improvement in customer satisfaction.",
      // },
      // {
      //   lead: "Web Accessibility",
      //   text: "Brought high-traffic workflows in line with WCAG standards using semantic markup, keyboard navigation, and consistent validation patterns.",
      // },
    ],
    stack: ["Angular", "TypeScript", "Java", "RxJS", "NgRx", "Azure DevOps"],
  },
  {
    title: "Research Intern",
    company: "Punjab Remote Sensing Centre",
    location: "Ludhiana, India",
    start: "2021-01",
    end: "2021-06",
    highlights: [
      {
        lead: "IoT and Machine Learning",
        text: "Built a greenhouse wireless sensor network that sent sensor data through XBee and Arduino and used ML to estimate signal strength (RSSI). Published in the International Journal of Sensors, Wireless Communications and Control.",
      },
      {
        lead: "Deep Learning",
        text: "Designed and trained LSTM models for spatio-temporal forecasting of vegetation indices, including outlier detection, preprocessing, and evaluation. Published as a peer-reviewed conference paper.",
      },
    ],
    // CHECK: LinkedIn lists no stack here; these are taken from the bullet text.
    stack: ["Arduino", "XBee", "LSTM"],
  },
  {
    title: "Intern",
    company: "DSB Edu Tech",
    location: "Ludhiana, India",
    start: "2019-05",
    end: "2019-07",
    highlights: [
      {
        lead: "Frontend Development",
        text: "Built responsive pages for live production websites across multiple digital products, improving cross-device usability.",
      },
    ],
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
];
