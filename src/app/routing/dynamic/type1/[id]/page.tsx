"use client"
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";
export default async function Home() {
    return (
    <div>
        client componentでusePathName()を使ってパス表示1<br />
        (server componentでは不可)
        <br />
        client componentを使っているが、サーバーからはその部分までHTMLで返却される
        <br />
        <br />


        <div>・アクセス中ファイル　<br />/app/routing/dynamic/type1/[id]/page.tsx</div>
        <div>・アクセス中URL　<br />{usePathname()}</div>


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
