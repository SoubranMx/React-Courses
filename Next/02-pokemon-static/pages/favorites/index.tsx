import { Grid, Text } from '@nextui-org/react'
import { Layout } from '../../components/layouts'

const FavoritesPage = () => {
  return (
    <Layout title='Favoritos'>
        <Grid.Container gap = { 2 } justify='flex-start'>
            <Text h1>Favoritos</Text>
        </Grid.Container>
    </Layout>
  )
}

export default FavoritesPage