import { useLanguage } from "../../i18n";
import { useState } from "react";
import { engineeringCases } from "../../portfolio";
import type { EngineeringCase } from "../../portfolio";
import { Arrow, LinkButton } from "./Site";
import { ProductDemonstration } from "./ProductDemonstration";

export function SystemDiagram({
  item,
  compact = false,
}: {
  item: EngineeringCase;
  compact?: boolean;
}) {
  const { t } = useLanguage();
  return (
    <div
      className={`system-diagram diagram-${item.id} ${compact ? "diagram-compact" : ""}`}
    >
      <p className="diagram-label">{t("CAPABILITY MAP ")}<span>{t("Illustrative workflow")}</span>
      </p>
      <div className="system-flow">
        <ul className="signal-list">
          {item.inputs.map((s) => (
            <li key={s}>
              <span aria-hidden="true" />
              {t(s)}
            </li>
          ))}
        </ul>
        <div className="system-core">
          <span className="core-symbol" aria-hidden="true">
            {t(item.id === "canvas" ? "↗" : item.id === "operator" ? "≈" : "⋮")}
          </span>
          <strong>{t(item.core)}</strong>
          <span>{t(item.id === "canvas" ? "Draw · hide · restore" : "Capture · structure · review")}</span>
        </div>
        <ul className="output-list">
          {item.outputs.map((s) => (
            <li key={s}>
              <span aria-hidden="true">↳</span>
              {t(s)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function EngineeringShowcase() {
  const { t, localHref } = useLanguage();
  const [selected, setSelected] = useState(0);
  const item = engineeringCases[selected];
  return (
    <section className="engineering-showcase section" id="engineering">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t("ENGINEERING YOU CAN SEE")}</p>
            <h2>{t("From live signals")}<br />{t("to useful systems.")}</h2>
          </div>
          <p>{t("Event intelligence. Real-time speech. Native interaction. Explore the engineering behind three concrete product directions.")}</p>
        </div>
        <div
          className="engineering-switcher"
          role="group"
          aria-label={t("Explore engineering capabilities")}
        >
          {engineeringCases.map((entry, i) => (
            <button
              key={entry.id}
              type="button"
              aria-pressed={selected === i}
              aria-controls="engineering-example"
              onClick={() => setSelected(i)}
            >
              {t(entry.name)}
              <Arrow />
            </button>
          ))}
        </div>
        <div
          className="engineering-example"
          id="engineering-example"
        >
          <div className="engineering-visual">
            <ProductDemonstration key={item.id} kind={item.id} />
            <div className="engineering-caption">
              <span>{t(item.foundation)}</span>
              <a href={localHref(item.href)}>
                {t(item.product)}
                <Arrow diagonal />
              </a>
            </div>
          </div>
          <div className="engineering-proof">
            <p className="eyebrow">{t(item.category)}</p>
            <h3 aria-live="polite">{t(item.title)}</h3>
            <p>{t(item.summary)}</p>
            <dl>
              {item.capabilities.map(([name, body]) => (
                <div key={name}>
                  <dt>{t(name)}</dt>
                  <dd>{t(body)}</dd>
                </div>
              ))}
            </dl>
            <p className="engineering-limit">{t(item.limit)}</p>
          </div>
        </div>
        <a className="text-link section-link" href={localHref("/technology")}>{t("Explore our engineering capabilities")}<Arrow />
        </a>
      </div>
    </section>
  );
}

export function ProfessionalProducts() {
  const { t, localHref } = useLanguage();
  return (
    <div className="professional-products">
      {engineeringCases.slice(0, 2).map((item) => (
        <article
          className={`professional-product product-${item.id}`}
          key={item.id}
        >
          <SystemDiagram item={item} compact />
          <div className="professional-copy">
            <span className="portfolio-status">
              {t(item.id === "ambulance"
                ? "Engineering prototype"
                : "Pilot-stage solution")}
            </span>
            <h3>{t(item.product)}</h3>
            <p>
              {t(item.id === "ambulance"
                ? "Bring mission events, evidence and review into a traceable operational timeline."
                : "Bring live transcription, key facts and operator prompts into one call-handling workspace.")}
            </p>
            <ul className="product-tags">
              {(item.id === "ambulance"
                ? ["Mission timeline", "Local event store", "Evidence review"]
                : ["Streaming speech", "Structured facts", "Human decisions"]
              ).map((tag) => (
                <li key={tag}>{t(tag)}</li>
              ))}
            </ul>
            <LinkButton href={localHref(item.href)} secondary>{t("Explore the system")}</LinkButton>
          </div>
        </article>
      ))}
    </div>
  );
}

export function DesktopProducts() {
  const { localHref, t } = useLanguage();
  return (
    <div className="desktop-products">
      <article className="desktop-product canvas-product">
        <a
          className="desktop-visual canvas-visual"
          href={localHref("/products/laofu-canvas")}
          aria-label={t("Explore laofu canvas")}
        >
          <img
            src="/images/laofu-canvas-scenes.png"
            alt={t("laofu canvas illustration showing annotations over videos, slides, PDFs and web pages")}
            width="1586"
            height="992"
            loading="lazy"
          />
        </a>
        <div className="desktop-copy">
          <p className="eyebrow">{t("MACOS · SCREEN ANNOTATION")}</p>
          <h3>{t("laofu canvas")}</h3>
          <span className="portfolio-status">{t("Release pending")}</span>
          <p>{t("Write, highlight and explain directly over the content on your screen. Switch back to your apps with a shortcut.")}</p>
          <LinkButton href={localHref("/products/laofu-canvas")} secondary>{t("Explore laofu canvas")}</LinkButton>
        </div>
      </article>
      <article className="desktop-product anchor-product">
        <a
          className="desktop-visual anchor-visual"
          href={localHref("/products/anchor")}
          aria-label={t("Explore Anchor")}
        >
          <img
            src="/images/anchor-3.jpg"
            alt={t("Anchor app with an active intention")}
            width="443"
            height="960"
            loading="lazy"
          />
          <div>
            <span>{t("INTENTION FIRST")}</span>
            <p>{t("A little clarity.")}<br />{t("Before the next tap.")}</p>
          </div>
        </a>
        <div className="desktop-copy">
          <p className="eyebrow">{t("IPHONE & IPAD · PERSONAL FOCUS")}</p>
          <h3>{t("Anchor")}</h3>
          <span className="portfolio-status">{t("On the App Store")}</span>
          <p>{t("Record why you pick up your phone, keep your purpose visible and return to what matters.")}</p>
          <LinkButton href={localHref("/products/anchor")} secondary>{t("Explore Anchor")}</LinkButton>
        </div>
      </article>
    </div>
  );
}

export function PortfolioRelationship() {
  const { t, localHref } = useLanguage();
  return (
    <section className="portfolio-relationship section">
      <div className="container">
        <p className="eyebrow">{t("ONE COMMERCIAL POINT OF CONTACT")}</p>
        <div className="two-column">
          <h2>{t("Specialist systems.")}<br />{t("Focused applications.")}</h2>
          <div>
            <p className="lead">{t("Fuyera brings professional solutions and everyday software into a clear product portfolio.")}</p>
            <p>{t("Ambulance AI System focuses on the mission. Intelligent Operator Assistant focuses on the conversation. laofu canvas adds a writing layer to the desktop; Anchor helps people stay intentional on their phones.")}</p>
            <p>{t("Professional systems are offered through project discussions. Fuyera coordinates commercial enquiries, English-language editions and the agreed delivery scope. Each product has its own release and integration requirements.")}</p>
            <LinkButton href={localHref("/contact")} secondary>{t("Discuss a product or partnership")}</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
