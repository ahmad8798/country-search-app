import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const RegionsDropDownButton = ({isDarkModeEnabled}) => {
  return (
        <>
 <Dropdown>
      <Dropdown.Toggle style={{width:"160px"}} className={`text-dark border border-0 shadow-lg p-3 custom-dropdown-toggle ${isDarkModeEnabled?"dark-mode-element text-white":"bg-white"}`} id="dropdown-basic">
        Filter by region
        <i className={`bi bi-chevron-down ms-2 mt-1 ${isDarkModeEnabled&&"text-white"}`}></i>
      
      </Dropdown.Toggle>

      <Dropdown.Menu className={`mt-1 ${isDarkModeEnabled&&"dark-mode-element"}`} >
        <Dropdown.Item className={isDarkModeEnabled&&"text-white"} href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item className={isDarkModeEnabled&&"text-white"} href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item className={isDarkModeEnabled&&"text-white"} href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

        </>
  )
}

export default RegionsDropDownButton
