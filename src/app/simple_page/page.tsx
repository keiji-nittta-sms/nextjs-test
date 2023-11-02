import Link from "next/link";
import React from "react";

export default async function Home() {
    return (
    <div>
      <p>
        App
        Routerでは、基本的にパス＝Appディレクトリ以下のディレクトリ構造となる
        <br />
        各ディレクトリのpage.tsxファイルが各ルートの実態になっている
        <br />
        現在のディレクトリは/app/simple_page/page.tsx
      </p>
      <Link href="/simple_page/page1/"> ページ1に移動（/app/simple_page/<span style={{color: 'red'} }>page1/page.tsx）</span> </Link>
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
