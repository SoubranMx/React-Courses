import { useEffect, useState } from "react";

import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

import confetti from 'canvas-confetti'

//import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts"
import { Pokemon } from "../../interfaces";
import { localFavorites } from '../../utils'
import { getPokemonInfo } from '../../utils/getPokemonInfo';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({pokemon}) => {
  // Esto podria usarse pero se usará otra forma para obtener el ID como params
  // const router = useRouter()
  // console.log(router.query)

  const [isInFavorites, setIsInFavorites] = useState( false )

  useEffect(()=>{
    setIsInFavorites( localFavorites.existsInFavorites(pokemon.id) )
  },[pokemon.id])

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite( pokemon.id )
    setIsInFavorites( !isInFavorites )
    if( isInFavorites ) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }
    })
  }

  return (
    <Layout title={pokemon.name}>
        <Grid.Container css={{marginTop: '5px'}} gap={2}>
          
          <Grid xs={12} sm={4}>
            <Card isHoverable css={{ padding: '30px' }}>
              <Card.Body>
                <Card.Image 
                  src = {pokemon.sprites.other?.dream_world.front_default || pokemon.sprites.other?.home.front_default || 'no-image.png'}
                  alt = { pokemon.name }
                  width = '100%'
                  height = { 200 }
                />
              </Card.Body>
            </Card>
          </Grid>

          <Grid xs={12} sm={8}>
            <Card>
              <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
                <Text h1 transform="capitalize">{ pokemon.name }</Text>
                <Button 
                  color={'gradient'}
                  ghost = { !isInFavorites }
                  onPress = { onToggleFavorite }
                >
                  {
                    isInFavorites ? 'En Favoritos' : 'Guardar en favoritos'
                  }
                </Button>
              </Card.Header>
              <Card.Body>
                <Text size={30}>Sprites:</Text>
                <Container direction="row" display='flex' gap={ 0 }>
                  <Image 
                    src = { pokemon.sprites.front_default }
                    alt = { `${pokemon.name} front` }
                    width = { 100 }
                    height = { 100 }
                  />
                  {pokemon.sprites.back_default && (
                    <Image 
                      src = { pokemon.sprites.back_default || 'no-image.png' }
                      alt = { `${pokemon.name} back` }
                      width = { 100 }
                      height = { 100 }
                    />
                  )}
                  <Image 
                    src = { pokemon.sprites.front_shiny }
                    alt = { `${pokemon.name} front shiny` }
                    width = { 100 }
                    height = { 100 }
                  />
                  {pokemon.sprites.back_shiny && (
                    <Image 
                      src = { pokemon.sprites.back_shiny }
                      alt = { `${pokemon.name} back shiny` }
                      width = { 100 }
                      height = { 100 }
                    />
                  )}
                </Container>
              </Card.Body>
            </Card>
          </Grid>

        </Grid.Container>
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
    //fallback: false //false manda un 404 cuando el path no coincide el id esperado.
    fallback: "blocking"  //blocking nos deja pasar a GetStaticProps, por eso se muestra. Pero no se está generando la página estática.
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  //Cuando se ejecutan los paths, pasa a ejecutar staticprops. Ahora necesitamos el argumento desde el contexto con ctx.params
  const { id } = params as {id: string};
  const pokemon = await getPokemonInfo(id)

  if(!pokemon){
    return {
      redirect: {
        destination: '/',
        permanent: false  //es false porque pueeede ser que en algun punto si exista el pokemon id 4545, p. ej.
      }
    }
  }

  return {
    props: {
      pokemon
    },
    revalidate: 86400, //En SEGUNDOS, p.ej. si quisiera cada 24 horas => 60 * 60 * 24 y seria mejor poner el calculo ya hecho = 86400
  }
}


export default PokemonPage