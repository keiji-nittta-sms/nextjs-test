"use client"
import Link from "next/navigation";
import React from "react";
import pageStyles from "../styles.module.css";

export default async function List2() {
    const url = process.env.API_SERVER
    const result =  await fetch(`http://localhost:8003/users`)
    const users = await result.json()

   await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("bbbb")
    return (
        <div >
            <table>
                <thead>
                <tr>
                    <td>id</td>

                    <td>name</td>
                    <td>age</td>
                    <td>address</td>
                </tr>
                </thead>
                <tbody>
            {users.map(({id, name, age,address}) => (
                <tr>
                    <td>{id}</td>

                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{address}</td>
                </tr>

            ))}
            </tbody></table>
        </div>
    );
}
