import { useLanguage } from "../i18n";
import { EngineeringShowcase } from "../components/site/Portfolio";
import { engineeringCases } from "../portfolio";
import { services } from "../content";
import {
  Arrow,
  LinkButton,
  PageIntro,
  ProjectCTA,
} from "../components/site/Site";

export function Services() {
  const { t, localHref } = useLanguage();
  return (
    <>
      <PageIntro eyebrow={t("ENGINEERING SERVICES")} title={t("Bring a real workflow.")}>
        <p>{t("Build on concrete foundations in mission systems, speech workflows and native applications. We help adapt the product, connect the right interfaces and deliver an agreed scope.")}</p>
        <LinkButton href={localHref("/contact")}>{t("Discuss a project")}</LinkButton>
      </PageIntro>
      <section className="section section-after-intro">
        <div className="container">
          <nav className="section-nav" aria-label={t("Services")}>
            {services.map((s) => (
              <a key={s.id} href={localHref(`#${s.id}`)}>
                {t(s.name)}
                <Arrow />
              </a>
            ))}
          </nav>
          {services.map((s) => (
            <article className="service-detail" key={s.id} id={s.id}>
              <div className="service-summary">
                <p className="eyebrow">{t(s.outcome)}</p>
                <h2>{t(s.name)}</h2>
                <p className="lead">{t(s.short)}</p>
                <p>{t(s.audience)}</p>
                <LinkButton href={localHref(`/contact?topic=${s.id}`)} secondary>{t("Discuss this service")}</LinkButton>
              </div>
              <dl className="service-spec">
                <div>
                  <dt>{t("You bring")}</dt>
                  <dd>{t(s.input)}</dd>
                </div>
                <div>
                  <dt>{t("We deliver")}</dt>
                  <dd>{t(s.deliverable)}</dd>
                </div>
                <div>
                  <dt>{t("We check together")}</dt>
                  <dd>{t(s.acceptance)}</dd>
                </div>
                <div>
                  <dt>{t("The boundary")}</dt>
                  <dd>{t(s.boundary)}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>
      <section className="section feature-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t("THE ENGAGEMENT")}</p>
              <h2>{t("Agree the work.")}<br />{t("Then make it work.")}</h2>
            </div>
            <p>{t("We agree the deliverables, data access, acceptance criteria and support arrangements before implementation. Costs follow the scope.")}</p>
          </div>
          <div className="engagement-grid">
            {[
              [
                "Define",
                "Understand the task, agree a useful outcome and identify constraints.",
              ],
              [
                "Build",
                "Work through a bounded prototype or implementation, with visible progress.",
              ],
              [
                "Review",
                "Check the agreed user tasks and operating conditions together.",
              ],
              [
                "Handover",
                "Deliver the agreed materials and clarify maintenance responsibilities.",
              ],
            ].map(([title, body], i) => (
              <article key={title}>
                <span className="step-number">0{i + 1}</span>
                <h3>{t(title)}</h3>
                <p>{t(body)}</p>
              </article>
            ))}
          </div>
          <p className="closing-note">{t("Source code, third-party costs, deployment access and ongoing maintenance are specified for each engagement.")}</p>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
export function Technology() {
  const { t, localHref } = useLanguage();
  return (
    <>
      <PageIntro
        eyebrow={t("ENGINEERING CAPABILITIES")}
        title={t("Engineering in working systems.")}
      >
        <p>{t("Local event infrastructure, streaming speech and native desktop interaction. The product portfolio makes our engineering scope concrete.")}</p>
      </PageIntro>
      <EngineeringShowcase />
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>{t("What the foundations")}<br />{t("make possible.")}</h2>
            <p>{t("Each product puts a different engineering discipline to work. Scope and readiness remain specific to the product.")}</p>
          </div>
          <div className="engineering-discipline-grid">
            {engineeringCases.map((item) => (
              <article key={item.id}>
                <p className="eyebrow">{t(item.category)}</p>
                <h3>{t(item.product)}</h3>
                <p>{t(item.summary)}</p>
                <ul>
                  {item.capabilities.map(([name, body]) => (
                    <li key={name}>
                      <strong>{t(name)}</strong>
                      <p>{t(body)}</p>
                    </li>
                  ))}
                </ul>
                <LinkButton href={localHref(item.href)} secondary>{t("Explore this product")}</LinkButton>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section feature-section">
        <div className="container two-column">
          <div>
            <p className="eyebrow">{t("FROM FOUNDATION TO DELIVERY")}</p>
            <h2>{t("Adapt the system")}<br />{t("to the work.")}</h2>
          </div>
          <div>
            <p className="lead">{t("An English-language edition involves more than translating the interface.")}</p>
            <p>{t("We define terminology, input sources, workflow rules, integration points and review responsibilities for the intended users. A bounded demonstration establishes the next step before a wider deployment.")}</p>
            <p>{t("Fuyera coordinates the commercial scope, localisation and delivery discussion. Deployment targets and acceptance criteria are agreed for the specific product and project.")}</p>
            <LinkButton href={localHref("/services")} secondary>{t("Explore our engineering services")}</LinkButton>
          </div>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
