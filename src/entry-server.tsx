import { renderToString } from "react-dom/server";
import App from "./App";
import { pages, resolvePath } from "./content";
import { localeFromPath, locales, localizedHref, translate } from "./i18n";
export { locales, localizedHref, translate };
export { pages };
export function render(path: string) {
  return renderToString(<App path={resolvePath(path)} locale={localeFromPath(path)} />);
}
