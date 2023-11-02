import Link from "next/link";
import React from "react";

export default async function Home() {
    return (
    <div>
      <p>
        現在のディレクトリは/app/simple_page/page1/page2/page.tsx
<br/>
        App Routerでレイアウト機能がルートに組み込まれており、
        <br />
        かつ上位ページのレイアウトを継承してレイアウトが反映される
        <br />
        ページ２に遷移すると現在のレイアウトが維持されたまま新たなレイアウトを適用することができる
          <br />
          <Link href="/simple_page/page1/page2"> ページ2に移動（/app/simple_page/page1/<span style={{color: 'red'} }>page2/page.tsx）</span> </Link>


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
