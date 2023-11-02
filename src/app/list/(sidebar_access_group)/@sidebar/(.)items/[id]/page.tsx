
import Link from "next/link";
import React from "react";
import styles from "../../../../styles.module.css";
import {useSelectedLayoutSegments} from "next/navigation";
export default async function ItemDetail({params}:{ params: { id: string ,user:object} }) {
    const url = process.env.API_SERVER;
    const result = await fetch(`${url}/users`);

    console.log(result);
    const users = await result.json();

    const id =params.id
    console.log(params)
    const  user       = users.filter(function(item){ return item.id== params.id  })[0]

    return (
        <>
            <ul>
                <li><div className={ styles.image}> No Image</div></li>
                <li>名前:{user.name}</li>
                <li>年齢:{user.age}</li>
                <li>住所:{user.address}</li>
                <li>電話番号:{user.phone_number}</li>
                <li>メールアドレス:{user.email}</li>
                <li>趣味:{user.hobby}</li>
                <li>コメント:{user.comment}</li>
                <li>状態:{user.status}</li>

            </ul>

            {/*<div>*/}
            {/*    {users.map(({id, age, name, address, phone_number, status}) => (*/}
            {/*        <div className={"row " + styles.item_box} key={id}>*/}
            {/*            <div className={"row"}>*/}
            {/*                <div className={"col-4 " + styles.image}> No Image</div>*/}
            {/*                <div className={"col-8"}>*/}
            {/*                    <div className={"row"}>*/}
            {/*                        <div className={"col-6"}>名前：{id}</div>*/}
            {/*                        <div className={"col-6"}>年齢：{age}</div>*/}
            {/*                        <div className={"col-6"}>電話番号：{phone_number}</div>*/}
            {/*                        <div className={"col-6"}>住所：{address}</div>*/}

            {/*                        <div className={"col-6"}>状態：{status}</div>*/}
            {/*                        <div className={"col-6"}></div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <div className={"row"}>*/}

            {/*                    <div className={"col-4"}>*/}

            {/*                    </div>*/}

            {/*                    <div className={"col-4"}>*/}
            {/*                        <Link href={`/list/items/${id}`} shallow={true} 　replace>open in modal</Link>*/}
            {/*                    </div>*/}
            {/*                    <div className={"col-4"}>*/}
            {/*                        <Link href={`/list/items/${id}`} id={id} user={id}>*/}
            {/*                            move link{" "}*/}
            {/*                        </Link>*/}
            {/*                    </div>*/}

            {/*                </div>*/}


            {/*            </div>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}

        </>)
}
