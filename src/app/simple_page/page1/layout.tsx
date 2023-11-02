import styles from "./style.module.css"

export default function RootLayout({ children, params }) {
  const url = process.env.API_SERVER;

  return (

        <div style={{display:"flex" ,height:'100%'}}>
          <div style={{"border-right":"1px black solid",width:'200px'}} >Page1/layout.tsx
          <br />
              <div className={styles.text1}>
                 クラス['text1']適用
              </div>

              <div className={`${styles.text1} ${styles.text2}`}>
                 クラス['text1' 'text2']適用
              </div>
          </div>
          <div>
            {children}
          </div>
          </div>

    );
}
