import { useLanguage } from "../i18n";
import {
  ProfessionalProducts,
  DesktopProducts,
  PortfolioRelationship,
} from "../components/site/Portfolio";
import { site } from "../content";
import {
  Arrow,
  LinkButton,
  PageIntro,
  ProjectCTA,
} from "../components/site/Site";

export function Products() {
  const { t } = useLanguage();
  return (
    <>
      <PageIntro
        eyebrow={t("PRODUCTS & SOLUTIONS")}
        title={t("Professional systems. Personal tools.")}
      >
        <p>{t("From mission records and intelligent call handling to the desktop and the phone. Explore each product’s purpose, working foundation and path to delivery.")}</p>
      </PageIntro>
      <section className="section section-after-intro">
        <div className="container">
          <div className="portfolio-subheading">
            <h2>{t("Professional systems")}</h2>
            <p>{t("Project-based solutions, with English-language editions and integration scoped through Fuyera.")}</p>
          </div>
          <ProfessionalProducts />
          <div className="portfolio-subheading">
            <h2>{t("Desktop & personal tools")}</h2>
            <p>{t("Focused applications with their own platform and release information.")}</p>
          </div>
          <DesktopProducts />
        </div>
      </section>
      <PortfolioRelationship />
      <ProjectCTA />
    </>
  );
}
export function Anchor() {
  const { localHref, t } = useLanguage();
  return (
    <>
      <section className="anchor-intro">
        <div className="container">
          <a className="breadcrumb" href={localHref("/products")}>{t("← All products")}</a>
          <div className="anchor-grid">
            <div>
              <p className="eyebrow">{t("FUYERA ANCHOR")}{t(" ")}
                <span className="status-label">{t("On the App Store")}</span>
              </p>
              <h1>{t("Make each phone")}<br />{t("session intentional.")}</h1>
              <p className="lead">{t("Start with a purpose. Keep it in view. Return to what you meant to do.")}</p>
              <p>{t("Anchor helps you record your intention before using your phone, with reminders and a record you can return to.")}</p>
              <LinkButton href={localHref(site.appStore)}>{t("View on the App Store")}</LinkButton>
              <p className="small-note">{t("iPhone & iPad · iOS / iPadOS 17 or later")}<br />{t("Availability and pricing are shown in your App Store.")}</p>
            </div>
            <div className="anchor-hero-image">
              <img
                src="/images/anchor-3.jpg"
                alt={t("Anchor home screen with an active intention, elapsed time and a Record Intent button")}
                width="443"
                height="960"
                fetchPriority="high"
              />
              <span>{t("Actual App Store screenshot")}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t("A SMALL MOMENT OF CLARITY")}</p>
              <h2>{t("Remember what")}<br />{t("you came to do.")}</h2>
            </div>
            <p>{t("A familiar phone habit, approached with a simple question: what is your intention?")}</p>
          </div>
          <div className="scenario-grid">
            <article>
              <span className="step-number">{t("01 / BEFORE")}</span>
              <h3>{t("Give your session a purpose.")}</h3>
              <p>{t("Write or speak what you want to do. Use tags to keep your intentions organised.")}</p>
              <img
                src="/images/anchor-2.jpg"
                alt={t("Anchor intent recording screen")}
                width="443"
                height="960"
                loading="lazy"
              />
            </article>
            <article>
              <span className="step-number">{t("02 / DURING")}</span>
              <h3>{t("Keep that purpose visible.")}</h3>
              <p>{t("See your active intention and receive reminders. Dynamic Island display is available on supported devices.")}</p>
              <img
                src="/images/anchor-1.jpg"
                alt={t("Anchor gentle reminder with Done and I need a bit more time actions")}
                width="443"
                height="960"
                loading="lazy"
              />
            </article>
            <article>
              <span className="step-number">{t("03 / AFTER")}</span>
              <h3>{t("Return to your intentions.")}</h3>
              <p>{t("Review your recorded intentions in history, and use widgets or Shortcuts to make the next entry easier.")}</p>
              <div className="quiet-quote">
                <span aria-hidden="true">↳</span>
                <p>{t("A little clarity.")}<br />{t("Before the next tap.")}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section feature-section">
        <div className="container two-column">
          <div>
            <p className="eyebrow">{t("PRODUCT DETAILS")}</p>
            <h2>{t("A focused set")}<br />{t("of tools.")}</h2>
          </div>
          <div>
            <dl className="feature-list">
              <div>
                <dt>{t("Capture")}</dt>
                <dd>{t("Voice and manual intention recording.")}</dd>
              </div>
              <div>
                <dt>{t("Stay aware")}</dt>
                <dd>{t("Active intentions, reminders and Dynamic Island on supported devices.")}</dd>
              </div>
              <div>
                <dt>{t("Organise")}</dt>
                <dd>{t("Tags and intention history.")}</dd>
              </div>
              <div>
                <dt>{t("Quick access")}</dt>
                <dd>{t("Home-screen widgets and Shortcuts.")}</dd>
              </div>
            </dl>
            <p className="small-note">{t("Features and purchase options can vary by version. Check the current App Store listing for details.")}</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container product-resources">
          <div>
            <p className="eyebrow">{t("DATA & SUPPORT")}</p>
            <h2>{t("Know your product.")}</h2>
            <p>{t("Review the product’s privacy information and the developer’s App Store privacy disclosure before use. These describe Anchor separately from this company website.")}</p>
            <div className="resource-links">
              <a href={localHref(site.anchorPrivacy)}>{t("Anchor privacy information")}<Arrow diagonal />
              </a>
              <a href={localHref(site.appStore)}>{t("App Store details & privacy disclosure")}<Arrow diagonal />
              </a>
              <a href={localHref("/support#anchor")}>{t("Help with Anchor")}<Arrow />
              </a>
            </div>
          </div>
          <aside>
            <h3>{t("Ready to try Anchor?")}</h3>
            <p>{t("See the current version, compatibility and purchase options on the App Store.")}</p>
            <LinkButton href={localHref(site.appStore)}>{t("View on the App Store")}</LinkButton>
          </aside>
        </div>
      </section>
    </>
  );
}
