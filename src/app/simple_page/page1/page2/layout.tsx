import styles from "./style.module.css";
import rootStyles from "../style.module.css";


export default function RootLayout({ children, params }) {
  const url = process.env.API_SERVER;

  return (

        <div style={{display:"flex" ,flexDirection:'column',width:'100%'}}>
          <div style={{"border-bottom":"1px black solid",width:'100%'}} >Page2/layout.tsx
            <br />
              <div className={styles.text1}>
                  クラス['text1']適用
              </div>
              <div className={`${styles.text1} ${styles.text2}`}>
                  クラス['text1' 'text2']適用(text2はこのディレクトリのstyles.module.cssに定義されてないため適用されない)
              </div>

              <div className={`${rootStyles.text1} ${rootStyles.text2}`}>
                 上位レイヤークラス['text1' 'text2']インポートし適用
              </div>

          </div>
          <div>
            {children}
          </div>
          </div>

    );
}
