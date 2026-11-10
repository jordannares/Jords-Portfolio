import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Jords Portfolio — UI/UX Developer & Web Designer",
    template: "%s | Jords Portfolio",
  },
  description:
    "The portfolio of Jords — a UI/UX Developer and Web Designer focused on thoughtful digital experiences and purposeful frontend development.",
  applicationName: "Jords Portfolio",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Jords Portfolio — UI/UX Developer & Web Designer",
    description:
      "Thoughtful digital experiences, designed with intention and built with purpose.",
    siteName: "Jords Portfolio",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f5ef",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
