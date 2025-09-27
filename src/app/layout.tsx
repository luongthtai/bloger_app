import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/helps/queryProvider";

export const metadata: Metadata = {
  title: "Bloger App",
  description: "Hello, welcome to my app!",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <html lang="en"><QueryProvider>{children}</QueryProvider></html>;
}
