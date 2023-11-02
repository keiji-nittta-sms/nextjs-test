import Link from "next/link";
import React from "react";

export default async function Home() {
    return (
    <div>
        robots.txtやsitemap.xmlなどのメタデータファイルは/app以下に配置したtsファイルで生成される
        <div style={{borderBottom:"1px solid black" , marginBottom:"5px" } }>

            <h5>WEBアプリマニフェスト</h5>
            WEBサイトをPWAアプリとして動作させるためのマニフェストファイルは<br />
            /app/manifest.tsに定義を記載することで生成される<br />
            <br />
            ・実際に生成されたファイル
            <iframe style={{height:'300px',width:'100%'}} 　src={"/manifest.webmanifest"}></iframe>
        </div>
        <div style={{borderBottom:"1px solid black" , marginBottom:"5px" } }>

            <h5>sitemap</h5>
            sitemap.xmlは　/app/sitemap.tsに定義を記載することで生成される<br />
            <br />
            ・実際に生成されたファイル
            <Link href={"/sitemap.xml"}>こちらから確認</Link>

        </div>
        <div style={{borderBottom:"1px solid black" , marginBottom:"5px" } }>

            <h5>robots.txt</h5>
            obots.txtは　/app/robots.tsに定義を記載することで生成される<br />
            <br />
            ・実際に生成されたファイル
            <iframe style={{height:'300px',width:'100%'}} 　src={"/robots.txt"}></iframe>
        </div>
    </div>
  );
}