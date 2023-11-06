"use client"
import Link from "next/link";
import React from "react";
import Script from "next/script";
import {useState} from "react";

export default function Home() {
    const [html, setHTML] = useState("  <div style=\"color:red\"> aaaa</div>")

    return (<>


        <div>
            "user client"をファイルの先頭で宣言することで
            <br />useState(),useEffect()などのリアクティブな処理を記述できるようになります。
            <br />





        </div>
        <h5>入力した内容を文字列やHTMLとして即座に反映するサンプル</h5>
        <span style={{fontSize:"small" }}>※セキュリティ的にあまり推奨されないですが、このサンプルではHTMLをエスケープせず直接描画する方法としてdangerouslySetInnerHTML属性を使っています。
        </span>
        <ul>
            <li>
               入力欄<br />
                <textarea onChange={(e) => {
                setHTML(e.target.value)
            }}>{html}</textarea></li>
            <li>
                文字列として表示<br />
                <div>
                    {html}
                </div>
            </li>
            <li>HTMLとして表示<br />
                <div dangerouslySetInnerHTML={{__html: html}}>

                </div>
            </li>
        </ul>



    </>)
}
