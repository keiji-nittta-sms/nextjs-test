import React, { Children, ReactNode } from "react";

import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "test",
  description: "test",
};

export default function RootLayout({ children, params }) {
  const url = process.env.API_SERVER;

  return (
    <html lang="ja">
      <body>
        <header>
          <div> ルートレイアウト（子ページでも継承）　　{url}</div>
        </header>
        {children}
      </body>
    </html>
  );
}
