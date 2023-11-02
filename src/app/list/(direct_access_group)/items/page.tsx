 import Link from "next/link";
import React from "react";
import styles from "../../../styles.module.css";
 import {redirect} from "next/navigation";
export default async function ItemDetail({params}:{ params: { id: string ,user:object} }) {


    console.trace()

   return redirect("/list")
}
