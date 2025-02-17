import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Toast } from "react-hot-toast";
import AuthProvider from "@/context/AuthProvider";

export const metadata: Metadata = {
  title: "CRM Dashboard",
  description: "CRM Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/*//@ts-ignore*/}
        <AuthProvider>
          <Toaster />
          {children}
          <Toast />
        </AuthProvider>
      </body>
    </html>
  );
}
