"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "components/navbar/navbar";
import MobileNavbar from "components/navbar/mobile-navbar";
import Footer from "components/footer/footer";
import "styles/tailwindCSS.css";

const RootLayout = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const path = usePathname().slice(1);

  return (
    <html lang="en" data-theme={theme}>
      {path === "notes" && (
        <head>
          <title>Notes | Notes App</title>
          <link rel="icon" type="image/png" href="/notes-icon.png" />
        </head>
      )}
      <body>
        <main className="min-h-screen flex flex-col">
          {width > 768 ? (
            <Navbar theme={theme} setTheme={setTheme} />
          ) : (
            <MobileNavbar theme={theme} setTheme={setTheme} />
          )}
          <section className="min-h-screen">{children}</section>
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
