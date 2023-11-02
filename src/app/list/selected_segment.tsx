"use client";

import Link from "next/Link";
import { usePathname } from "next/navigation";
export default function SelectedSegment(Props: { path: string }) {
  const segments = usePathname().split("/");
  const currentSegment = segments[segments.length - 1];

  const nav = segments.map((item: string, index: number) => {
    const separator = index < 2 ? <span></span> : <span>&gt;</span>;
    if (item === currentSegment) {
      return [separator, <span key={item}> {item} </span>];
    } else {
      return [
        separator,
        <span key={item}>
          <Link href={"/" + item}>{item}</Link>
        </span>,
      ];
    }
  });

  return nav;
}
