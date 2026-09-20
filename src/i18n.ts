import { createContext, useContext } from "react";
import messages from "./locales/zh.json";

export const locales = ["en", "zh-Hant", "zh-Hans"] as const;
export type Locale = (typeof locales)[number];
export const localeNames: Record<Locale, string> = {
  en: "English", "zh-Hant": "繁體中文", "zh-Hans": "简体中文",
};
export const LanguageContext = createContext<Locale>("en");
export function localeFromPath(path: string): Locale {
  if (/^\/zh-hant(?:\/|$)/.test(path)) return "zh-Hant";
  if (/^\/zh-hans(?:\/|$)/.test(path)) return "zh-Hans";
  return "en";
}
export function basePath(path: string): string {
  return path.replace(/^\/zh-(?:hant|hans)(?=\/|$)/, "") || "/";
}
export function localizedHref(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const [path, suffix = ""] = href.split(/(?=[?#])(.+)/s);
  if (/^\/(?:assets|images|fonts)\//.test(path)) return href;
  const base = basePath(path);
  const prefix = locale === "en" ? "" : `/${locale.toLowerCase()}`;
  return (prefix + (base === "/" && prefix ? "" : base)) + suffix;
}
const dictionary: Record<string, string[]> = messages;
export function translate<T>(value: T, locale: Locale): T {
  if (locale === "en" || typeof value !== "string") return value;
  const key = value.replace(/\s+/g, " ").trim();
  const pair = dictionary[key];
  return (pair ? pair[locale === "zh-Hans" ? 0 : 1] : value) as T;
}
export function useLanguage() {
  const locale = useContext(LanguageContext);
  return {
    locale,
    t: <T,>(value: T) => translate(value, locale),
    localHref: (href: string) => localizedHref(href, locale),
  };
}
