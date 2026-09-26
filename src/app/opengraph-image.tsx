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
          background: "linear-gradient(135deg, #0b0f19 0%, #1c1850 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 36, color: "#a79dff" }}>{site.locations.join(" · ")}</div>
        <div style={{ fontSize: 96, fontWeight: 800, marginTop: 16 }}>{site.name}</div>
        <div style={{ fontSize: 48, marginTop: 8, color: "#d6d9e5" }}>{site.role}</div>
        <div style={{ fontSize: 30, marginTop: 40, color: "#9aa3b8" }}>
          {`${site.yearsExperience}+ years · SEO · Google & Meta Ads · Websites`}
        </div>
      </div>
    ),
    size,
  );
}
