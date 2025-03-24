import type { Metadata } from "next";
import NavBar from "./NavBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "./auth/AuthProvider";

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Tracks all your issues in one go",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AuthProvider>
          <Toaster position="top-right" duration={1500} />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            <main className="p-5">{children}</main>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
