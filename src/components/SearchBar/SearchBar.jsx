import './searchbar.css'

import { Form } from "react-bootstrap"


const SearchBar = () => {
  return (
    <>
        <div className='search-wrapper position-relative'>
        <i className="bi bi-search position-absolute search-icon"></i>
                 <Form.Control className="custom-input  border border-0 shadow-lg"   placeholder="Search for a country..."/>
        </div>
    </>
  )
}

export default SearchBar
