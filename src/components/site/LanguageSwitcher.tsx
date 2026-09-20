import { useEffect, useRef } from "react";
import { locales, localeNames, localizedHref, useLanguage } from "../../i18n";
import { useBrowserLocation } from "../../browser-location";

export function LanguageSwitcher({ path }: { path: string }) {
  const { locale, t } = useLanguage();
  const details = useRef<HTMLDetailsElement>(null);
  const currentLocation = useBrowserLocation() || path;
  useEffect(() => {
    function closeOutside(event: PointerEvent) {
      if (details.current && !details.current.contains(event.target as Node)) {
        details.current.open = false;
      }
    }
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);
  return (
    <details className="language-switcher" ref={details} onKeyDown={(event) => {
      if (event.key === "Escape" && details.current) {
        details.current.open = false;
        details.current.querySelector("summary")?.focus();
      }
    }} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
        event.currentTarget.open = false;
      }
    }}>
      <summary aria-label={t("Choose language")}>
        <span aria-hidden="true">◎</span> {localeNames[locale]}
      </summary>
      <nav aria-label={t("Language")}>
        {locales.map((language) => (
          <a key={language} href={localizedHref(currentLocation, language)} hrefLang={language}
            lang={language} aria-current={language === locale ? "true" : undefined}
            >
            {localeNames[language]}
          </a>
        ))}
      </nav>
    </details>
  );
}
