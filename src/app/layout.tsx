import Header from "@/components/Header";
import "./globals.css";
import { Open_Sans } from "next/font/google";
const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "이성은 포트폴리오",
    template: "이성은 포트폴리오 | %s",
  },
  description: "프론트엔드 개발자 이성은 포트폴리오",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full max-w-auto mx-auto">
        <Header />
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
