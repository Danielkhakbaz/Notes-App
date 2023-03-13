"use client";

import { useState } from "react";
import Navbar from "components/navbar/navbar";
import Footer from "components/footer/footer";
import "styles/tailwindCSS.css";

const RootLayout = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <html lang="en" data-theme={theme}>
      <body>
        <main className="min-h-screen flex flex-col">
          <Navbar theme={theme} setTheme={setTheme} />
          <section>{children}</section>
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
