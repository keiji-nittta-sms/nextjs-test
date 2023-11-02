import Link from "next/link";
import {cookies} from "next/headers";


export default function layout({children, modal}) {
    const url = process.env.API_SERVER;
    const is_clicked=  cookies().has("cta_clicked")
    console.log('is_clicked')
    console.log(is_clicked)

    return (
        <div >
            { is_clicked? null:modal}
                <div className={'container'} style={{width:"100%"}}> {children}</div>

        </div>

    );
}
