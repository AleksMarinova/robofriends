import React from "react";

const SearchBox=({ searchfield, searchChange })=>{
    return (
       <div className="pa2">
        <input className="search-box pa3 ba" 
        type="search" 
        placeholder="search robots" 
        onChange= {searchChange}></input>
       </div> 
    );
}

export default SearchBox;