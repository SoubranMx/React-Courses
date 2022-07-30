import { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api'

import { Layout } from '../components/layouts'
import { Button } from '@nextui-org/react'
import { PokemonListResponse, SmallPokemon } from '../interfaces'


interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({pokemons}) => {
  console.log(pokemons)
  return (
    <Layout title='Listado de Pokemons'>
      <ul>
        {
          pokemons.map(({id, name}) => (
            <li key={ id }>
              #{ id } - { name }
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

/*
  Generalmente ponemos el staticProps abajo del componente que la usa
  Las props que se definen aquí, van a ser pasadas como props al componente (HomePage en este caso)
  
  GetStaticProps se ejecuta del lado del servidor y SOLO SE EJECUTA en build time (yarn build). Eso y en yarn dev.
  Solo pueden usarse dentro de Pages, no en cualquier componente.
  Es decir, en esa función puede leerse el filesystem, peticiones http con secret tokens, base de datos, etc. Cosas que suelen ser del lado del servidor.
  Nada llega al cliente, con excepcion de las props

  El siguiente comentario viene cuando se usa el snippet nextgetStaticProps
*/

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  //const { data } = await  // your fetch function here 
  //console.log('Hola mundo staticProps') //Este clg aparece en la consola (Terminal), no en la consola de Chrome/Edge/Firefox
  
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemons: SmallPokemon[] = data.results.map((poke, index) => ({
      ...poke,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ index + 1 }.svg`
  }))

  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/id.svg

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
