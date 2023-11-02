import {headers} from "next/headers";
import React, {ReactNode} from "react";

import SelectedSegment from "../selected_segment";
import styles from '../styles.module.css';
import type {Metadata} from "next";
import "../../global.css";
import 'bootstrap/dist/css/bootstrap.min.css'

export const metadata: Metadata = {
    title: "test",
    description: "test",
};

export default function Layout(Props: {
    children: React.ReactNode;
    sidebar: ReactNode;
}) {

    console.log("aabbbaabb")
    return (
        <>


            <div className={'row'}>
                <main className={"col-7"}>{Props.children}</main>

                <div className={"col-5"}>{Props.sidebar}</div>
            </div>

            <footer className="lp-footer"></footer>
        </>
    );
}
