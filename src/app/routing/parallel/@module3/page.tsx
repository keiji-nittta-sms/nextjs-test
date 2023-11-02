import Link from "next/link";
import React from "react";
import { notFound } from 'next/navigation'


export default async function Module2() {
    throw new Error("aaaaaaaaa")
    return (
     <div style={{border:"1px solid black"}}>
       iiiiii
     </div>
  );
}
