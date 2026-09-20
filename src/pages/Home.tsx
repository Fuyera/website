import { useLanguage } from "../i18n";
import {
  EngineeringShowcase,
  ProductOverview,
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
            <h1>{t("Intelligent systems for professional work.")}<br />
              <span>{t("Focused software for everyday tasks.")}</span>
            </h1>
            <p className="lead">{t("Explore ambulance mission records, AI-assisted call handling, screen annotation and intentional phone use. Fuyera supports product enquiries, adaptation and integration around your needs.")}</p>
            <div className="hero-actions">
              <LinkButton href={localHref("/products")}>{t("Explore products & solutions")}</LinkButton>
              <LinkButton href={localHref("/contact")} secondary>{t("Discuss your requirements")}</LinkButton>
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
      <section className="section" id="products">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t("PRODUCTS & SOLUTIONS")}</p>
              <h2>{t("Find the product")}<br />{t("for your task.")}</h2>
            </div>
            <a className="text-link" href={localHref("/products")}>{t("View products")}<Arrow />
            </a>
          </div>
          <ProductOverview />
        </div>
      </section>
      <EngineeringShowcase />
      <section className="section services-section" id="business-model">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t("WORK WITH FUYERA")}</p>
              <h2>{t("Start with what")}<br />{t("you need to change.")}</h2>
            </div>
            <p>{t("Adapt a product, connect an existing workflow or develop a prototype. Choose the starting point that fits your project.")}</p>
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
            <h2>{t("Products, adaptation")}<br />{t("and engineering.")}</h2>
            <p>{t("Fuyera brings intelligent systems and focused software products to professional teams and individual users, with product adaptation, integration and engineering services.")}</p>
            <a className="text-link" href={localHref("/company")}>{t("About Fuyera")}<Arrow />
            </a>
          </div>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
