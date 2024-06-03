import Provider from "@/redux/Provider";
import Footer from "./Components/Footer";
import FooterTop from "./Components/FooterTop";
import NavScrollExample from "./Components/Navbar";
import NavbarScrollExample from "./Components/Navbar1";
import Top from "./Components/TopButton";
import { AuthProvider } from "./Provider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Songchuan Tools Pakistan | Hand Tools Power Tools",
  description:
    "Songchuan Tools Pakistan | Hand Tools Power Tools | Trimming Tools | china tools | Tools Set | Tools Box",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Provider>
            <NavScrollExample />
            <NavbarScrollExample />
            <Top />
            {children}
            <FooterTop />
            <Footer />
          </Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
