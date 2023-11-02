"use client"
import React, {useState,useEffect} from "react";
import {getStaticProps} from "next/dist/build/templates/pages";
interface user_type {
    id: number,
    name: string,
    age: number,
    address: string

}
 let    response
fetch(`http://localhost:8003/users`)
    .then((res:Response)=>res.json())


export default async  function List(props) {

    return (
        <>
         <button >表示</button>
         <table style={{border: "1px solid black"}}>
             <thead>
             <tr>
                 <th>id</th>
                 <th>名前</th>
                 <th>年齢</th>
                 <th>住所</th>
             </tr>
             {props.users.map(({id, name, age, address}) => {
                 return (  <tr key={id}>
                         <td> {id}</td>
                         <td> {age}</td>
                         <td> {name}</td>
                         <td> {address}</td>
                     </tr>
                 )
             })}

             </thead>
             <tbody>


        </tbody>
</table>
</>
    );
}

// export const getStaticProps: GetStaticProps = async () => {
//     const allPostsData = getSortedPostsData();
//     return {
//         props: {
//             allPostsData,
//         },
//     };
// };
