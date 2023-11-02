import React from "react";
import Link from "next/link";


export default function Home() {

    return (
        <div>
            Parallelルート（並行ルート）はBladeのテンプレートモジュールのように他のルート用に作ったファイルを子レイアウトとして表示する機能です。
        <br />
            特徴としては下記の通り
            <ul>
                <li>性質の違うページを同時に表示できる（ダッシュボード的な表示ができる）、それを利用してモーダルウィンドウなども作れる</li>
                <li>それぞれ別個のページのため、各ページに独自のレイアウト、not-foundページ、errorページ、loadingページを設定することができる</li>
                <li>JSX内で条件分岐させることで、内容の出しわけができる</li>
            </ul>

        <br />
        <br />
            <Link href={''}>aaaa</Link>
        </div>
    );
}
