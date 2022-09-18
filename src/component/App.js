import Movie from './Movie'
import Navbar from './Navbar'
import Addmovies from '../actions';
import {showFav} from '../actions'
import data from '../dataa';
import './style.css'
import React from 'react';
class App extends React.Component {


  componentDidMount(){
   const {store}=this.props;
   console.log('component fujnction running ')
   
 //subscribe to action fire
store.subscribe(()=>{
  console.log('updated')
  this.forceUpdate();
})

   //make api call
   //dispatch action
   store.dispatch(Addmovies(data));

  }

   isMoviefav=(movie)=>{
    const {movies}=this.props.store.getState()
    // const {favourites}=;
    const index=movies.favourites.indexOf(movie);

    if(index!==-1){
      return true
    }
    return false;
  }
showMovies=(val)=>{
  const {store}=this.props
  store.dispatch(showFav(val))

}

  render(){
  const {store}=this.props;
  const {movies}=store.getState();
  const {list,favourites,showfav}=movies;
  const mymovies=showfav?favourites:list
  return (
    <div className="App">
      <Navbar dispatch={this.props.store.dispatch} store={store}/>
    <div className='main'>
      <div className='tabs'>
      <div className='tab' onClick={()=>this.showMovies(false)}>movies </div>
      <div className='tab' onClick={()=>this.showMovies(true)}>favourite</div>
      </div>
      
      <div className='list'>
      {mymovies.map((movie)=>(
        // console.log(movie);
        <Movie movie={movie} dispatch={this.props.store.dispatch} store={store} isMoviefav={this.isMoviefav(movie)}/>
))}


      </div>

       </div>
    </div>
  );
}
}

export default App;
