import React from "react";
import { handleMovieSearch,addTolist,removeBox } from "../actions";
import './style.css'
class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state={
          searchText:'',
        }
      }
handleSearch=()=>{
    const {searchText}=this.state
    // console.log('handle search ',searchText);
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
        // document.addEventListener('click',function(event){
        //   this.props.dispatch(removeBox())
        //  })
        const {store}=this.props
        const {search}=store.getState();
        const {showBox,result}=search;

        return(
        <>
       <div className="nav">
       
<div className="search-box"> 
<input type="text" placeholder="search" onKeyPress={this.handleSearch} onChange={this.handleChange}></input>
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