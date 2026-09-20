import { useLanguage } from "../i18n";
import { site, services } from "../content";
import { useBrowserLocation } from "../browser-location";
import {
  Arrow,
  CopyEmail,
  LinkButton,
  PageIntro,
} from "../components/site/Site";

export function Contact() {
  const { t, localHref } = useLanguage();
  const location = useBrowserLocation();
  const topicId = new URL(location || "/contact", site.origin).searchParams.get("topic");
  const service = services.find((entry) => entry.id === topicId);
  const subject = service ? `${t(service.name)} — ${t("Project enquiry")}` : t("Project enquiry");
  return (
    <>
      <PageIntro eyebrow={t("CONTACT")} title={t("Tell us what you want to make work.")}>
        <p>{t("A professional system, an English-language product edition or an integration challenge. Start with the problem and the outcome you have in mind.")}</p>
      </PageIntro>
      <section className="section section-after-intro">
        <div className="container contact-grid">
          <div className="email-panel">
            <p className="eyebrow">{t("BUSINESS & ENGINEERING")}</p>
            <a className="email-address" href={localHref(`mailto:${site.email}`)}>
              {t(site.email)}
              <Arrow diagonal />
            </a>
            <p>{t("Send us a short introduction to your project.")}</p>
            {service && <p className="enquiry-topic">{t("Enquiry topic")}: <strong>{t(service.name)}</strong></p>}
            <LinkButton href={`mailto:${site.email}?subject=${encodeURIComponent(subject)}`}>{t("Email us")}</LinkButton>
            <CopyEmail />
            <p className="small-note">{t("Email us opens your email app. You can also copy the address and use your preferred email service.")}</p>
          </div>
          <div className="contact-guidance">
            <h2>{t("A useful starting point.")}</h2>
            <ol>
              <li>
                <strong>{t("What do you want to achieve?")}</strong>
                <p>{t("Describe the task, the intended users and the result you need.")}</p>
              </li>
              <li>
                <strong>{t("What exists today?")}</strong>
                <p>{t("Tell us about your current product, process or tools.")}</p>
              </li>
              <li>
                <strong>{t("What are the constraints?")}</strong>
                <p>{t("Share relevant timing, operating needs or scope limits.")}</p>
              </li>
            </ol>
            <p className="small-note">{t("Please keep the first message brief. Don’t send passwords, confidential customer data or sensitive materials.")}</p>
          </div>
        </div>
      </section>
      <section className="support-strip">
        <div className="container">
          <div>
            <h2>{t("Already using a Fuyera product?")}</h2>
            <p>{t("Find the right product information and help.")}</p>
          </div>
          <LinkButton href={localHref("/support")} secondary>{t("Visit product support")}</LinkButton>
        </div>
      </section>
    </>
  );
}
export function Support() {
  const { t, localHref } = useLanguage();
  return (
    <>
      <PageIntro
        eyebrow={t("PRODUCT SUPPORT")}
        title={t("Help with your Fuyera product.")}
      >
        <p>{t("Product information, privacy resources and a way to reach us when you need help.")}</p>
      </PageIntro>
      <section className="section section-after-intro">
        <div className="container">
          <article className="support-product" id="anchor">
            <div>
              <span className="eyebrow">{t("IPHONE & IPAD")}</span>
              <h2>{t("Anchor")}</h2>
              <p>{t("Get help with intention recording, reminders, product access or a purchase question.")}</p>
              <LinkButton
                href={localHref(`mailto:${site.email}?subject=Anchor%20support`)}
              >{t("Email Anchor support")}</LinkButton>
            </div>
            <div className="resource-links">
              <a href={localHref("/products/anchor")}>{t("Product overview")}<Arrow />
              </a>
              <a href={localHref(site.appStore)}>{t("Current version & App Store information")}<Arrow diagonal />
              </a>
              <a href={localHref(site.anchorPrivacy)}>{t("Anchor privacy information")}<Arrow diagonal />
              </a>
            </div>
          </article>
          <article className="support-product" id="laofu-canvas">
            <div>
              <span className="eyebrow">{t("MACOS · RELEASE PENDING")}</span>
              <h2>{t("laofu canvas")}</h2>
              <p>{t("Find information about screen annotation, Ink mode, local drawings and supported configurations.")}</p>
              <LinkButton href={localHref("https://laofuai.com/products/laofu-canvas/support")}>{t("Canvas support")}</LinkButton>
            </div>
            <div className="resource-links">
              <a href={localHref("/products/laofu-canvas")}>{t("Product overview")}<Arrow />
              </a>
              <a href={localHref("https://laofuai.com/products/laofu-canvas/privacy")}>{t("Canvas privacy information")}<Arrow diagonal />
              </a>
            </div>
          </article>
          <article className="support-product" id="professional-systems">
            <div>
              <span className="eyebrow">{t("PROFESSIONAL SYSTEMS")}</span>
              <h2>{t("Project & integration enquiries")}</h2>
              <p>{t("For Ambulance AI System and Intelligent Operator Assistant, Fuyera coordinates product, English-language edition and integration discussions.")}</p>
              <LinkButton
                href={localHref(`mailto:${site.email}?subject=Professional%20system%20enquiry`)}
              >{t("Contact Fuyera")}</LinkButton>
            </div>
            <div className="resource-links">
              <a href={localHref("/products/ambulance-ai")}>{t("Ambulance AI System")}<Arrow />
              </a>
              <a href={localHref("/products/intelligent-operator")}>{t("Intelligent Operator Assistant")}<Arrow />
              </a>
            </div>
          </article>
          <div className="editorial-note">
            <h2>{t("Help us understand")}<br />{t("what happened.")}</h2>
            <div>
              <p>{t("Include the app version, your device and system version, what you were trying to do, and what happened instead.")}</p>
              <p>{t("If you share a screenshot, remove personal or confidential information first. Never send passwords or payment card details.")}</p>
              <p>{t("For a new engineering project,")}{t(" ")}
                <a href={localHref("/contact")}>{t("use our business contact page.")}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
