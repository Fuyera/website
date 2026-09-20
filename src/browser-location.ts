import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  window.addEventListener("hashchange", onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener("hashchange", onChange);
  };
}

// The empty server snapshot also matches the first hydration render.
export function useBrowserLocation() {
  return useSyncExternalStore(
    subscribe,
    () => window.location.pathname + window.location.search + window.location.hash,
    () => "",
  );
}
