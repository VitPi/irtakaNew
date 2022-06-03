//


import Link from "next/link";
import s from './link.module.css'

export default function MyLink({address, nameLink,tar}) {
    return (
            <Link href={`${address}`}><a className={s.a} target={tar}>{nameLink}</a></Link>
    )
}

