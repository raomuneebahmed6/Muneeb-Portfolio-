import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #061433 0%, #0f2a66 55%, #1d4ed8 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 36, color: "#7dd3fc" }}>{site.locations.join(" · ")}</div>
        <div style={{ fontSize: 96, fontWeight: 800, marginTop: 16 }}>{site.name}</div>
        <div style={{ fontSize: 48, marginTop: 8, color: "#d6d9e5" }}>{site.role}</div>
        <div style={{ fontSize: 30, marginTop: 40, color: "#b7c4e2" }}>
          {`${site.yearsExperience}+ years · SEO · Google & Meta Ads · Websites`}
        </div>
      </div>
    ),
    size,
  );
}
