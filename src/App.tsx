import { Header, Footer } from "./components/site/Site";
import Home from "./pages/Home";
import { Products, Anchor } from "./pages/Products";
import { Services, Technology } from "./pages/Services";
import Company from "./pages/Company";
import { Contact, Support } from "./pages/Contact";
import { Privacy, Terms, NotFound } from "./pages/Legal";
import { Ambulance, IntelligentOperator, Canvas } from "./pages/Solutions";
import type { PagePath } from "./content";
import { LanguageContext, translate } from "./i18n";
import type { Locale } from "./i18n";

const routes = {
  "/": Home,
  "/products": Products,
  "/products/anchor": Anchor,
  "/products/ambulance-ai": Ambulance,
  "/products/intelligent-operator": IntelligentOperator,
  "/products/laofu-canvas": Canvas,
  "/services": Services,
  "/technology": Technology,
  "/company": Company,
  "/contact": Contact,
  "/support": Support,
  "/legal/privacy": Privacy,
  "/legal/terms": Terms,
  "/404": NotFound,
};
export default function App({ path, locale = "en" }: { path: PagePath; locale?: Locale }) {
  const Page = routes[path];
  return (
    <LanguageContext value={locale}>
      <a className="skip-link" href="#main">
        {translate("Skip to content", locale)}
      </a>
      <Header path={path} />
      <main id="main" tabIndex={-1}>
        <Page />
      </main>
      <Footer />
    </LanguageContext>
  );
}
