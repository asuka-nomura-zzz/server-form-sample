import type { Metadata } from "next";
import { AppWrapper } from "./hooks/useAppContext";
import "./globals.css";

import { getTimeslots } from "./utils/getTimeslots";
import { Timeslot } from "./types/Timeslot";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'server form sample',
  description: 'server form sample',
};

export const revalidate = 0;

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const fetchedData = await getTimeslots();

  const timeslots: Timeslot[] = (fetchedData ?? []).map(item => ({
    id: item.id as number,
    name: item.name as string,
    stock: item.stock as number,
  }));

  return (
    <AppWrapper timeslots={timeslots} >
      <html lang="ja">
        <body className="antialiased">
          <div className="max-w-8xl mx-auto min-h-screen my-10 xl:mx-auto p-6 bg-white">
            <Link href="/"><h1 className="p-3 text-center font-bold text-2xl mb-16">Asuka Nomura&apos;s Work Sample</h1></Link>
            {children}
          </div>
        </body>
      </html>
    </AppWrapper>
  );
}
