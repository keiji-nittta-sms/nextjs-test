
import Link from "next/link";
import React from "react";
import Script from "next/script";
import {useState} from "react";

export default function Home() {
    const [html, setHTML] = useState("  <div style=\"color:red\"> aaaa</div>")

    return (<>


        <div>
            セキュリティ的にあまり推奨されないですが、HTMLをエスケープせず直接描画する方法としてdangerouslySetInnerHTML属性を使う方法があります。


        </div>

        <ul>
            <li>こちらに入力した内容を文字列として表示するケースと、HTMLとして表示するケース<br />
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
