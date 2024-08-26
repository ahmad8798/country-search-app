import CountryDetail from "./components/CountryDetail/CountryDetail";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { themeContext } from "./context/ThemeContext";
import { useContext } from "react";

const App = () => {

  const {isDarkModeEnabled,toggleDarkMode} = useContext(themeContext)

  return (
    <div style={{minHeight:'100vh'}} className={`${isDarkModeEnabled?"home-page-wrapper":""}`}>
      <Header
        isDarkModeEnabled={isDarkModeEnabled}
        toggleDarkMode={toggleDarkMode}
      />
      <Routes>
          <Route path="/" element={<Home isDarkModeEnabled={isDarkModeEnabled} toggleDarkMode={toggleDarkMode}/>}/>
          <Route path="/country/:id" element={<CountryDetail isDarkModeEnabled={isDarkModeEnabled}/>}/>
      </Routes>

      
    </div>
  );
};

export default App;
