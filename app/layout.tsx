"use client";
import store from "@/redux/store";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import "../style.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
      <Head>
          <title>اسنپ فود| سفارش انلاین غذا از تمامی رستوران ها و فست فودها</title> 
          <meta name="description" content="Description" />
        </Head> 
        <body
          style={{
            margin: "0",
            padding: "0",
            width: "100%",
            backgroundColor: "#FF38AC",
          }}
        >
          {children}
        </body>
      </html>
    </Provider>
  );
}
