import './Search.css'
import React, {useState, useEffect} from 'react'

const Search = ({handleSearch}) => {
    const [searchQuery, setSearchQuery] = useState("")

//     const[filterValue, setFilterValue] = useState("")
//     const[searchTerm, setSearchTerm] = useState("")

//     useEffect(()=> {
//         getNews(filterValue)
//     },[filterValue, getNews])
//   const selections = (
//     <select
//       name="filter"
//       className="filter"
//       id="filter"
//       value={filterValue}
//       onChange={(event) => handleChange(event)}
//     >
//       <option value="business">Business</option>
//       <option value="entertainment">Entertainment</option>
//       <option value="general health">General Health</option>
//       <option value="science">Science</option>
//       <option value="technology">Technology</option>
//     </select>
//   );

const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery)
    console.log(searchQuery, "SQline 32")
}

return (
  <div className="searchbar-container" >
    <div className="searcbar-container-left">selections</div>
    <form className="searchbar-container-right" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for article..."
      />
    </form>
  </div>
);
}

export default Search