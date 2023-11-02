"use client"

import Link from "next/Link";
import {useState} from "react";
/*
* stateを使ったリアクティブな処理はclient componentでしか動作しないため
* 入力フォームを別コンポーネントとして切り出し
* */
export default function ParamedLink({url, child}){
    const [params,setParams]=useState()
    const paramChange= (e)=> setParams(e.target.value)
    return (
        <div>
            入力欄： <input type={"text"} value={params} onChange={paramChange} />
             <br />
            アクセス先パス： <Link href={url+"/"+params} > {url+"/"+params}</Link>
        </div> )
}