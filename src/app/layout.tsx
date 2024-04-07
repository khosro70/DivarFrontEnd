import type { Metadata } from "next";
import { vazirMatn } from "@/helpers/fonts";
import "./globals.css";
import MuiLayout from "@/components/layouts/MuiLayout";
import Header from "@/components/sheared/header/Header";
import ReduxLayout from "@/components/layouts/ReduxLayout";
import ReactQueryLayout from "@/components/layouts/ReactQueryLayout";

export const metadata: Metadata = {
  title: "دیوار",
  description: "وب سایت خرید و فروش کالا و خدمات",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MuiLayout>
      <ReduxLayout>
        <ReactQueryLayout>
          <html lang="fa" dir="rtl">
            <body
              style={{
                backgroundColor: "rgb(249 250 251 / var(--tw-text-opacity))",
              }}
              className={vazirMatn.className}
            >
              <Header />
              <div style={{ paddingLeft: "35px", paddingRight: "35px" }}>
                {children}
              </div>
            </body>
          </html>
        </ReactQueryLayout>
      </ReduxLayout>
    </MuiLayout>
  );
}
