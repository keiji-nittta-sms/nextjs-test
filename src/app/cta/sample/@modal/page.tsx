import {position} from "unist-util-position";
import {fi} from "date-fns/locale";
import Link from "next/link";

export default function deault(){


    return (
        <>
            <div style={{position:"fixed",height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0.5)" }}>
               <dialog style={{position:"absolute",top:"50%" ,left:"50%" , transform:"translate(-50%,-50%)",
                   display:"block",width:"50%",height:"50%",backgroundColor:"#fff"}} >
                  <Link href={"http://google.com"}>  ここに訴求メッセージ</Link>

                   <Link href={"/cta/set_clicked"}>閉じる</Link>

               </dialog>


            </div>

        </>
    )
}
