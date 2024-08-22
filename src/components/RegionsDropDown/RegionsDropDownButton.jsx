import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const RegionsDropDownButton = () => {
  return (
        <>
 <Dropdown>
      <Dropdown.Toggle style={{width:"160px"}} className='bg-white text-dark border border-0 shadow-lg p-3 custom-dropdown-toggle' id="dropdown-basic">
        Filter by region
        <i className="bi bi-chevron-down ms-2 mt-1"></i>
      
      </Dropdown.Toggle>

      <Dropdown.Menu className='mt-1' >
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

        </>
  )
}

export default RegionsDropDownButton
