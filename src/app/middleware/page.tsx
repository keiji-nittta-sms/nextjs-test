import Link from "next/link";
import React from "react";

export default async function Home() {
    return (
    <div>
         ミドルウェアはリクエストを処理する前に読み込まれ、特定の処理を行うことができる。
          <br />
          今の所想定できる用途は下記
          <ul>
              <li>
                  アクセスログ出力処理(このページにアクセスした際にサーバーログとしていくつか出力している)
              </li>
              <li>
                  ログインページリダイレクト
              </li>
          </ul>
         <br />下記のような特徴がある
          <ul>
              <li>
                  システムに1個しか設定できない(appディレクトリと同階層)
              </li>
              <li>
                  ミドルウェアの対象にするルートを決めることができる（正規表現での指定も可能）→
              </li>
              <li>
                  リダイレクト、リライトを行ったり、独自のレスポンスを生成して返すことができる
              </li>
              <li>
                  ヘッダの設定
              </li>
          </ul>

<br />
        ・下記ルートにアクセスするとそれぞれログイン、ログアウト想定のCookieがミドルウェアで設定後、このページにリダイレクトで戻ってくる
        <br />
          <Link href={"/middleware/do_login"}>ログイン実行</Link>
          <br />

          <Link href={"/middleware/do_logout"}>ログアウト実行</Link>
          <br />
        ・下記ルートにアクセスするとログイン実行済みの場合はログイン済みルート(/middleware/logined)、ログアウト実行済みの場合は未ログインルート(/middleware/not_login)
        <br />
          <Link href={"/middleware/logined"}>ログインページ</Link>


    </div>
  );
}