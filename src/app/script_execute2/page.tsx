"use client"

　import Link from "next/link";
import React from "react";
import Script from "next/script";

export default   function Home() {
console.log("aaaaa")

    return (<>

        <div>
            <Script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
                    integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
                    crossorigin=""
             onReady={()=> {
                 console.log(L)

                var map = L.map('map');

                L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
                    attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
                }).addTo(map);

                map.setView([35.3622222, 138.7313889], 5);
            }} 　 />




        </div>
    </>)
}
