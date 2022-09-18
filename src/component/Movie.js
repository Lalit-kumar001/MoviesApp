import React  from "react"
import {Addtofav} from '../actions'
import {RemoveFromfav} from '../actions'
import './style.css'

class Movie extends React.Component{
handleFavClick=()=>{
   const {movie}=this.props;
//    console.log(movie)
   this.props.dispatch(Addtofav(movie));
   console.log(this.props.store.getState())
}
handleUnFavClick=()=>{
    const {movie}=this.props;
    //    console.log(movie)
       this.props.dispatch(RemoveFromfav(movie));
       console.log(this.props.store.getState())
}


    render(){


      const  {isMoviefav}=this.props
        const {movie}=this.props;
       console.log('rating',movie.Ratings[0].Value)
        return(
 <div className="Movie-card" id="mo">

<div className="left">
    {/* jbbdsbchjcfbhjzc */}
<img alt="i" src={movie.Poster} />
</div>


<div className="right">
<div className="title">
<h2 className="heading">{movie.Title}</h2>
</div>
<div className="plot">
    <p>
       {movie.Plot}
    </p>
</div>


</div>
<div className="footer">
<div className="rating">{movie.Ratings[0].Value}</div>

{isMoviefav
?<button className="unfav-btn" onClick={this.handleUnFavClick}  >unfavourite</button>
:<button className="fav-btn" onClick={this.handleFavClick}  >favourite</button>
 }

{/* */}
</div>

 </div>    

        )
    }
}

export default Movie