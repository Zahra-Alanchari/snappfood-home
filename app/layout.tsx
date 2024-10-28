"use client";
import store from "@/redux/store";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import "../style.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body
          style={{
            margin: "0",
            padding: "0",
            width: "100%",
            backgroundColor: "#FF38AC",
          }}
        >
          <link rel="icon" href="/favicon.png" sizes="16*16" />
          <link rel="apple-touch-icon" href="/favicon.png" sizes="16*16" />
          {children}
        </body>
      </html>
    </Provider>
  );
}
