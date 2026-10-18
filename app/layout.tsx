import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SoundProvider } from "@/lib/SoundContext";

export const metadata: Metadata = {
  title: "Pip's Midnight Nursery — Junior Dream Engineer",
  description:
    "“I build the dreams you fall asleep inside.” Step into the moonlit nursery workshop of Pip the Skull Baby. An interactive storybook portfolio featuring lullaby chimes, dream lanterns, and delivery routes.",
  authors: [{ name: "Md Asif" }],
  keywords: [
    "Pip",
    "Pip the Skull Baby",
    "Midnight Nursery",
    "Junior Dream Engineer",
    "haX.baby",
    "interactive portfolio",
    "storybook",
    "lullaby",
  ],
  icons: {
    icon: "/assets/pip_avatar_cloud.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#29334A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to nursery content
        </a>
        <SoundProvider>{children}</SoundProvider>
      </body>
    </html>
  );
}
