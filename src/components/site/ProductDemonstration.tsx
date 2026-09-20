import { useId, useState } from "react";
import { useLanguage } from "../../i18n";

const missionEvents = [
  { time: "09:00", title: "Mission created", source: "Task entry", detail: "Training mission recorded with its source reference." },
  { time: "09:04", title: "Departure recorded", source: "Operator entry", detail: "A departure event is added to the same mission timeline." },
  { time: "09:06", title: "Departure corrected", source: "Review record", detail: "The operator corrects departure to 09:03. The original 09:04 record remains available." },
] as const;

export function ProductDemonstration({ kind }: { kind: "ambulance" | "operator" | "canvas" }) {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(0);
  const panelId = useId();
  return (
    <div className={`product-demo demo-${kind}`}>
      <div className="demo-topline">
        <span className="demo-indicator" aria-hidden="true" />
        <strong>{t(kind === "ambulance" ? "Mission review" : kind === "operator" ? "Call workspace" : "Screen annotation")}</strong>
        <span>{t("Illustrative example")}</span>
      </div>
      {kind === "ambulance" ? (
        <>
          <div className="demo-heading"><span>{t("Training mission")}</span><strong>{t("One event. Its source. Every correction.")}</strong></div>
          <ol className="demo-timeline" aria-label={t("Select a mission event")}>
            {missionEvents.map((event, index) => (
              <li key={event.time}>
                <button type="button" aria-pressed={index === selected} aria-controls={panelId} onClick={() => setSelected(index)}>
                  <time>{event.time}</time><span>{t(event.title)}</span><span aria-hidden="true">↗</span>
                </button>
              </li>
            ))}
          </ol>
          <div className="demo-result" id={panelId} aria-live="polite" aria-atomic="true">
            <span>{t("Source")}: {t(missionEvents[selected].source)}</span>
            <p>{t(missionEvents[selected].detail)}</p>
          </div>
          <p className="demo-note">{t("Synthetic events. An interaction example, not a live vehicle feed or the product interface.")}</p>
        </>
      ) : kind === "operator" ? (
        <>
          <div className="demo-transcript"><span>{t("Sample transcript")}</span><blockquote>{t("“We are at Training Site A, on the ground floor.”")}</blockquote></div>
          <dl className="demo-fields">
            <div><dt>{t("Location")}</dt><dd>{t("Training Site A")}</dd></div>
            <div><dt>{t("Floor")}</dt><dd>{t("Ground floor")}</dd></div>
            <div><dt>{t("Entrance")}</dt><dd className={selected ? "field-confirmed" : "field-missing"}>{t(selected ? "East entrance · operator confirmed" : "Not stated · confirm with caller")}</dd></div>
          </dl>
          <div className="demo-actions" role="group" aria-label={t("Explore operator review")}>
            <button type="button" aria-pressed={selected === 0} aria-controls={panelId} onClick={() => setSelected(0)}>{t("Extracted information")}</button>
            <button type="button" aria-pressed={selected === 1} aria-controls={panelId} onClick={() => setSelected(1)}>{t("Operator review")}</button>
          </div>
          <p className="demo-result" id={panelId} aria-live="polite">{t(selected ? "The operator supplies and confirms the entrance. The review stays distinct from the transcript." : "A missing field becomes a follow-up question. The system does not invent the entrance.")}</p>
          <p className="demo-note">{t("Scripted example. No microphone, live recognition or clinical decision is running here.")}</p>
        </>
      ) : (
        <>
          <div className="demo-canvas" id={panelId}>
            <p>{t("Content underneath")}</p>
            <strong>{t("An idea worth explaining.")}</strong>
            <div className="demo-document-lines" aria-hidden="true"><i /><i /><i /></div>
            {selected !== 1 && <svg viewBox="0 0 440 210" aria-hidden="true" className="demo-ink"><path d="M27 91 Q180 40 382 81 Q418 146 54 138 Q12 131 27 91 M60 174 Q190 150 311 174 M320 164 L351 179 L322 189" /></svg>}
            <span className="demo-canvas-state" aria-live="polite">{t(selected === 1 ? "Ink hidden · use the app underneath" : selected === 2 ? "Example strokes restored" : "Your strokes · a separate layer")}</span>
          </div>
          <div className="demo-actions" role="group" aria-label={t("Explore the annotation layer")}>
            {["Show ink", "Hide ink", "Restore example"].map((label, index) => <button key={label} type="button" aria-pressed={selected === index} aria-controls={panelId} onClick={() => setSelected(index)}>{t(label)}</button>)}
          </div>
          <p className="demo-note">{t("Interaction illustration. Canvas draws over other apps; it does not read or analyse their screen content.")}</p>
        </>
      )}
    </div>
  );
}
