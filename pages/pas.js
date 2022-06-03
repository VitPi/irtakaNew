//

import Link from 'next/link'
import Head from 'next/head'


export default function LastPost() {
    return (
        <>

        <Head>
           <title>
               LALALALLA
           </title>
        </Head>


        <h1 className="title">
            Read{" "}
            <Link href="/">
                <a>this page!</a>
            </Link>
        </h1>
        </>
    )
}


