"use client";
import React from "react";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-lightgray mr-3 rounded-page min-h-[90vh]">
      <div className={`container mx-auto  py-30`}>
        {children}
      </div>
    </div>
  );
}
