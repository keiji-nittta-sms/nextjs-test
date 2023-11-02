import Link from "next/link";
import React from "react";

export default async function Home() {
    return (
    <div>
      <p>
        現在のディレクトリは/app/simple_page/page1/page.tsx
<br/>
        App Routerでレイアウト機能がルートに組み込まれており、
        <br />
        かつ上位ページのレイアウトを継承してレイアウトが反映される
        <br />
        ページ２に遷移すると現在のレイアウトが維持されたまま新たなレイアウトを適用することができる。
          <br />
          <br />
          また、CSSクラスはルートごとに定義することができる（それぞれのディレクトリでstyles.module.cssを定義しインポート）
          <br />
          JSX上ではpage1とpage2のlayout.cssで同じtext1クラスを使っているが
          <br />
          同じクラス名で別のスタイルを適用できている。(それぞれ別のファイルからインポートしたクラスを適用)
          <br />
          そのため、よりスコープの狭いCSS定義は深いディレクトリで、スコープの広い定義は浅いディレクトリで定義するなどの使い分けができる
          <br />
          <br />
          <Link href="/app/siple_page/page3"> ページ3に移動（/app/simple_page/<span style={{color: 'red'} }>page3/page.tsx）</span> </Link>


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
