import React from 'react'

const SearchBox = (props) => {
  return (
    <div>
      <input className="pa2 ba b--green bg-lightest-blue"
      type="search"
      placeholder="Search Robots"
      onChange = {props.searchChange}
      />
    </div>

  );
}

export default SearchBox
