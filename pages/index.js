import Head from "next/head";
import Image from 'next/image'

//


import Header from "../components/Header/Header";
import s from '../styles/Home.module.css'
import Link from 'next/link'

//


export default function Home() {

    const name = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (

        <div className={'wrapper'}>
            <Head>
                <title>Home</title>
                <link rel="icon" href="favicon.ico"/>
            </Head>

            <Header/>


            {/*<Link href="pas"><a>link on la</a></Link>*/}





            {/*<MaLink put={'https://www.google.ru'} nameLink={'lalalalala'}/>*/}


            {/*<Button means={'Узнать стоимость'}/>*/}


            {/*<ul>*/}
            {/*    {*/}
            {/*        name.map((i) => (*/}
            {/*            <li key={i}>{i}</li>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</ul>*/}

        </div>
    )

}
