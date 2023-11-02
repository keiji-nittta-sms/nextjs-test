import Link from "next/link";
import React from "react";

export default async function layout({children}) {
    return (
     <div style={{padding:"5px"}}>
         <div style={{border:"1px solid blue",padding:"5px"}}>
         {children}</div>
     </div>
  );
}
