import Link from "next/link";
import React from "react";

export default async function Home() {
    return (
    <div>
      <p>
        App RouterではReact.jsのServer Componentという仕組みを利用しているため、通常状態では初期ロードはサーバー描画され、画面上でのアクション（画面遷移など）はクライアント側で描画される。
        <br />(F12ツールで見るとわかりやすい)
        <br />また、従来のReactで行われるリアクティブな処理はServer Componentには記載できないため、.jsx/.tsxファイル先頭で"use client"を宣言する必要がある
      </p>

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
