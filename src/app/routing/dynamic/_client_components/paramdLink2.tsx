"use client"

import Link from "next/Link";
import {useState} from "react";
/*
* stateを使ったリアクティブな処理はclient componentでしか動作しないため
* 入力フォームを別コンポーネントとして切り出し
* */
export default function ParamedLink({url, child}){
    const [params1,setParams1]=useState(0)
    const [params2,setParams2]=useState(0)
    const [params3,setParams3]=useState(0)
    const paramChange1= (e)=> setParams1(e.target.value)
    const paramChange2= (e)=> setParams2(e.target.value)
    const paramChange3= (e)=> setParams3(e.target.value)
    const path=url+"/"+params1+"/"+params2+"/"+params3
    return (
        　<div>値1:<input type={"number"} value={params1} onChange={paramChange1} />
           <br /> 値2:<input type={"number"} value={params2} onChange={paramChange2} />
            <br /> 値3:<input type={"number"} value={params3} onChange={paramChange3} />

             <br />
            アクセス先パス： <Link href={path} > {path} </Link>
        </div> )
}