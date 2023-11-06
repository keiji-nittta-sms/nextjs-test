import Link from "next/link";


export default function RootLayout({children, params}) {
    const url = process.env.API_SERVER;

    return (
        <div className={'container'}>
            <div style={{display: "flex", width: "100%"}}>
                <ul style={{borderRight: "1px solid black", width: "300px"}}>
                    <li>
                        <Link href={'/component_type/client_fetching'}>従来のAjaxでのリスト出力 </Link>
                    </li>
                    <li>
                        <Link href={'/component_type/server_component'}> Server Componentによるリスト出力 </Link>
                    </li>

                    <li>
                        <Link href={'/component_type/client_component'}> Client Componentによるリスト出力 </Link>
                    </li>
                  　

                </ul>


                <div> {children}</div>

            </div>

        </div>

    );
}
