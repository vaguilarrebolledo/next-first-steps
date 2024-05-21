'use client';
import Link from "next/link";
import style from './ActiveLink.module.css'
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
    path: string;
    text: string;
}

export const ActiveLink = ({ path, text}: ActiveLinkProps) => {
  const pathName = usePathname()

    return (
    <Link
        className={ `${style.link} ${ style['active-link']}`  } 
        href={ path} >
        {text}
   </Link>

  )
}
