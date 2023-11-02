import Link from "next/link";


export default function RootLayout({children, params}) {
    const url = process.env.API_SERVER;

    return (
        <div className={'container'}>
            <div style={{display: "flex", width: "100%"}}>
                <ul style={{borderRight: "1px solid black", width: "300px"}}>
                    <li>
                        <Link href={'/seo/metadata_file'}>メタデータファイル</Link>
                    </li>
                    <li>
                        <Link href={'/seo/metadata_tag'}> metaタグ</Link>
                    </li>
                   　
            </ul>
                <div style={{width:"100%"}}> {children}</div>
            </div>

        </div>

    );
}
