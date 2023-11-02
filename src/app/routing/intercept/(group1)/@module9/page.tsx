import Link from "next/link";
import React from "react";

export default async function Home(props) {
    return (
     <div　style={{border:"1px solid black"}}>

         下記リンクをクリックすると、このボックス内の要素が別ファイルの内容に切り替わる。
         <br　/>
         URLが書き換わるが、リロード時は同じルートを指す別のディクトリが読み込まれる。
         <br />
         ディレクトリ名の前につく(.)や(..)はインターセプトルートで、同じルートを指すディレクトリが複数ある場合、リンクのクリックはこれをつけたディレクトリが優先される
         <br />
         <Link href={"/routing/parallel2/module8_1"}>/routing/parallel2/(group1)/@module8/(..)module8_1 にリンク</Link>
         →リロード時は/routing/parallel2/(group2)module8_1 としてロードされる
         <br />
         <Link href={"/routing/parallel2/module8_2"}>/routing/parallel2/(group1)/@module8/(.)module8_2 にリンク</Link>
         →リロード時は/routing/parallel2/(group2)module8_2 としてロードされる      <br />


     </div>
  );
}
