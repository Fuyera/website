import { useLanguage } from "../i18n";
import { Arrow, PageIntro, ProjectCTA } from "../components/site/Site";

export default function Company() {
  const { t, localHref } = useLanguage();
  return (
    <>
      <PageIntro
        eyebrow={t("FUYERA INTELLIGENCE")}
        title={t("Product thinking. Engineering discipline.")}
      >
        <p>{t("We develop AI products and intelligent software, bringing product design, workflow engineering and system integration together.")}</p>
      </PageIntro>
      <section className="section section-after-intro">
        <div className="container company-editorial">
          <div className="company-statement">
            <p className="eyebrow">{t("OUR FOCUS")}</p>
            <h2>{t("Useful software.")}<br />{t("A clear purpose.")}</h2>
          </div>
          <div>
            <p className="large-copy">{t("A product should make a real task easier. An integration should fit the way a team works. A delivery should leave people able to use and maintain what has been built.")}</p>
            <p>{t("Fuyera brings together professional system solutions and focused software products. Ambulance AI System, Intelligent Operator Assistant, laofu canvas and Anchor address different kinds of work. We coordinate product enquiries, English-language adaptation and agreed project delivery.")}</p>
            <a className="text-link" href={localHref("/products")}>{t("Explore our products")}<Arrow />
            </a>
          </div>
        </div>
      </section>
      <section className="section feature-section">
        <div className="container">
          <p className="eyebrow">{t("WHAT THAT MEANS IN PRACTICE")}</p>
          <div className="company-principles">
            <article>
              <h2>{t("Start with the user.")}</h2>
              <p>{t("Define the person, the task and the useful outcome before adding capabilities.")}</p>
            </article>
            <article>
              <h2>{t("Make the work clear.")}</h2>
              <p>{t("Keep scope, review points and deliverables visible throughout an engagement.")}</p>
            </article>
            <article>
              <h2>{t("Think beyond delivery.")}</h2>
              <p>{t("Consider operating instructions, dependencies and support responsibilities from the beginning.")}</p>
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
            <p className="large-copy">{t("A practical perspective on software and intelligent systems.")}</p>
            <p>{t("Fu Ye’s background spans product development, hardware and software engineering. At Fuyera, that perspective informs a focus on clear requirements, useful products and the work needed to bring an idea into operation.")}</p>
            <p>{t("Experience informs the approach. Each product and project stands on its own scope and results.")}</p>
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
