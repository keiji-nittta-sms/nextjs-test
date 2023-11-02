 import Link from "next/link";
import React from "react";
import styles from "../../../styles.module.css";
export default async function ItemDetail({params}:{ params: { id: string ,user:object} }) {
    const url = process.env.API_SERVER;

    const result = await fetch(`${url}/users`);

  const users = await result.json();
  console.log('users')
    console.log(result.headers.get("date"));
    console.log(result.headers.get("connection"));

    const id =params.id
    console.log(params)
  const  user       = users.filter(function(item){ return item.id== params.id  })[0]
     console.log(user)


   return (
    <nav>
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
    </nav>
  );
}
