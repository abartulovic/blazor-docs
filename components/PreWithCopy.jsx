'use client'

import React from 'react'

function extractText(node) {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (!node) return ''
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (node.props?.children) return extractText(node.props.children)
  return ''
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="nd-copy-icon">
      <path d="M9 9h11v11H9z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="nd-copy-icon">
      <path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function PreWithCopy(props) {
  const [copied, setCopied] = React.useState(false)
  const code = React.useMemo(() => extractText(props.children).replace(/\n$/, ''), [props.children])

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="nd-pre-wrap">
      <button
        type="button"
        className={`nd-copy-btn ${copied ? 'is-copied' : ''}`}
        onClick={handleCopy}
        aria-label={copied ? 'Kod kopiran' : 'Kopiraj kod'}
        title={copied ? 'Kod kopiran' : 'Kopiraj kod'}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
        <span>{copied ? 'Kopirano' : 'Kopiraj'}</span>
      </button>
      <pre {...props} />
    </div>
  )
}
