import { pokeApi } from "../api"
import { Pokemon } from "../interfaces"

export const getPokemonInfo = async( nameOrId: string ) => {

    try {
        const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ nameOrId }`)
        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites,
        }
    } catch (error) {
        //Si existe un 404 en la llamada a la API, generalmente si no existe el endpoint, por ejemplo /pokemon/455353
        return null //Esto implica que la funcion getPokemonInfo puede retornar un "pokemon" (id, name, sprites) o null
    }
  
}