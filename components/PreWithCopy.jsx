"use client";

import React from "react";

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="nd-copy-icon">
      <path
        d="M9 9h11v11H9z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="nd-copy-icon">
      <path
        d="M20 6 9 17l-5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PreWithCopy(props) {
  const [copied, setCopied] = React.useState(false);
  const wrapRef = React.useRef(null);

  async function handleCopy() {
    try {
      const codeEl = wrapRef.current?.querySelector("code");
      const text = codeEl?.innerText?.replace(/\n$/, "") ?? "";

      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="nd-pre-wrap" ref={wrapRef}>
      <button
        type="button"
        className={`nd-copy-btn ${copied ? "is-copied" : ""}`}
        onClick={handleCopy}
        aria-label={copied ? "Kod kopiran" : "Kopiraj kod"}
        title={copied ? "Kod kopiran" : "Kopiraj kod"}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
        <span>{copied ? "Kopirano" : "Kopiraj"}</span>
      </button>
      <pre {...props} />
    </div>
  );
}
