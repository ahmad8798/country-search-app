import { useContext } from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { themeContext } from '../../context/ThemeContext';

const CountryCard = ({ country }) => {
  const { name, region, population, capital, flags, cca3 } = country;

  const navigate = useNavigate();
  const {isDarkModeEnabled} = useContext(themeContext)
  return (
    <Col lg={3} md={6} sm={6} className='d-flex justify-content-center'>
      <Card 
        onClick={() => navigate(`/country/${cca3}`)}
        style={{ width: '15rem' }} 
        className={`mb-5 pb-4 shadow-lg border-0 ${isDarkModeEnabled?'dark-mode-element':''}`}
      >
        <Card.Img
          height="150px"
          className="object-fit-cover border-bottom-1"
          variant="top"
          src={flags?.png}
          alt={`Flag of ${name?.common}`}
        />
        <Card.Body className={`${isDarkModeEnabled?`text-light`:'text-dark'}`}>
          <Card.Title className="fs-6 fw-bold">{name?.common}</Card.Title>
          <p className="fs-7 mb-0" style={{ fontSize: '13px' }}>
            <strong>Population:</strong> {population.toLocaleString()}
          </p>
          <p className="fs-7 mb-0" style={{ fontSize: '13px' }}>
            <strong>Region:</strong> {region}
          </p>
          <p className="fs-7 mb-0" style={{ fontSize: '13px' }}>
            <strong>Capital:</strong> {capital?.length > 0 ? capital[0] : 'N/A'}
          </p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CountryCard;
