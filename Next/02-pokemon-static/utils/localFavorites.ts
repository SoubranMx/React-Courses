

const toggleFavorite = ( id: number ) => {
    console.log('toggleFavorite llamado')

    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]')

    if ( favorites.includes(id) ){
        favorites = favorites.filter( pokeID => pokeID !== id )
    } else {
        favorites.push( id )
    }

    localStorage.setItem( 'favorites', JSON.stringify( favorites ) )

}

export default {
    toggleFavorite,
}