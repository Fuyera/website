import { useLanguage } from "../i18n";
import { site } from "../content";
import { LinkButton, PageIntro } from "../components/site/Site";

export function Privacy() {
  const { t, localHref } = useLanguage();
  return (
    <>
      <PageIntro eyebrow={t("WEBSITE INFORMATION")} title={t("Website privacy.")}>
        <p>{t("This notice covers the Fuyera company website. Individual products have their own privacy information.")}</p>
      </PageIntro>
      <article className="legal-copy container">
        <p className="legal-date">{t("Last updated: 20 September 2026")}</p>
        <h2>{t("Who operates this website")}</h2>
        <p>{t("This website is operated by Fuyera Intelligence Limited. For questions about this website or information you have sent us, contact")}{t(" ")}
          <a href={localHref(`mailto:${site.email}`)}>{t(site.email)}</a>.
        </p>
        <h2>{t("Visiting the website")}</h2>
        <p>{t("The website provides company, product and service information. You do not need an account to browse it. The website application does not use advertising cookies, marketing analytics scripts or a contact form.")}</p>
        <p>{t("Our hosting provider, Cloudflare, processes technical request information to serve and protect the website. This can include IP addresses, requested URLs and browser or device information. See")}{t(" ")}
          <a href={localHref("https://www.cloudflare.com/privacypolicy/")}>{t("Cloudflare’s privacy policy")}</a>{t(" ")}{t("for its processing practices.")}</p>
        <h2>{t("Contacting us")}</h2>
        <p>{t("Email links open your email application. Clicking a link does not submit a message through this website. If you send an email, your email address and the information in your message are used to respond and manage the enquiry or resulting business relationship.")}</p>
        <p>{t("Please only send information needed for the enquiry. Do not include passwords, payment card details or confidential customer materials in an initial message. Contact us if you need to correct information you have provided or ask about its deletion. Applicable business and legal recordkeeping requirements may affect what can be removed.")}</p>
        <h2>{t("Fonts and images")}</h2>
        <p>{t("The website’s fonts and product screenshots are served with the website. Viewing them does not require a request from your browser to an external font service or the App Store.")}</p>
        <h2>{t("Products and external links")}</h2>
        <p>{t("Links to product websites, app stores and other providers take you to separate services. Those services have their own data practices. This notice does not describe how the Anchor app processes data. Review")}{t(" ")}
          <a href={localHref(site.anchorPrivacy)}>{t("Anchor’s product privacy information")}</a>{t(" ")}{t("and its ")}<a href={localHref(site.appStore)}>{t("App Store privacy disclosure")}</a>{t(" ")}{t("separately.")}</p>
        <h2>{t("Changes")}</h2>
        <p>{t("This notice should reflect the website’s actual features. We will update it when the way this website handles information changes.")}</p>
      </article>
    </>
  );
}
export function Terms() {
  const { t, localHref } = useLanguage();
  return (
    <>
      <PageIntro eyebrow={t("WEBSITE INFORMATION")} title={t("Website terms.")}>
        <p>{t("Information about using this company website and where to find terms for products or projects.")}</p>
      </PageIntro>
      <article className="legal-copy container">
        <p className="legal-date">{t("Last updated: 20 September 2026")}</p>
        <h2>{t("About the website")}</h2>
        <p>{t("This website introduces Fuyera Intelligence Limited, its products and its engineering services. Company and service descriptions are provided to help you assess a product or start a conversation.")}</p>
        <h2>{t("Products")}</h2>
        <p>{t("A product’s current features, availability, platform requirements and purchase terms are provided through its product information and distribution channel. An App Store link does not guarantee availability in every country or compatibility with every device.")}</p>
        <h2>{t("Engineering engagements")}</h2>
        <p>{t("Service examples describe possible areas of work. Deliverables, acceptance criteria, fees, data access, intellectual property arrangements and maintenance responsibilities are agreed separately for each engagement. Sending an enquiry does not create a project agreement.")}</p>
        <h2>{t("Website content")}</h2>
        <p>{t("Please use the website lawfully and do not attempt to interfere with its availability or security. Website content and third-party materials remain subject to their applicable rights and licences. Product screenshots illustrate the version shown; interfaces can change as products evolve.")}</p>
        <h2>{t("External services")}</h2>
        <p>{t("Links to app stores and other websites are provided for access to relevant information. These services operate under their own terms and policies.")}</p>
        <h2>{t("Questions or corrections")}</h2>
        <p>{t("If you find an inaccurate statement or a broken link, contact")}{t(" ")}
          <a href={localHref(`mailto:${site.email}`)}>{t(site.email)}</a>{t(" with the page and the issue.")}</p>
      </article>
    </>
  );
}
export function NotFound() {
  const { t, localHref } = useLanguage();
  return (
    <>
      <PageIntro eyebrow={t("404 / PAGE NOT FOUND")} title={t("A different direction.")}>
        <p>{t("This page could not be found. Try our products, get support or return to the homepage.")}</p>
        <div className="hero-actions">
          <LinkButton href={localHref("/products")}>{t("View products")}</LinkButton>
          <LinkButton href={localHref("/")} secondary>{t("Go home")}</LinkButton>
        </div>
        <p className="small-note">{t("Need help? ")}<a href={localHref("/support")}>{t("Visit product support.")}</a>
        </p>
      </PageIntro>
    </>
  );
}
