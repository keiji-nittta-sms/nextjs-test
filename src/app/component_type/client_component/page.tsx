import React, {Suspense} from "react";
import List from './client'
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
            実際の描画部分をリアクティブにしても、ServerComponentを経由することで部分的にサーバー描画もできる
            <br />
            (ここではServerComponentで取得したデータをClientComponentに引き渡しその一部だけをサーバー描画している )
            <br />
                <List users={users}/>
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
