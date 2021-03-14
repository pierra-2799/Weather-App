import React from 'react';
import {FaSearchLocation} from 'react-icons/fa';

class SearchBar extends React.Component{
    render(){
        return(
            <div className="InputBar">
                <form>
                    <input type="text" placeholder="Search City"/>
                    <button type="submit"><FaSearchLocation/></button>
                </form>
            </div>
        )
    }
}

export default SearchBar;