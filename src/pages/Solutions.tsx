import { useLanguage } from "../i18n";
import { engineeringCases } from "../portfolio";
import { site } from "../content";
import { LinkButton, Arrow } from "../components/site/Site";
import { ProductDemonstration } from "../components/site/ProductDemonstration";

const solutionDetails = {
  ambulance: {
    title: "Every mission. One traceable timeline.",
    lead: "A mission-centred system for ambulance operations, bringing recorded events and their evidence into one reviewable picture.",
    audience:
      "For ambulance operators, system integrators and organisations evaluating a connected mission workflow.",
    features: [
      [
        "Mission workspace",
        "Create and follow a mission through its recorded states, events and operator reviews.",
      ],
      [
        "Evidence-linked timeline",
        "Keep source references and correction history alongside the event, so a reviewer can understand what changed and why.",
      ],
      [
        "Local recording & replay",
        "Record and replay events locally, with explicit adapter health and degraded-state information.",
      ],
      [
        "Read-only fleet view",
        "Bring multiple edge instances into a separate overview without giving the overview control over the vehicle.",
      ],
    ],
    adaptation:
      "Vehicle signals, positioning, cameras, speech and medical-device information are project integration directions. Device protocols, evidence quality and the operating environment are validated before those capabilities enter a deployment.",
    current:
      "The current engineering prototype includes mission and event handling, local storage, replay, an edge cockpit and a read-only fleet view. Its software foundation has been exercised with synthetic data. Live vehicle and medical-device integration remain project validation work.",
    intelligence:
      "The product direction is to combine signals into an understandable mission context, with evidence behind each proposed event. This foundation supports future multimodal interpretation and reviewed documentation; those AI and clinical integrations are not presented as completed features.",
    boundary:
      "Designed to support operational records and review. It does not replace dispatch, make autonomous clinical decisions or control safety-critical vehicle functions.",
  },
  operator: {
    title: "A clearer conversation. A better-informed operator.",
    lead: "An intelligent companion to a call-handling workstation, connecting live speech, key facts and reviewable prompts.",
    audience:
      "For emergency call centres and integration teams evaluating assistance alongside an existing call-handling system.",
    features: [
      [
        "Live transcription",
        "Follow recognition updates in a readable transcript, with separate recognition paths and visible service health.",
      ],
      [
        "Structured call facts",
        "Bring information extracted from the conversation into fields an operator can check, correct and complete.",
      ],
      [
        "Prompts with a purpose",
        "Use reviewed rules and missing information to guide the next question, while keeping the operator in charge.",
      ],
      [
        "Review and replay",
        "Inspect the session, transcription and operator actions, with replay and structured export for authorised review.",
      ],
    ],
    adaptation:
      "Language models, local terminology, call-audio connections and approved knowledge are configured for the intended organisation. Optional caller video and location require separate integration and acceptance.",
    current:
      "Pilot-stage software includes streaming recognition, transcript fusion, structured information, rule-based assistance and a review workspace. English-language recognition, real-line audio and organisation-specific content require validation for the target deployment.",
    intelligence:
      "Speech recognition makes a conversation readable. Transcript fusion and structured extraction make it inspectable. Rules surface missing facts and relevant prompts. Model output supports the operator’s work without taking over dispatch decisions.",
    boundary:
      "An operator-assistance system. It does not assign vehicles, choose hospitals, change dispatch state or replace professional judgement.",
  },
} as const;

