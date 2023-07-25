import './Search.css'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Search = ({handleSearch, resetSearch}) => {
    const [searchQuery, setSearchQuery] = useState("")
    const [error, setError] = useState('')
     const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery)
    console.log(searchQuery, "SQline 32")
    resetSearch()
     navigate("/results");
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