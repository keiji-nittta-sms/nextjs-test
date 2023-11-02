import Link from "next/link";
import React from "react";
export const metadata = {
    title: 'タイトルだけ適用',
   　
}
export default async function Home() {


    return (
    <div>

            AppRouterにおいては以下の方法でmetaタグの設定が可能
        <ul>
            <li>layout.tsxやpage.tsxにmetadataオブジェクトとして定義することでmetaタグが出力される</li>
            <li>上位ルートのlayout.tsxで定義したメタタグは下層ルートに引き継がれる</li>
            <li>上位ルートのpage.tsxで定義したメタタグは下層ルートに引き継がれない</li>
            <li>外部ファイルで定義したオブジェクトを取り込んで使うことが可能</li>
         </ul>

        <Link href={"/seo/metadata/sample1"}>下層ルートで継承されている内容を確認 </Link>
        <h5>page.tsxで現在適用されているメタデータ</h5>
        このページでは下記の定義をしているため、レイアウトで定義されているタイトルが使われていないことが確認できる
        <pre>{JSON.stringify(metadata,null,2)}</pre>
    </div>
  );
}