"use client";

import Header from "@/components/common/Header";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div lang='en'>
      <Header></Header>
      {children}
    </div>
  );
}
