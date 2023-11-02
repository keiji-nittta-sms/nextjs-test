
import React from "react";
export default  function Page({  params }: { params: { numbers: number[] }} )
{

    const numberArray:number[]=params.numbers
    const result:number =numberArray.reduce((sum:number ,current:number)=> Number(sum) +Number(current))
    return (
    <div>
        このURLはDynamicルートで指定された３個の数字を合計し、表示する
        <br />
        <div>・アクセス中ファイル　<br />/app/routing/dynamic/type1/[...numbers]/page.tsx</div>
        <div>・計算結果　<br />{result}</div>
    </div>
  );
}
