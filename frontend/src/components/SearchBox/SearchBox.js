import React from 'react';

const SearchBox = (props) =>{
    return(
        < input type="search"
        className='search'
        padding = "10px"
        plaseholder = {props.plaseholder}
        onchange ={props.handleChange}
        inline button='variant="outline-success">Search' >

        </ input>
        )
}

export default SearchBox;

