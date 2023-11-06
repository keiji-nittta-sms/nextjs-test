import Link from "next/link";
import React from "react";
import fs from 'fs'
export default async function Home() {

  return (
    <div>
      <h1>基本サンプル</h1>
      <ul>
        <li>
          <Link href="/simple_page">ルートとレイアウトおよびCSS </Link>
        </li>
        <li>
          <Link href="/component_type">サーバーコンポーネントとクライアントコンポーネント</Link>
        </li>
        <li>
          <Link href="/routing">特殊なルーティング</Link>

        </li>
        <li>
          <Link href="/middleware">ミドルウェア</Link>

        </li>
        <li>
          <Link href="/seo">SEO対策機能</Link>

        </li></ul>
        <h1>応用サンプル</h1>
        <ul>


        <li>
          <Link href="/list"> リスト表示 </Link>
        </li>
        <li>
          <Link href="/cta">訴求用モーダル再現</Link>

        </li>
          {/*<li>*/}
          {/*  <Link href={'/script_execute'}>HTML直接描画</Link>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <Link href={'/script_execute2'}>外部スクリプト実行</Link>*/}
          {/*</li>*/}
      </ul>
    </div>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//     const allPostsData = getSortedPostsData();
//     return {
//         props: {
//             allPostsData,
//         },
//     };
// };
