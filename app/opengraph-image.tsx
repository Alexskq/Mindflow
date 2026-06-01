import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Alex MindFlow — Préparation Mentale & Bien-être · Valenciennes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#F7F6F4",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Bloc teal droite */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: 0,
            width: "42%",
            height: "80%",
            backgroundColor: "#0A8F8F",
            borderRadius: "60px 0 0 60px",
          }}
        />

        {/* Cercle décoratif */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: "35%",
            width: 220,
            height: 220,
            borderRadius: "50%",
            border: "2px solid #0A8F8F",
            opacity: 0.2,
          }}
        />

        {/* Contenu principal */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px 80px",
            width: "62%",
            height: "100%",
          }}
        >
          {/* Label */}
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#0A8F8F",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            Préparation Mentale & Bien-être · Valenciennes
          </div>

          {/* Titre */}
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "#0D0D0D",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: 28,
            }}
          >
            Alex MindFlow
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              color: "#6B6B6B",
              lineHeight: 1.4,
              maxWidth: 480,
            }}
          >
            Performer autrement.{" "}
            <span style={{ color: "#0A8F8F", fontWeight: 700 }}>
              Sans s'épuiser davantage.
            </span>
          </div>

          {/* Piliers */}
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 44,
            }}
          >
            {["Respiration", "Mental", "Exposition au froid"].map((label) => (
              <div
                key={label}
                style={{
                  padding: "10px 20px",
                  borderRadius: 999,
                  backgroundColor: "#EEEDE9",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#0D0D0D",
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Texte sur le bloc teal */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "10%",
            width: "42%",
            height: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "rgba(255,255,255,0.9)",
              textAlign: "center",
              padding: "0 40px",
              lineHeight: 1.5,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Oxygen Advantage®
            {"\n"}ECO2A®
            {"\n"}Exposition au froid
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
