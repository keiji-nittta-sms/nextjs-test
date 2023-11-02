import React from "react";
import Link from "next/link";

import  ParamedLink  from "../_client_components/paramdLink"
export default function Home() {

    return (
        <div>
            Intercept（傍受）ルートはディレクトリ名に(.)や(..)などをつけることで、実際のディレクトリ構造と違うルートで表示できる機能、
            　<br />また、/@module8/module8/page.tsxと/module8/page.tsxのように同じルートで認識されるファイルがある場合、通常だとエラーが発生するが

            <br />
            片方に傍受ルートをつけることで傍受ルートを定義した方が優先して処理される（リロード時はつけてない方）
            <br />

            ↑を利用したモーダルの実装については外部ページに良い作例があるためそちら参照（<Link href={"https://nextjs-play-app-routing.vercel.app/"}>https://nextjs-play-app-routing.vercel.app/</Link>）
            ※パラレルと傍受ルートを利用したモーダルの実装メリットとしては、ナビゲーションバックによるダイアログ閉じる動作の実装と、モーダル中身のSSR描画ができる点（単体ぺー時作れるため ）
            {/*<ParamedLink url={"/routing/parallel2/module7"}>  aaa</ParamedLink>*/}
        <br />
           　
        <br />
        <br />

        </div>
    );
}
