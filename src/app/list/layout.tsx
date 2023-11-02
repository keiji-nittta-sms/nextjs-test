import {headers} from "next/headers";
import React, {ReactNode} from "react";

import SelectedSegment from "./selected_segment";
import styles from './styles.module.css';
import type {Metadata} from "next";
import "../global.css";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Layout(Props: {
    children: React.ReactNode;
    sidebar: ReactNode;
}) {

    console.log("aabbbaabb")
    return (
        <>
            <div style={{padding:"10px 5%"}}>

                <div>
                    <SelectedSegment/>
                </div>
                {Props.children}
            </div>

            <footer className="lp-footer"></footer>
        </>
    );
}
