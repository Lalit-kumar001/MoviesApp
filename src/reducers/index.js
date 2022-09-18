

        console.log('reducers')

const initialState={
    list:[],
    favourites:[],
    showfav:false
}
export  function movies(state=initialState,action){
        if(action.type==='Add_movies'){
            return{
                ...state,
                list:action.movies
            }
    }
    else if(action.type==='Add_to_fav'){
        
        return{
            ...state,
            favourites:[action.movie,...state.favourites]
        }
    }
    else if(action.type==='RemoveFromfav'){
        const filteredArray=state.favourites.filter((movie)=>(
            movie.title!==action.movie.title
        ));

        return{
            ...state,
            favourites:filteredArray
        }
    }

    else if(action.type==='Showfav'){
        return{
            ...state,
            showfav:action.val
        }
    }

    else if(action.type==='movie_fetch_by_search'){
        return{
            ...state,
            list:[action.movie,...state.list],
            // showBox:false
        }
    }

    else{
    return state;
    }
}


// new reducers 

// search reducer 
const searchInitialstate={
    result:{},
    showBox:false
}
export function search(state=searchInitialstate,action){

    if(action.type==='add_movie_in_search'){
        return{
            ...state,
            result:action.movie,
            showBox:true
        }
    }
    else if(action.type==='movie_fetch_by_search'){
        return{
            ...state,
            showBox:false
        }
    }
    else if(action.type==='remove-card'){
        return{
            ...state,
            showBox:action.val
        }
    }
    return state;
}

// root reducer 

const rootInitialstate={
    movies:initialState,
    search:searchInitialstate
}
 export default function rootReducer(state=rootInitialstate,action){
    return{
        movies:movies(state.movies,action),
        search:search(state.search,action)
    }
 }