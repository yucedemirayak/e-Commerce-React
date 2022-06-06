import React from 'react';
import './index.scss';

const SearchAnimation = () => {
  return (
    <form action="" className="search-bar">
	<input type="search" name="search" pattern=".*\S.*" required/>
	<button className="search-btn" type="submit">
		<span>Search</span>
	</button>
</form>
  )
}

export default SearchAnimation;