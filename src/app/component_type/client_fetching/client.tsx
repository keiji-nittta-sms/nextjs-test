"use client"
import React, {useState,useEffect} from "react";
import {getStaticProps} from "next/dist/build/templates/pages";
interface user_type {
    id: number,
    name: string,
    age: number,
    address: string

}



export default    function List() {
    let    [users,setUsers]=useState([])

    const clickEv=   function (){
        fetch(`http://localhost:8003/users`)
            .then((res:Response)=> {
                 return res.json()
            }).then(  (data)=>{
            console.log (  data)

            return setUsers(data)
        } )
    }

    return (
        <>
         <button onClick={clickEv} >表示</button>
         <table style={{border: "1px solid black"}}>
             <thead>
             <tr>
                 <th>id</th>
                 <th>名前</th>
                 <th>年齢</th>
                 <th>住所</th>
             </tr>
             {users.map(({id, name, age, address}) => {
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
