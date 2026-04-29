"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      className="print-btn"
      onClick={() => window.print()}
    >
      ↗ Print or save as PDF
    </button>
  );
}
