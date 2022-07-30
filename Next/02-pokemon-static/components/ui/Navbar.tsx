import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"

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
        <Text color="white" h2>P</Text>
        <Text color="white" h3>okémon</Text>
        <Spacer css={{flex: 1}}/>   {/* css se recomienda para elementos de nextui en vez de style */}
        <Text color="white">Favoritos</Text>
    </div>
  )
}