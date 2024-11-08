import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import FixedMenu from "@/components/FixedMobMenu";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};


export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])), // Cargar el archivo de traducción 'common' según el idioma
    },
  };
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx("min-h-screen bg-background antialiased")}>
        <Providers>
          <div className="relative flex flex-col  mt-[40px]">
            <Navbar />
            <main className="mx-auto flex-grow w-full">{children}</main>
            <FixedMenu />
            <Footer />

          </div>
        </Providers>
      </body>
    </html>
  );
}
