import { useLanguage } from "../../i18n";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { site } from "../../content";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  const { t } = useLanguage();
  return (
    <span className="arrow" aria-hidden="true">
      {t(diagonal ? "↗" : "→")}
    </span>
  );
}
export function LinkButton({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  const { localHref } = useLanguage();
  return (
    <a className={secondary ? "text-link" : "button"} href={localHref(href)}>
      {children}
      <Arrow />
    </a>
  );
}
export function Header({ path }: { path: string }) {
  const { localHref, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    }
    function onPointer(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);
  return (
    <header ref={header} className={`site-header ${open ? "menu-open" : ""}`}>
      <div className="container header-inner">
        <a className="wordmark" href={localHref("/")} aria-label={t("Fuyera home")}>{t("Fuyera")}<span className="brand-dot" />
        </a>
        <nav
          id="main-navigation"
          className="main-navigation"
          aria-label={t("Main navigation")}
        >
          {[
            ["Products", "/products"],
            ["Engineering", "/technology"],
            ["Services", "/services"],
            ["Company", "/company"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={localHref(href)}
              aria-current={path.startsWith(href) ? "page" : undefined}
            >
              {t(label)}
            </a>
          ))}
          <a
            href={localHref("/contact")}
            className="nav-contact"
            aria-current={path === "/contact" ? "page" : undefined}
          >{t("Contact")}<Arrow diagonal />
          </a>
        </nav>
        <LanguageSwitcher path={path} />
        <button
          ref={button}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {t(open ? "Close" : "Menu")}
          <span aria-hidden="true">{t(open ? "−" : "+")}</span>
        </button>
      </div>
    </header>
  );
}
export function Footer() {
  const { localHref, t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <a className="wordmark" href={localHref("/")}>{t("Fuyera")}<span className="brand-dot" />
            </a>
            <p>{t("Focused products.")}<br />{t("Practical engineering.")}</p>
          </div>
          <div className="footer-group">
            <span>{t("Explore")}</span>
            <a href={localHref("/products")}>{t("Products")}</a>
            <a href={localHref("/services")}>{t("Services")}</a>
            <a href={localHref("/company")}>{t("Company")}</a>
          </div>
          <div className="footer-group">
            <span>{t("Learn & connect")}</span>
            <a href={localHref("/technology")}>{t("Engineering capabilities")}</a>
            <a href={localHref("/support")}>{t("Product support")}</a>
            <a href={localHref("/contact")}>{t("Contact")}</a>
          </div>
          <div className="footer-contact">
            <span>{t("Start a conversation")}</span>
            <a href={localHref(`mailto:${site.email}`)}>
              {t(site.email)}
              <Arrow diagonal />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t("© 2026 Fuyera Intelligence Limited")}</p>
          <div>
            <a href={localHref("/legal/privacy")}>{t("Privacy")}</a>
            <a href={localHref("/legal/terms")}>{t("Terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export function BrandForm() {
  return (
    <div className="brand-form" aria-hidden="true">
      <svg viewBox="0 0 420 480" role="presentation">
        <defs>
          <linearGradient id="face" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#66717e" />
            <stop offset=".45" stopColor="#3c4651" />
            <stop offset="1" stopColor="#242b34" />
          </linearGradient>
          <linearGradient id="edge" x1="0" x2="1">
            <stop stopColor="#18202b" />
            <stop offset="1" stopColor="#39434f" />
          </linearGradient>
          <linearGradient id="blue" x1="0" x2="1">
            <stop stopColor="#3468f5" />
            <stop offset="1" stopColor="#15327a" />
          </linearGradient>
        </defs>
        <ellipse cx="218" cy="445" rx="168" ry="18" fill="#000" opacity=".22" />
        <path d="M90 120 286 48 343 76 148 150Z" fill="#67717b" />
        <path
          d="M148 150 343 76 343 160 220 207 220 241 321 202 321 282 220 321 220 438 148 465Z"
          fill="url(#face)"
        />
        <path d="M90 120 148 150 148 465 90 430Z" fill="url(#edge)" />
        <path d="M220 207 269 188 269 222 220 241Z" fill="url(#blue)" />
        <path d="M148 150 343 76" stroke="#99a2ab" strokeOpacity=".5" />
        <path d="M220 241 321 202" stroke="#95a0ad" strokeOpacity=".35" />
      </svg>
    </div>
  );
}
export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  const { t } = useLanguage();
  return (
    <section className="page-intro">
      <div className="container">
        <p className="eyebrow">{t(eyebrow)}</p>
        <h1>{t(title)}</h1>
        {children && <div className="lead intro-copy">{children}</div>}
      </div>
    </section>
  );
}
export function ProjectCTA() {
  const { t, localHref } = useLanguage();
  return (
    <section className="project-cta" id="contact">
      <div className="container">
        <div>
          <p className="eyebrow">{t("LET’S MAKE IT WORK")}</p>
          <h2>{t("Have a product or")}<br />{t("workflow in mind?")}</h2>
          <p>{t("Tell us what you need to make work.")}</p>
        </div>
        <div className="cta-actions">
          <LinkButton href={localHref("/contact")}>{t("Discuss a project")}</LinkButton>
          <a className="support-link" href={localHref("/support")}>{t("Looking for product support?")}<Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
export function ProductStory() {
  const { t, localHref } = useLanguage();
  return (
    <article className="product-story">
      <div className="product-visual">
        <div className="phone-shot primary-shot">
          <img
            src="/images/anchor-3.jpg"
            alt={t("Anchor showing an active intention on its home screen")}
            width="443"
            height="960"
            loading="lazy"
          />
        </div>
        <div className="phone-shot secondary-shot">
          <img
            src="/images/anchor-1.jpg"
            alt={t("Anchor’s reminder asking whether an intention is complete")}
            width="443"
            height="960"
            loading="lazy"
          />
        </div>
        <span className="image-note">{t("Anchor · App Store screenshots")}</span>
      </div>
      <div className="product-story-copy">
        <p className="eyebrow">{t("INTENTIONAL PHONE USE")}</p>
        <div className="product-name">
          <h3>{t("Anchor")}</h3>
          <span className="status-label">{t("On the App Store")}</span>
        </div>
        <h4>{t("Keep your purpose")}<br />{t("in view.")}</h4>
        <p>{t("Record why you pick up your phone. Keep your intention visible, and return to what you set out to do.")}</p>
        <div className="product-details">
          <span>{t("iPhone & iPad")}</span>
          <span>{t("iOS / iPadOS 17+")}</span>
        </div>
        <LinkButton href={localHref("/products/anchor")} secondary>{t("Explore Anchor")}</LinkButton>
      </div>
    </article>
  );
}
export function Workflow() {
  const { t } = useLanguage();
  const steps = [
    ["Define the input", "A brief and representative materials."],
    ["Connect the work", "Tools and checks for the task."],
    ["Review the result", "A person checks what matters."],
    ["Deliver & hand over", "Usable outputs and operating notes."],
  ];
  return (
    <div className="workflow">
      <p className="eyebrow">{t("ILLUSTRATIVE WORKFLOW")}</p>
      <ol>
        {steps.map(([title, body], i) => (
          <li key={title}>
            <span className="step-number">0{i + 1}</span>
            <h3>{t(title)}</h3>
            <p>{t(body)}</p>
          </li>
        ))}
      </ol>
      <p className="workflow-note">{t("An example of our working approach. Each project has its own scope and review requirements.")}</p>
    </div>
  );
}
export function CopyEmail() {
  const { t } = useLanguage();
  const [message, setMessage] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setMessage("Email address copied.");
    } catch {
      setMessage("Select the email address above and copy it manually.");
    }
  }
  return (
    <div className="copy-control">
      <button className="copy-button" onClick={copy} type="button">{t("Copy email")}<svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="8" y="8" width="12" height="12" rx="2" />
          <path d="M15 8V4H4v11h4" />
        </svg>
      </button>
      <p className="copy-status" role="status">
        {t(message)}
      </p>
    </div>
  );
}
