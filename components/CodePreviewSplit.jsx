"use client";

import React, { useMemo, useState } from "react";
import PreWithCopy from "./PreWithCopy";

function inferLangClass(language) {
  if (!language) return undefined;
  return language.startsWith("language-") ? language : `language-${language}`;
}

function joinImagePath(uploadPath, fileName) {
  if (!fileName) return "";
  const cleanBase = (uploadPath || "").replace(/\/+$/, "");
  return `${cleanBase}/${fileName}`;
}

export default function CodePreviewSplit({
  title,
  description,
  language = "razor",
  code,
  image,
  alt,
  caption,
  fileName,
  uploadPath = "/images/aziledu/predavanje-2/previews",
  minPreviewHeight = 240,
}) {
  const computedImage = useMemo(() => {
    if (image) return image;
    if (fileName) return joinImagePath(uploadPath, fileName);
    return "";
  }, [image, fileName, uploadPath]);

  const [hasError, setHasError] = useState(false);

  const shouldShowImage = !!computedImage && !hasError;

  return (
    <div style={{ margin: "1.5rem 0 2rem" }}>
      {(title || description) && (
        <div style={{ marginBottom: "0.85rem" }}>
          {title ? (
            <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 700 }}>
              {title}
            </h3>
          ) : null}
          {description ? (
            <p style={{ margin: "0.45rem 0 0", opacity: 0.82 }}>
              {description}
            </p>
          ) : null}
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(280px, 0.8fr)",
          gap: "1rem",
          alignItems: "stretch",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <PreWithCopy>
            <code className={inferLangClass(language)}>{code}</code>
          </PreWithCopy>
        </div>

        <div
          style={{
            border: "1px solid rgba(120,120,120,0.22)",
            borderRadius: "18px",
            overflow: "hidden",
            background: "rgba(255,255,255,0.02)",
            minWidth: 0,
          }}
        >
          <div
            style={{
              padding: "0.8rem 0.95rem",
              borderBottom: "1px solid rgba(120,120,120,0.18)",
              display: "flex",
              justifyContent: "space-between",
              gap: "0.75rem",
              alignItems: "center",
            }}
          >
            <strong style={{ fontSize: "0.95rem" }}>Preview</strong>
            <code style={{ fontSize: "0.78rem", opacity: 0.8 }}>
              {fileName}
            </code>
          </div>

          {shouldShowImage ? (
            <figure style={{ margin: 0 }}>
              <img
                src={computedImage}
                alt={alt || fileName || "Preview slike"}
                style={{ display: "block", width: "100%", height: "auto" }}
                onError={() => setHasError(true)}
              />
              {caption || fileName ? (
                <figcaption
                  style={{
                    padding: "0.8rem 0.95rem",
                    fontSize: "0.88rem",
                    opacity: 0.85,
                  }}
                >
                  {caption}
                </figcaption>
              ) : null}
            </figure>
          ) : (
            <div style={{ padding: "1rem" }}>
              <div
                style={{
                  minHeight: `${minPreviewHeight}px`,
                  borderRadius: "14px",
                  border: "2px dashed rgba(120,120,120,0.25)",
                  display: "grid",
                  placeItems: "center",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, marginBottom: "0.4rem" }}>
                    Ovdje umetni preview sliku
                  </div>
                  <div
                    style={{
                      fontSize: "0.92rem",
                      opacity: 0.82,
                      marginBottom: "0.3rem",
                    }}
                  >
                    Naziv datoteke: <code>{fileName}</code>
                  </div>
                  <div style={{ fontSize: "0.85rem", opacity: 0.72 }}>
                    Upload putanja:{" "}
                    <code>{joinImagePath(uploadPath, fileName)}</code>
                  </div>
                </div>
              </div>
              {caption || fileName ? (
                <div
                  style={{
                    paddingTop: "0.8rem",
                    fontSize: "0.88rem",
                    opacity: 0.85,
                  }}
                >
                  {caption}
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
