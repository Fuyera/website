import { useLanguage } from "../i18n";
import { Arrow, PageIntro, ProjectCTA } from "../components/site/Site";

export default function Company() {
  const { t, localHref } = useLanguage();
  return (
    <>
      <PageIntro
        eyebrow={t("FUYERA INTELLIGENCE")}
        title={t("Professional systems. Everyday software.")}
      >
        <p>{t("Fuyera brings intelligent systems and focused software products to professional teams and individual users, with product adaptation, integration and engineering services.")}</p>
      </PageIntro>
      <section className="section section-after-intro">
        <div className="container company-editorial">
          <div className="company-statement">
            <p className="eyebrow">{t("OUR FOCUS")}</p>
            <h2>{t("Two product directions.")}<br />{t("Clear responsibilities.")}</h2>
          </div>
          <div>
            <p className="large-copy">{t("Our work includes software product development and operation, alongside commercial enquiries, adaptation and delivery coordination for professional systems.")}</p>
            <p>{t("The portfolio covers ambulance mission records, operator assistance, Mac screen annotation and intentional phone use. Each product has its own users, release status and support arrangements.")}</p>
            <a className="text-link" href={localHref("/products")}>{t("Explore our products")}<Arrow />
            </a>
          </div>
        </div>
      </section>
      <section className="section feature-section">
        <div className="container">
          <p className="eyebrow">{t("WHAT WE WORK ON")}</p>
          <div className="company-principles">
            <article>
              <h2>{t("Software products")}</h2>
              <p>{t("Anchor is available on the App Store. laofu canvas is prepared for public release. Their product pages provide platform, feature and support information.")}</p>
            </article>
            <article>
              <h2>{t("Professional systems")}</h2>
              <p>{t("Ambulance AI System and Intelligent Operator Assistant are discussed as project solutions, with adaptation and validation for the intended environment.")}</p>
            </article>
            <article>
              <h2>{t("Engineering services")}</h2>
              <p>{t("Product adaptation, system integration and prototype development connect these product directions to specific customer requirements.")}</p>
            </article>
          </div>
          <a className="text-link section-link" href={localHref("/technology")}>{t("Explore our engineering capabilities")}<Arrow />
          </a>
        </div>
      </section>
      <section className="section">
        <div className="container founder-section">
          <div className="founder-mark" aria-hidden="true">{t("FY")}<span>{t("PRODUCT × ENGINEERING")}</span>
          </div>
          <div>
            <p className="eyebrow">{t("FOUNDER")}</p>
            <h2>{t("Fu Ye")}</h2>
            <p>{t("Fu Ye’s background spans product development, hardware and software engineering. At Fuyera, that perspective informs a focus on clear requirements, useful products and the work needed to bring an idea into operation.")}</p>
          </div>
        </div>
      </section>
      <section className="company-facts">
        <div className="container">
          <div>
            <span>{t("Company")}</span>
            <p>{t("Fuyera Intelligence Limited")}<br />{t("孚烨纳智能科技有限公司")}</p>
          </div>
          <div>
            <span>{t("Registered in")}</span>
            <p>{t("Hong Kong")}</p>
          </div>
          <div>
            <span>{t("Work with us")}</span>
            <a href={localHref("/contact")}>{t("Start a conversation")}<Arrow diagonal />
            </a>
          </div>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
