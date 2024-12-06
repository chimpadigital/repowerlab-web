import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/pages/shared/navbar";
import Footer from "@/components/pages/shared/footer";
import FixedMenu from "@/components/pages/shared/FixedMobMenu";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { metadataHome } from "../getMetaData";



export async function generateMetadata({ params: { locale } }: any): Promise<Metadata> {
  return metadataHome(locale);
  
}


export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html suppressHydrationWarning lang={locale}>
      <head />
      <body className={clsx("min-h-screen bg-background antialiased")}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <div className="relative flex flex-col mt-[20px]  lg:mt-[40px]">
              <main className="mx-auto flex-grow w-full">{children}</main>
              <Navbar />
              <FixedMenu />
              <Footer />

            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
