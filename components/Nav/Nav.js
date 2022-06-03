//


//

import MyLink from "../MyLink/MyLink";
import s from './nav.module.css'
import AboutOrganization from "./AboutOgranization/AboutOrganization";


export default function Nav() {

    return (
        <>
            <input id="menu__toggle" className={s.menu} type="checkbox"/>
            <label className={s.menu__btn} htmlFor="menu__toggle">
                    <span>

                    </span>
            </label>

            <nav className={s.menu__box}>
                <MyLink address={'https://www.google.ru'} nameLink={'Ремонт мебели'} tar={'_blank'}/>
                <MyLink address={`pas`} nameLink={'Обивка мебели'}/>
                <MyLink nameLink={'Перетяжка мебели'}/>
                <MyLink nameLink={'Реставрация мебели'}/>
                <MyLink nameLink={'Ткани / материалы'}/>
                <MyLink nameLink={'Готовая мебель'}/>
                <MyLink nameLink={'Наши работы'}/>
                <MyLink nameLink={'Цены'}/>
                <MyLink nameLink={'Контакты'}/>
                <AboutOrganization headerH3={'Режим работы'} paragraph={'ПН-ВС 9:00-20:00'} />
                <AboutOrganization headerH3={'Адрес'} paragraph={'Минск, Витебск, Гомель, Могилёв. Выезжаем по областям'}/>
            </nav>

        </>
    )

}










