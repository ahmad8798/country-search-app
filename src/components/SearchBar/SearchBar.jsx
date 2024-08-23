import { useState } from 'react'
import './searchbar.css'

import { Form } from "react-bootstrap"


const SearchBar = ({isDarkModeEnabled,handleSearchChange}) => {
  const [searchTerm,setSearchTerm] = useState("")

  const handleChange = (e)=>{
      setSearchTerm(e.target.value)
      handleSearchChange(e.target.value)
  }
  return (
    <>
        <div className='search-wrapper position-relative'>
        <i className={`bi bi-search position-absolute search-icon ${isDarkModeEnabled&&"text-light"}`}></i>
                 <Form.Control onChange={handleChange} value={searchTerm} style={isDarkModeEnabled ? { backgroundColor: "hsl(209, 23%, 22%)", color: "white" } : {}} className={`custom-input border border-0 shadow-lg ${isDarkModeEnabled&&"custom-input-dark"}`}   placeholder="Search for a country..."/>
        </div>
    </>
  )
}

export default SearchBar
