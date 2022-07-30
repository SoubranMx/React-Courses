import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router"
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts"
import { Pokemon } from "../../interfaces";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({pokemon}) => {

  // Esto podria usarse pero se usará otra forma
  // const router = useRouter()
  // console.log(router.query)
  return (
    <Layout title='Algun pokemon'>
        <h1>{pokemon.name}</h1>
    </Layout>
  )
}


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes => [id].tsx
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`)
  
  return {
    //Asi se generan las paginas independientes 1, 2 y 3 al momento de yarn build
    // paths: [
    //   {
    //     params: { id: '1' }
    //   },
    //   {
    //     params: { id: '2' }
    //   },
    //   {
    //     params: { id: '3' }
    //   },
    // ],
    paths: pokemons151.map( id => ({
      params: { id }
    })),
    fallback: false //false manda un 404 cuando el path no coincide el id esperado.
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  //Cuando se ejecutan los paths, pasa a ejecutar staticprops. Ahora necesitamos el argumento desde el contexto con ctx.params
  const { id } = params as {id: string};

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ id }`)

  return {
    props: {
      pokemon: data
    }
  }
}


export default PokemonPage