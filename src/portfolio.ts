export const engineeringCases = [
  {
    id: "ambulance",
    name: "Ambulance systems",
    product: "Ambulance AI System",
    href: "/products/ambulance-ai",
    category: "EDGE SYSTEMS & EVENT INTELLIGENCE",
    title: "Turn separate events into a mission you can review.",
    summary:
      "A local event store connects a mission, its timeline and the evidence behind each recorded step.",
    inputs: ["Mission events", "Source evidence", "Operator corrections"],
    core: "Mission timeline",
    outputs: [
      "Traceable event history",
      "Replay & review",
      "Read-only fleet view",
    ],
    foundation: "Working software foundation",
    capabilities: [
      [
        "Event-led architecture",
        "Record events first, then build a consistent mission timeline from them.",
      ],
      [
        "Evidence and corrections",
        "Retain the original event while recording review and correction history.",
      ],
      [
        "Edge and fleet views",
        "A local cockpit and a separate read-only fleet view share a defined interface.",
      ],
    ],
    limit:
      "Engineering prototype. Vehicle, device and clinical integrations are scoped and validated for each project.",
  },
  {
    id: "operator",
    name: "Intelligent operator",
    product: "Intelligent Operator Assistant",
    href: "/products/intelligent-operator",
    category: "REAL-TIME SPEECH & STRUCTURED INFORMATION",
    title: "Turn a live conversation into information an operator can act on.",
    summary:
      "Streaming recognition, transcript fusion and structured fields bring the important details into one operator workspace.",
    inputs: ["Call audio", "Recognition streams", "Reviewed rules"],
    core: "Operator context",
    outputs: [
      "Readable transcript",
      "Facts & missing fields",
      "Operator review",
    ],
    foundation: "Pilot-stage software",
    capabilities: [
      [
        "Streaming speech",
        "Normalise recognition updates and keep a readable transcript as a conversation develops.",
      ],
      [
        "Structured assistance",
        "Extract key facts, flag missing information and surface rule-based prompts.",
      ],
      [
        "Failure isolation",
        "Separate recognition paths and show degraded operation when a path is unavailable.",
      ],
    ],
    limit:
      "Assistive software. Operators retain decisions; language, terminology and live-line performance require project validation.",
  },
  {
    id: "canvas",
    name: "Native desktop",
    product: "laofu canvas",
    href: "/products/laofu-canvas",
    category: "NATIVE INTERACTION & LOCAL PERSISTENCE",
    title: "Add an interaction layer to the content already on screen.",
    summary:
      "A transparent macOS overlay combines drawing tools, pointer pass-through and locally saved strokes.",
    inputs: [
      "Mouse or stylus",
      "Drawing gestures",
      "Keyboard shortcuts",
    ],
    core: "Native ink runtime",
    outputs: ["On-screen annotations", "Hide & resume", "Local recovery"],
    foundation: "Native macOS application",
    capabilities: [
      [
        "System-level interaction",
        "Switch between writing on screen and using the application underneath.",
      ],
      [
        "Native rendering",
        "A Swift and AppKit overlay uses Metal for drawing, with persistence kept off the rendering path.",
      ],
      [
        "Local continuity",
        "Store stroke events locally and restore the canvas when the app is reopened.",
      ],
    ],
    limit:
      "Release pending. The first version supports one display and on-screen annotation; AI and OCR are outside this version.",
  },
] as const;
export type EngineeringCase = (typeof engineeringCases)[number];
