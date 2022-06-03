//

import Image from 'next/image'
import s from './logo.module.css'

export default function LogoImgAndTelephone({img, w,h, }) {
    return (
        <figure className={s.box}>
            <Image src={`${img}`} alt={'img'} width={`${w}`} height={`${h}`}/>
            <figcaption>
            </figcaption>
        </figure>
    )
}






