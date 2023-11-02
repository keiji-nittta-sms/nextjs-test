import Link from "next/link";
import React from "react";

export default async function Home(props) {
    return (
     <div　style={{border:"1px solid black"}}>

         下記リンクをクリックすると、このボックス内の要素が別ファイルの内容に切り替わる。
         <br　/>
         URLが書き換わるのでリロードすると404エラーになる（対象ルートのファイルがないため）
         <br />
         <Link href={"/routing/intercept/module7_1"}>/routing/parallel2/@module7/module7_1 にリンク</Link>
         <br />
         <Link href={"/routing/intercept/module7_2"}>/routing/parallel2/@module7/module7_2 にリンク</Link>
         <br />


     </div>
  );
}
