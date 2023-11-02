import Link from "next/link";
import React from "react";
export const metadata = {
    description: 'descriptionだけ変更',
  　
}
export default async function Home() {


    return (
    <div>

        <h5>page.tsxで現在適用されているメタデータ</h5>
        上位ページのpage.tsxで設定したタイトルが適用されず、このファイルで定義したdescriptionだけが変更される事が確認出来る
        <pre>{JSON.stringify(metadata,null,2)}</pre>
    </div>
  );
}