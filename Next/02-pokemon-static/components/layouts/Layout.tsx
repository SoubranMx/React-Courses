import { FC, ReactNode } from "react"

import Head from "next/head"
import { Navbar } from '../ui';

interface Props {
    children?: ReactNode;
    title?: string;
}

//Obtiene el nombre del servidor. En dev, es http://localhost:3000, si se sube a vercel pues sera https://vercel.whatever.app
const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({children, title}: Props) => {
    
    //console.log({origin}) in web, should see http://localhost:3000, in console should say: '' and in vercel/server should say: 'https:pokemon-static-something.vercel.app'
  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name='author' content='Uriel Soubran' />
            <meta name='description' content={`Información sobre el pokemon ${title}`} />
            <meta name='keywords' content={`${title}, pokemon, pokedex`} />
            {/* OpenGraph MetaTags */}
            <meta property="og:title" content={`Información sobre ${ title }`}/>
            <meta property="og:description" content={`Esta es la página sobre ${ title }`}/>
            <meta property="og:image" content={`${ origin }/images/banner.png`}/>
        </Head>

        <Navbar />
        <main style={{
            padding: '0px 20px'
        }}>
            {children}
        </main>
    </>
  )
}