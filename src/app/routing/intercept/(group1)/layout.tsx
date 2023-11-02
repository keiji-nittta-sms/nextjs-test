import React from "react";
import styles from "../styles.module.css"

export default async function layout(props: { children, module7,module8 }) {
    console.log(props)
    return (
        <div style={{width: "100%"}}>
            <div>{props.children}</div>

            <ul className={styles.parallelRoot} >

                <li className={styles.parallelChild}>
                    @module7/module7/page.tsxを表示{props.module7}</li>
                <li className={styles.parallelChild}>
                    @module8/module8/page.tsxを表示{props.module8}</li>
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
