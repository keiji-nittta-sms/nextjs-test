　import Link from "next/link";
import React from "react";
import Script from "next/script";

export default   function Home() {


    return (<>

        <div>
            <Script src="https://yubinbango.github.io/yubinbango/yubinbango.js"　
                   strategy="lazyOnload" 　 />



            <form className="h-adr">
                <span className="p-country-name" style={{display:'none'}}>Japan</span>

                〒<input type="text" className="p-postal-code" size="8" maxLength="8" /><br />

                <input type="text" className="p-region p-locality p-street-address p-extended-address" ></input>
            </form>

        </div>
    </>)
}
