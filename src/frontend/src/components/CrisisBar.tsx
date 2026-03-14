import { AlertTriangle } from "lucide-react";

export default function CrisisBar() {
  return (
    <div
      className="w-full py-3 px-6 flex items-center justify-center gap-3 text-center"
      style={{
        backgroundColor: "oklch(0.88 0.06 55)",
        borderTop: "1px solid oklch(0.78 0.08 55)",
      }}
    >
      <AlertTriangle
        size={16}
        className="shrink-0"
        style={{ color: "oklch(0.42 0.10 42)" }}
      />
      <p className="font-body text-sm" style={{ color: "oklch(0.30 0.06 40)" }}>
        <strong>Mental Health Emergency?</strong> If you are experiencing a
        mental health emergency, please call{" "}
        <a
          href="tel:988"
          className="underline font-bold hover:opacity-75 transition-opacity"
        >
          988
        </a>{" "}
        or go to the nearest ER.
      </p>
    </div>
  );
}
