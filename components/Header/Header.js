import Nav from "../Nav/Nav";
import Link from 'next/link'
import s from './header.module.css'
import LogoImgAndTelephone from "../LogoImg/LogoImgAndTelephone";

export default function Header() {
    return (
        <header className={s.head}>
            <LogoImgAndTelephone img={'/Logo.svg'} w={'56px'} h={'40px'}/>
          <a href={'tel:+375299122862'} className={s.tel}><LogoImgAndTelephone img={'/Telephone.svg'} w={'20px'} h={'20px'}/> </a>
            <Nav/>
        </header>
    )


}