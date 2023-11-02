import Link from "next/link";
import React from "react";

export default async function Home() {
    return (
    <div>
        <Link href={'/cta/click_off'}> CTAクリック状態リセット </Link>
    <br />
        <Link href={'/cta/sample'}> CTAモーダル再現ページ </Link>
        </div>
  );
}