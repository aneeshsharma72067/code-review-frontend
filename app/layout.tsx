import { FileProvider } from "@/context/FileContext";
import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react"; // Import React
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Code Review",
  description:
    "Enhance your code quality with our advanced AI-powered code review system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <FileProvider>{children}</FileProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
