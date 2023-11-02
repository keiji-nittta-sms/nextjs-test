import {headers} from "next/headers";
import React from "react";
import Link from "next/link";
import styles from "../styles.module.css"
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css'

export default async function Home() {
    const url = process.env.API_SERVER;
    const result = await fetch(`${url}/users`);
    const users = await result.json();
    console.log("type1 aaaa");
    return (
        <>


            <div>
                {users.map(({id, age, name, address, phone_number, status}) => (
                    <div className={"row " + styles.item_box} key={id}>
                        <div className={"row"}>
                            <div className={"col-4 " + styles.image}> No Image</div>
                            <div className={"col-8"}>
                                <div className={"row"}>
                                    <div className={"col-6"}>名前：{id}</div>
                                    <div className={"col-6"}>年齢：{age}</div>
                                    <div className={"col-6"}>電話番号：{phone_number}</div>
                                    <div className={"col-6"}>住所：{address}</div>

                                    <div className={"col-6"}>状態：{status}</div>
                                    <div className={"col-6"}></div>
                                </div>
                            </div>

                            <div className={"row"}>

                                <div className={"col-6"}>

                                </div>

                                <div style={{textAlign:"right"} } className={"col-6"}>
                                    <Link href={`/list/items/${id}`}  >サイドバーに詳細を表示</Link>
                                </div>

                            </div>


                        </div>
                    </div>
                ))}
            </div>

        </>)
}

// export const getStaticProps: GetStaticProps = async () => {
//     const allPostsData = getSortedPostsData();
//     return {
//         props: {
//             allPostsData,
//         },
//     };
// };
