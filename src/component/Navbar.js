import React from "react";
import { handleMovieSearch,addTolist,remove } from "../actions";
import './style.css'
class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state={
          searchText:'',
        }
      }


    // handle backspace key 
handleDown=(event)=>{
    if(event.key === 'Backspace'){
        console.log('backspace')
    this.props.dispatch(remove());
    }
}
handleSearch=(event)=>{    
    const {searchText}=this.state
    this.props.dispatch(handleMovieSearch(searchText));
}
 handleChange=(e)=>{
this.setState({
searchText:e.target.value
})
 }

 addToMovie=(movie)=>{
    this.props.dispatch(addTolist(movie))
 }



    render()
    {
        const {store}=this.props
        const {search}=store.getState();
        const {showBox,result}=search;
        
        

        return(
        <>
       <div className="nav">
       {/*   */}
       
<div className="search-box"> 
<input type="text" id="movie-name"  placeholder="search" onKeyPress={this.handleSearch} onKeyDown={this.handleDown} onChange={this.handleChange}></input>
</div>
<button className="search-btn" onClick={this.handleSearch}>search</button>

       </div>

{showBox?
<div className="new-box">
<div className="left-search">
<img alt="image" src={result.Poster} />
{/* {console.log()} */}
</div>
<div className="right-search">
<div className="title">
<h2 className="search-heading">{result.Title}</h2>
</div>
<div className="plot">
    <p>
       {result.Plot
       }
    </p>
</div>


<div className="search-footer">
<button className="add-to-movies" onClick={()=>this.addToMovie(result)}>Add to movies</button>
</div>
</div>
</div> 
: ''}



        </>    
        )
    }

}

export default Navbar;