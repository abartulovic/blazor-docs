import React from 'react'

export function LessonHero({ eyebrow = 'Blazor tutorial', title, subtitle, badges = [] }) {
  return (
    <section className="nd-hero">
      <div className="nd-eyebrow">{eyebrow}</div>
      <h1>{title}</h1>
      {subtitle ? <p className="nd-hero-subtitle">{subtitle}</p> : null}
      {badges.length > 0 ? (
        <div className="nd-badge-row">
          {badges.map((badge) => (
            <span key={badge} className="nd-badge">{badge}</span>
          ))}
        </div>
      ) : null}
    </section>
  )
}

export function InfoBox({ type = 'info', title, children }) {
  return (
    <div className={`nd-callout nd-callout-${type}`}>
      {title ? <div className="nd-callout-title">{title}</div> : null}
      <div className="nd-callout-body">{children}</div>
    </div>
  )
}

export function StepGrid({ children }) {
  return <div className="nd-step-grid">{children}</div>
}

export function StepCard({ step, title, children }) {
  return (
    <article className="nd-step-card">
      <div className="nd-step-pill">Korak {step}</div>
      <h3>{title}</h3>
      <div>{children}</div>
    </article>
  )
}

export function ConceptGrid({ children }) {
  return <div className="nd-concept-grid">{children}</div>
}

export function ConceptCard({ title, children }) {
  return (
    <article className="nd-concept-card">
      <h3>{title}</h3>
      <div>{children}</div>
    </article>
  )
}

export function ScreenshotFigure({ src, alt, caption, maxWidth = '920px' }) {
  return (
    <figure className="nd-figure" style={{ maxWidth }}>
      <img src={src} alt={alt} loading="lazy" />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}

export function Checklist({ items = [] }) {
  return (
    <ul className="nd-checklist">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export function LessonSummary({ children }) {
  return <section className="nd-summary">{children}</section>
}
