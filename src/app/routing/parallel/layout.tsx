import React from "react";
import styles from "./styles.module.css"

export default async function layout(props: { children, module1, module2, module3, module4,module5,module6,module7 }) {
    // console.log(props.module2.props.segmentPath)
    return (
        <div style={{width: "100%"}}>
            <div>{props.children}</div>

            <ul className={styles.parallelRoot} >

                <li className={styles.parallelChild}>
                    ページ内に他ページの内容を差し込める<br />
                    @module1/page.tsxを表示{props.module1}</li>
                <li className={styles.parallelChild}>
                    ページごとに独自のレイアウトを適用できる<br />
                    @module2/page.tsxを表示、@module2/layout.tsxを適用{props.module2}</li>
                <li className={styles.parallelChild}>
                    ページごとに独自のエラーページを差し込める<br />
                    @module3/page.tsxでエラー発生→@module3/error.tsxが表示{props.module3}</li>
                <li className={styles.parallelChild}>
                    対象ページがない場合default.tsxが描画される（ない場合はエラー）<br/>
                    @module4/default.tsxが表示{props.module4}</li>
                <li className={styles.parallelChild}>
                    独自のnot-foundページを出力することもできる<br/>
                    @module5/page.tsxでnotFound処理→@module4/not-found.tsxが表示{props.module5}</li>
                <li className={styles.parallelChild}>
                    APIで時間がかかる場合などはLoading画面の表示もできる
                    <br />（SetTimeOutでウェイトを入れている）
                    @module6/page.tsx{props.module6} </li>

                {/*<li className={styles.parallelChild}>@module4/page.tsxでnotFound処理→@module4/not-found.tsxが表示{props.module4}</li>*/}
            </ul>
        </div>
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
