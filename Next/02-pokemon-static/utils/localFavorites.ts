

const toggleFavorite = ( id: number ) => {

    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]')

    if ( favorites.includes(id) ){
        favorites = favorites.filter( pokeID => pokeID !== id )
    } else {
        favorites.push( id )
    }

    localStorage.setItem( 'favorites', JSON.stringify( favorites ) )

}

const existsInFavorites = ( id: number ): boolean => {
    if ( typeof window === 'undefined' ) return false;  //Como primero se corre el del server, esto se corre y regresa, luego pasa el lado del cliente

    const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]')

    return favorites.includes( id )
}

const pokemons = (): number[] => {

    //se usara el useEffect para verificar si existe algo en el lS en vez de las soluciones anteriores
    return JSON.parse( localStorage.getItem('favorites') || '[]' )

}

export default {
    existsInFavorites,
    toggleFavorite,
    pokemons
}