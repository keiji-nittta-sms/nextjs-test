import Link from "next/link";
import React from "react";
export const metadata = {
    title: 'レイアウトで適用されているタイトル',
    description:"メタタグをNext.jsで付与するサンプル",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: 'SEO Sample',
    },
}

export default function RootLayout({children, params}) {

    return <>
        ※F12ツールを開いてメタデータを確認
        {children}
        <hr />
        <h5>layout.tsxで現在適用されているメタデータ</h5>
        <pre>{JSON.stringify(metadata,null,2)}</pre>


    </>
}
