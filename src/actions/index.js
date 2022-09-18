export  default  function Addmovies(data){
    return{
        type:'Add_movies',
        movies:data
    }
}


 export const RemoveFromfav=(movie)=>{
    return{
        type:'RemoveFromfav',
        movie:movie
    }
}

 export const Addtofav=(movie)=>{
    return{
        type:'Add_to_fav',
        movie:movie
    }
}

export const showFav=(val)=>{
    return{
        type:'Showfav',
        val:val
    }
}
export const addTolist=(movie)=>{
    return{
  type:'movie_fetch_by_search',
  movie:movie
    }
}

export function handleMovieSearch(movie){
    const url=`https://www.omdbapi.com/?apikey=fef85e78&t=${movie}`
    return function(dispatch){
    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((movie)=>{
        dispatch(addToSearch(movie))
        console.log('movie action' ,movie);
    })

  
}
}

export function addToSearch(movie){
    return{
        type:'add_movie_in_search',
        movie:movie 
    }
}
export function removeBox(){
    return{
        type:'remove-box',
        val:false
    }
}
// export default{Addmovies, RemoveFromfav, Addtofav}

