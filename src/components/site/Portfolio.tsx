import { useLanguage } from "../../i18n";
import { useState } from "react";
import { engineeringCases } from "../../portfolio";
import type { EngineeringCase } from "../../portfolio";
import { Arrow, LinkButton } from "./Site";
import { ProductDemonstration } from "./ProductDemonstration";
import { site } from "../../content";

export function ProductOverview() {
  const { t, localHref } = useLanguage();
  return (
    <div className="product-overview">
      <div className="overview-group">
        <h3>{t("Professional systems")}</h3>
        <p>{t("For operational teams and system integrators.")}</p>
        {engineeringCases.slice(0, 2).map((item) => <article className="overview-card" key={item.id}>
          <p className="eyebrow">{t(item.purpose)}</p>
          <h4><a href={localHref(item.href)}>{t(item.product)}</a></h4>
          <span className="portfolio-status">{t(item.id === "ambulance" ? "Engineering prototype" : "Pilot-stage software")}</span>
          <p>{t(item.description)}</p>
          <LinkButton href={`${item.href}#project-enquiry`} secondary>{t(item.action)}</LinkButton>
        </article>)}
      </div>
      <div className="overview-group">
        <h3>{t("Everyday software")}</h3>
        <p>{t("Independent apps for explaining and staying focused.")}</p>
        <article className="overview-card">
          <p className="eyebrow">{t("Screen annotation on Mac")}</p>
          <h4><a href={localHref("/products/laofu-canvas")}>{t("laofu canvas")}</a></h4>
          <span className="portfolio-status">{t("Release pending")}</span>
          <p>{t(engineeringCases[2].description)}</p>
          <LinkButton href="/products/laofu-canvas" secondary>{t("Explore Canvas")}</LinkButton>
        </article>
        <article className="overview-card">
          <p className="eyebrow">{t("Intentional phone use")}</p>
          <h4><a href={localHref("/products/anchor")}>{t("Anchor")}</a></h4>
          <span className="portfolio-status">{t("On the App Store")}</span>
          <p>{t("Record what you opened your phone to do. Keep that intention visible and review it afterwards.")}</p>
          <LinkButton href={site.appStore} secondary>{t("View on the App Store")}</LinkButton>
        </article>
      </div>
    </div>
  );
}

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
            <h2>{t("See how the products")}<br />{t("handle real tasks.")}</h2>
          </div>
          <p>{t("Explore an event correction, a missing call detail and a drawing layer. These interactive examples use synthetic content.")}</p>
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
              <span>{t(item.purpose)}</span>
              <a href={localHref(item.href)}>
                {t(item.product)}
                <Arrow diagonal />
              </a>
            </div>
          </div>
          <div className="engineering-proof">
            <p className="eyebrow">{t("A TASK IN PRACTICE")}</p>
            <h3 aria-live="polite">{t(item.purpose)}</h3>
            <dl>
              {item.scenario.map((body, index) => (
                <div key={body}>
                  <dt>{t(["The task", "What you do", "The result"][index])}</dt>
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
          <div className="professional-copy">
            <p className="eyebrow">{t(item.purpose)}</p>
            <span className="portfolio-status">
              {t(item.id === "ambulance"
                ? "Engineering prototype"
                  : "Pilot-stage software")}
            </span>
            <h3>{t(item.product)}</h3>
            <p>
              {t(item.description)}
            </p>
            <p className="small-note">{t(item.audience)}</p>
            <ul className="product-tags">
              {(item.id === "ambulance"
                ? ["Mission timeline", "Local event store", "Evidence review"]
                : ["Streaming speech", "Structured facts", "Human decisions"]
              ).map((tag) => (
                <li key={tag}>{t(tag)}</li>
              ))}
            </ul>
            <LinkButton href={localHref(item.href)} secondary>{t("Explore the system")}</LinkButton>
            <a className="text-link section-link" href={localHref(`${item.href}#project-enquiry`)}>{t(item.action)}<Arrow /></a>
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
          <p>{t(engineeringCases[2].description)}</p>
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
          <p>{t("Record what you opened your phone to do. Keep that intention visible and review it afterwards.")}</p>
          <LinkButton href={localHref("/products/anchor")} secondary>{t("Explore Anchor")}</LinkButton>
          <a className="text-link section-link" href={site.appStore}>{t("View on the App Store")}<Arrow /></a>
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
        <p className="eyebrow">{t("CHOOSING A PRODUCT")}</p>
        <div className="two-column">
          <h2>{t("Choose by the task")}<br />{t("you need to complete.")}</h2>
          <div>
            <p>{t("The professional systems address mission records and call handling. Canvas and Anchor are independent apps for everyday tasks. Each has its own availability and setup requirements.")}</p>
            <p>{t("For professional systems, start with a discussion of your workflow, interfaces and target environment. Fuyera coordinates the product enquiry and adaptation work.")}</p>
            <LinkButton href={localHref("/contact")} secondary>{t("Discuss a product or partnership")}</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
