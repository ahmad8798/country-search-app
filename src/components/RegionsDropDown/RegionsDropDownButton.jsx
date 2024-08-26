import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { themeContext } from '../../context/ThemeContext';

const RegionsDropDownButton = ({  regions,handleRegionChange,selectedRegion }) => {
  const {isDarkModeEnabled} = useContext(themeContext)
  const dropdownToggleClass = `text-dark border-0 shadow-lg p-3 custom-dropdown-toggle ${isDarkModeEnabled ? "dark-mode-element text-white" : "bg-white"}`;
  const dropdownMenuClass = `mt-1 p-0 ${isDarkModeEnabled && "dark-mode-element"}`;
  const dropdownItemClass = `py-0 ${isDarkModeEnabled && "text-white"}`;

  return (
    <Dropdown >
      <Dropdown.Toggle style={{ width: "160px" }} className={dropdownToggleClass} id="dropdown-basic">
        {selectedRegion?selectedRegion:"Select Region"}
        <i className={`bi bi-chevron-down ms-2 mt-1 ${isDarkModeEnabled && "text-white"}`}></i>
      </Dropdown.Toggle>

      <Dropdown.Menu className={dropdownMenuClass}>
        {regions.map((region) => (
          <Dropdown.Item onClick={()=>handleRegionChange(region)} key={region} className={dropdownItemClass}>
            {region}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default RegionsDropDownButton;
