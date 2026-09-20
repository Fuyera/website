import { useLanguage } from "../i18n";
import {
  EngineeringShowcase,
  ProfessionalProducts,
  DesktopProducts,
} from "../components/site/Portfolio";
import { services } from "../content";
import {
  BrandForm,
  LinkButton,
  ProjectCTA,
  Arrow,
} from "../components/site/Site";

export default function Home() {
  const { t, localHref } = useLanguage();
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{t("AI PRODUCTS & ENGINEERING")}</p>
            <h1>{t("AI products.")}<br />
              <span>{t("Practical engineering.")}</span>
            </h1>
            <p className="lead">{t("From ambulance mission systems and intelligent operator assistance to native desktop tools. Software that connects real inputs to useful outcomes.")}</p>
            <div className="hero-actions">
              <LinkButton href={localHref("/products")}>{t("Explore our products")}</LinkButton>
              <LinkButton href={localHref("/contact")} secondary>{t("Discuss a project")}</LinkButton>
            </div>
          </div>
          <BrandForm />
        </div>
        <div className="container hero-foot">
          <span>{t("Edge systems · Real-time speech · Native applications")}</span>
          <a href={localHref("#engineering")}>{t("See the engineering")}<span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
      <EngineeringShowcase />
      <section className="section" id="products">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t("PRODUCTS & SOLUTIONS")}</p>
              <h2>{t("Professional systems.")}<br />{t("Personal tools.")}</h2>
            </div>
            <a className="text-link" href={localHref("/products")}>{t("View products")}<Arrow />
            </a>
          </div>
          <ProfessionalProducts />
          <div className="portfolio-subheading">
            <h3>{t("Tools for thinking and explaining.")}</h3>
            <p>{t("Native experiences for the way people work.")}</p>
          </div>
          <DesktopProducts />
        </div>
      </section>
      <section className="section services-section" id="business-model">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t("WORK WITH FUYERA")}</p>
              <h2>{t("From a defined problem")}<br />{t("to working software.")}</h2>
            </div>
            <p>{t("Bring a real task, a product idea or a system that needs to work better. We help define the next useful step.")}</p>
          </div>
          <div className="service-list">
            {services.map((s) => (
              <a className="service-row" href={localHref(`/services#${s.id}`)} key={s.id}>
                <h3>{t(s.name)}</h3>
                <div>
                  <p>{t(s.short)}</p>
                  <span>{t(s.outcome)}</span>
                </div>
                <Arrow diagonal />
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="company-strip" id="about">
        <div className="container">
          <p className="eyebrow">{t("FUYERA INTELLIGENCE")}</p>
          <div>
            <h2>{t("Product thinking.")}<br />{t("Engineering discipline.")}</h2>
            <p>{t("Fuyera connects a portfolio of specialist systems and focused applications with product engineering and commercial delivery. Talk to us about a product, an English-language edition or a defined integration project.")}</p>
            <a className="text-link" href={localHref("/company")}>{t("About Fuyera")}<Arrow />
            </a>
          </div>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
