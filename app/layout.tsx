import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "CARXO Multiservicios | Residuos Peligrosos",
  description: "Logística y Gestión de Residuos Peligrosos con Seguridad Absoluta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" data-theme="carxo">
      <body className="flex flex-col min-h-screen bg-base-100 font-sans text-slate-900 antialiased">
        
        {/* Navbar corporativo */}
        <Navbar />

        {/* Contenido principal */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />
        
      </body>
    </html>
  );
}