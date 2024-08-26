import { Button, Col, Container, Row } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import "./countryDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import { themeContext } from "../../context/ThemeContext";

const CountryDetail = () => {
  const [country, setCountry] = useState([]);
 const {isDarkModeEnabled} = useContext(themeContext)
    
  const {id} = useParams()
  const { data, loading, error } = useFetch(
    `https://restcountries.com/v3.1/alpha/${id}`
  );

  const navigate = useNavigate()
  useEffect(() => {
    if (data) {
      setCountry(data);
    }
  }, [data]);

  return (
    <>
      <Container>
        <div className="my-5">
          <Button onClick={()=>navigate('/')} variant={`rimary shadow-lg border-0 px-4 ${isDarkModeEnabled?'dark-mode-element text-light':'text-dark bg-white'}`}>
         
            <i className="bi bi-arrow-left mx-2"></i>
            back
          </Button>
        </div>
        <Row className="mx-auto">
          <Col lg={6} className="mb-5">
            <img
              className="object-fit-cover country-img"
              src={country[0]?.flags?.png}
              alt=""
            />
          </Col>

          <Col lg={6}>
            <Row className={`${isDarkModeEnabled?'text-white':'text-dark'}`}>
              <h1 className="mb-2 fw-800">{country[0]?.name?.common}</h1>
              <Col lg={6} className="mb-5">
                <p className="p-0 m-0">
                  <strong>Native Name</strong>:
                  {country[0]?.name?.nativeName?.eng?.official}
                </p>
                <p className="p-0 m-0">
                  <strong>Population</strong>:{country[0]?.population}
                </p>
                <p className="p-0 m-0">
                  <strong>Region</strong>:{country[0]?.region}
                </p>
                <p className="p-0 m-0">
                  <strong>Sub Region</strong>:{country[0]?.subregion}
                </p>
                <p className="p-0 m-0">
                  <strong>Capital</strong>:{country[0]?.capital[0]}
                </p>
              </Col>
              <Col lg={6}>
                <p className="p-0 m-0">
                  <strong>Top Level Domain</strong>:{country[0]?.tld[0]}
                </p>
                <p className="p-0 m-0">
                  <strong>Currencies</strong>:
                  {country[0]?.currencies &&
                    Object.keys(country[0].currencies).join(", ")}
                </p>
                <p className="p-0 m-0">
                  <strong>Languages</strong>:
                  {country[0]?.languages &&
                    Object.values(country[0].languages).join(", ")}
                </p>
              </Col>
              <div className="d-flex mt-5 ">
                <div className="d-flex flex-column flex-md-row  mb-2 gap-2">
                  <div className="position-relative top-25">
                    <p className="fw-bold mb-0">Borders:</p>
                  </div>
                  <div className="d-flex flex-wrap gap-1">
                    {country[0]?.borders
                      ? country[0].borders.map((border) => (
                          <Button
                            onClick={()=>navigate(`/country/${border}`)}
                            key={border}
                            className={`shadow-lg border-0 ${isDarkModeEnabled ?'text-light dark-mode-element':'bg-light text-dark'}`}
                            variant="secondary"
                          >
                            {border}
                          </Button>
                        ))
                      : "No borders"}
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CountryDetail;
