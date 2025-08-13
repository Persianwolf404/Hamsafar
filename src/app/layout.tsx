import { Providers } from "./providers";
import { Vazir } from "@/shared/fonts";
import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="light" lang="fa" className={Vazir.className} suppressHydrationWarning>
      <body>
        {/* <Providers>
          </Providers> */}
          {children}
      </body>
    </html>
  );
}
