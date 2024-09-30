import { Fira_Code as FontMono, Inter as FontSans, Mulish as SecondaryFont } from "next/font/google";


export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const secondaryFont = SecondaryFont({
  subsets: ["latin"],
  variable: "--font-mulish",
});