export function Solution({ kind }: { kind: "ambulance" | "operator" }) {
  const { localHref, t } = useLanguage();
  const item = engineeringCases[kind === "ambulance" ? 0 : 1];
  const details = solutionDetails[kind];
  return (
    <>
      <section className="solution-hero">
        <div className="container">
          <a className="breadcrumb" href={localHref("/products")}>{t("← All products & solutions")}</a>
          <div className="solution-hero-grid">
            <div>
              <p className="eyebrow">{t(item.product)}</p>
              <p>{t(item.purpose)}</p>
              <span className="portfolio-status">
                {t(kind === "ambulance"
                  ? "Engineering prototype"
                  : "Pilot-stage software")}{t(" ")}{t("· Project-based delivery")}</span>
              <h1>{t(details.title)}</h1>
              <p className="lead">{t(item.description)}</p>
              <p className="small-note">{t(item.audience)}</p>
              <LinkButton href={localHref("#project-enquiry")}>{t(item.action)}</LinkButton>
            </div>
            <ProductDemonstration kind={kind} />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t("THE WORK IT SUPPORTS")}</p>
              <h2>
                {t(kind === "ambulance"
                  ? "See the mission.\nKeep the evidence."
                  : "Listen. Structure.\nSupport the next question.")}
              </h2>
            </div>
            <p>{t(details.audience)}</p>
          </div>
          <div className="solution-features">
            {details.features.map(([title, body]) => (
              <article key={title}>
                <h3>{t(title)}</h3>
                <p>{t(body)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section intelligence-section">
        <div className="container two-column">
          <div>
            <p className="eyebrow">{t("THE INTELLIGENCE IN THE SYSTEM")}</p>
            <h2>
              {t(kind === "ambulance"
                ? "Context built from evidence."
                : "Useful context, while the call unfolds.")}
            </h2>
          </div>
          <div>
            <p className="lead">{t(details.intelligence)}</p>
            <a className="text-link" href={localHref("/technology")}>{t("Explore the engineering")}<Arrow /></a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container two-column">
          <div>
            <p className="eyebrow">{t("PRODUCT & DELIVERY")}</p>
            <h2>{t("What works today.")}<br />{t("What your project needs.")}</h2>
          </div>
          <div>
            <h3>{t("Current capabilities")}</h3>
            <p>{t(details.current)}</p>
            <h3>{t("For your deployment")}</h3>
            <p>{t(details.adaptation)}</p>
            <p className="product-boundary">{t(details.boundary)}</p>
          </div>
        </div>
      </section>
      <section className="solution-enquiry section" id="project-enquiry">
        <div className="container two-column">
          <div>
            <p className="eyebrow">{t("WORK WITH FUYERA")}</p>
            <h2>{t("Discuss your project requirements.")}</h2>
          </div>
          <div>
            <p>{t("Tell us your operating scenario, language, existing systems and intended users. We discuss product fit, English-language adaptation and integration around an agreed scope.")}</p>
            <p>{t("Localisation, interfaces, a demonstration and pilot acceptance are planned together. Delivery timing is set after reviewing the requirements.")}</p>
            <LinkButton
              href={localHref(`mailto:${site.email}?subject=${encodeURIComponent(item.product + " — project enquiry")}`)}
            >{t("Email about this solution")}</LinkButton>
            <a className="text-link section-link" href={localHref(`/contact?topic=${kind === "ambulance" ? "ambulance-ai" : "intelligent-operator"}`)}>{t("Prepare your enquiry")}<Arrow /></a>
            <a className="text-link section-link" href={localHref("/services")}>{t("How we deliver projects")}<Arrow />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export function Ambulance() {
  return <Solution kind="ambulance" />;
}
export function IntelligentOperator() {
  return <Solution kind="operator" />;
}

export function Canvas() {
  const { localHref, t } = useLanguage();
  return (
    <>
      <section className="canvas-intro section">
        <div className="container">
          <a className="breadcrumb" href={localHref("/products")}>{t("← All products & solutions")}</a>
          <div className="canvas-heading">
            <div>
              <p className="eyebrow">{t("LAOFU CANVAS · MACOS")}</p>
              <h1>{t("Your screen.")}<br />{t("Your thinking space.")}</h1>
            </div>
            <div>
              <span className="portfolio-status">{t("Release pending")}</span>
              <p className="lead">{t("Write, highlight and explain over videos, slides, PDFs and web pages. Keep the content you are working with in view.")}</p>
              <LinkButton href={localHref("#canvas-details")}>{t("Explore the experience")}</LinkButton>
            </div>
          </div>
          <figure className="canvas-presentation">
            <img
              src="/images/laofu-canvas-scenes.png"
              alt={t("Illustrated examples of laofu canvas used over a video, slides, a PDF and a web page")}
              width="1586"
              height="992"
              fetchPriority="high"
            />
            <figcaption>{t("Teaching, presenting and explaining on screen.")}</figcaption>
          </figure>
        </div>
      </section>
      <section className="section" id="canvas-details">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t("A NATIVE DESKTOP TOOL")}</p>
              <h2>{t("Stay with the content.")}<br />{t("Add your explanation.")}</h2>
            </div>
            <p>{t("For teachers, presenters, parents and anyone who wants to make an idea clearer on screen.")}</p>
          </div>
          <div className="solution-features">
            <article>
              <h3>{t("Write or pass through.")}</h3>
              <p>{t("A shortcut switches between the transparent drawing layer and the application underneath. Open a document, explain it and return to work.")}</p>
            </article>
            <article>
              <h3>{t("Eight tools, one toolbar.")}</h3>
              <p>{t("Pen, highlighter, eraser, line, arrow, rectangle, ellipse and pointer. Choose a colour and stroke width to suit the explanation.")}</p>
            </article>
            <article>
              <h3>{t("Hide, then pick up again.")}</h3>
              <p>{t("Leaving Ink mode hides your marks. When you return, keep the drawing, clear it or cancel.")}</p>
            </article>
            <article>
              <h3>{t("Keep your canvas locally.")}</h3>
              <p>{t("The drawing is stored on the Mac and can be restored when the application reopens. No account is needed for this workflow.")}</p>
            </article>
          </div>
        </div>
      </section>
      <section className="section intelligence-section">
        <div className="container two-column">
          <div>
            <p className="eyebrow">{t("ENGINEERING BEHIND THE EXPERIENCE")}</p>
            <h2>{t("A native interaction layer.")}</h2>
          </div>
          <div>
            <p className="lead">{t("Swift and AppKit handle the overlay and input. Metal draws the ink. Local event storage keeps the drawing recoverable.")}</p>
            <p>{t("Rendering and storage follow separate paths, so persistence work stays off the rendering thread. The product demonstrates desktop interaction engineering alongside the portfolio’s AI systems.")}</p>
            <a className="text-link" href={localHref("/technology")}>{t("Explore the engineering")}<Arrow />
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container two-column">
          <div>
            <p className="eyebrow">{t("VERSION & AVAILABILITY")}</p>
            <h2>{t("Made for macOS.")}</h2>
          </div>
          <div>
            <dl className="feature-list">
              <div>
                <dt>{t("Platform")}</dt>
                <dd>{t("macOS 14 or later; one connected display in the first release.")}</dd>
              </div>
              <div>
                <dt>{t("Status")}</dt>
                <dd>{t("Prepared for release. Public download availability will be added when the release is live.")}</dd>
              </div>
              <div>
                <dt>{t("Behaviour")}</dt>
                <dd>{t("Marks stay fixed on screen; they do not follow a page as it scrolls.")}</dd>
              </div>
              <div>
                <dt>{t("First-release scope")}</dt>
                <dd>{t("Screen annotation and local persistence. AI, OCR, cloud sync and screenshot export are outside this version.")}</dd>
              </div>
            </dl>
            <div className="resource-links">
              <a href={localHref("https://laofuai.com/products/laofu-canvas/support")}>{t("Canvas support")}<Arrow diagonal />
              </a>
              <a href={localHref("https://laofuai.com/products/laofu-canvas/privacy")}>{t("Canvas privacy information")}<Arrow diagonal />
              </a>
              <a href={localHref(`mailto:${site.email}?subject=laofu%20canvas%20enquiry`)}>{t("Ask about laofu canvas")}<Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
