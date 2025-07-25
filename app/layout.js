import {  Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./_components/theme-provider";
import { Toaster } from "sonner";
import FloatingShapes from "./_components/floating-shapes";
import Header from "./_components/Header";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";


const inter = Inter({subsets:['latin']})
export const metadata = {
  title: "pixelPulse",
  description: "fullstack image editor web app integrated with AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          <ClerkProvider
            appearance={{
            baseTheme:shadesOfPurple
          }}
          >
          <ConvexClientProvider>
          <Header/>
          <main className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
            <Toaster richColors />
            <FloatingShapes/>
            {children}
            </main>
            </ConvexClientProvider>
            </ClerkProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
