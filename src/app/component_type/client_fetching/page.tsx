import React, {Suspense} from "react";
import List from './client'
export default async function Home() {


    return (
        <>
            従来のAjax処理でデータ取得する場合は初期ロード時のDocumentにデータ部分は描画されない
            <br />
            (このファイルはServer Componentだが、↓のリスト部分はClientComponentでリアクティブに記述してある)
            <br />
                <List  />
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
