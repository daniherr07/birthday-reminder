
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "Remember My Bday",
  description: "Página Web para recordatorios de cumpleaños",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        {children}
      </body>
    </html>
  );
}
