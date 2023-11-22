import React from "react";

export default function Layout({
  children,
}: {
  title: string;
  category?: string;
  desc?: string;
  children: JSX.Element | JSX.Element[];
  subline?: string;
}) {
  return <>{children}</>;
}
