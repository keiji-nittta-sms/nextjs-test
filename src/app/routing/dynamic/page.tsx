import Link from "next/link";
import React from "react";
import  ParamedLink from "./_client_components/paramdLink";
import  ParamedLink2 from "./_client_components/paramdLink2";

export default async function Home() {
    return (
    <div>
        Dynamicルートはディレクトリ名に[]をつけることで可変URLに対応できる仕組みです。<br />
(Laravelのルートパラメーターに相当)
        <ul>
            <li>
                <div>
                下記リンク先では入力欄に入力したURLを元に単一のpage.tsxファイルが表示するのを確認できます。
            </div>
               <ParamedLink url={'/routing/dynamic/type1'} />
            </li>
            <li>
                <div>
                 下記リンク先では入力された3個の数字を元に設定された複数セグメントのパスを元にアクセスし、<br/>
                それらの数字をサーバーで計算、表示するのを確認出来ます。
                </div>
                <ParamedLink2 url={'/routing/dynamic/type2'} />
            </li>
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
