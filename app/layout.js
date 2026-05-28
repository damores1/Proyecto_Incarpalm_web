import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "INCARPALM | Mapa de capacidades",
  description: "Aplicación web de pedidos y logística de salida basada en el mapa de capacidades de INCARPALM S.A."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
          <footer className="footer">
            <div className="container">
              Proyecto académico desarrollado con Next.js para reflejar capacidades de negocio de INCARPALM S.A.
            </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
