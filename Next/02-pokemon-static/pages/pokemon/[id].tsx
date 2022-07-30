import { useRouter } from "next/router"
import { Layout } from "../../components/layouts"

const PokemonPage = () => {

  // Esto podria usarse pero se usará otra forma
  // const router = useRouter()
  // console.log(router.query)

  return (
    <Layout title='Algun pokemon'>
        <h1>Hola mundo</h1>
    </Layout>
  )
}

export default PokemonPage