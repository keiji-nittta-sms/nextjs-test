import React from "react";

export default async function Home() {
    const url = process.env.API_SERVER;
    const result = await fetch(`${url}/users`);

    interface user_type {
        id: number,
        name: string,
        age: number,
        address: string

    }

    const users: user_type[] = (await result.json());

    return (
<>
    サーバーコンポーネントを使った場合、初期表示はサーバー描画されるため
    <table style={{border: "1px solid black"}}>
            <thead>
            <tr>
                <th>id</th>
                <th>名前</th>
                <th>年齢</th>
                <th>住所</th>
            </tr>
            </thead>
            <tbody>
            {users.map(({id, name, age, address}) => {
                return (<tr>
                        <td> {id}</td>
                        <td> {age}</td>
                        <td> {name}</td>
                        <td> {address}</td>
                    </tr>
                )
            })}
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
