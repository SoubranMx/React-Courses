import NextLink from "next/link"
import Image from "next/image"
import { Spacer, Text, useTheme, Link } from "@nextui-org/react"

export const Navbar = () => {
    const { theme } = useTheme()
    
  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray200.value
    }}>
        <Image 
            // src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'} // no puedes usar imagenes asi con static generation, deberias tener las imagenes en la carpeta publica
            // si se requiere usar imagenes asi, tienes que darlas de alta como seguras? algo asi. En next.config.js, then restart yarn dev
            src = {'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'}
            alt='icono de la app'
            width={70}
            height={70}
        />
        <NextLink href='/' passHref>
          <Link>
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okémon</Text>
          </Link>
        </NextLink>
        <Spacer css={{flex: 1}}/>   {/* css se recomienda para elementos de nextui en vez de style */}
        <NextLink href='/favorites' passHref>
          <Link>
            <Text color="white">Favoritos</Text>
          </Link>
        </NextLink>
    </div>
  )
}