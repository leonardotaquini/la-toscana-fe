import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/theme-provider";


const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
});

export const metadata: Metadata = {
  title: "La Toscana",
  description: "Pizzeria artesanal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSerif.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
          {children}
          <Toaster position="top-center"/>
        </ThemeProvider>
      </body>
    </html>
  );
}
