
import "./globals.css";

export const metadata = {
  title: "Birthday Reminder",
  description: "Página Web para recordatorios de cumpleaños",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
