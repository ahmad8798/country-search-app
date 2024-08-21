import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const CountryCard = ({ country }) => {
  const { name, region, population, capital, flags } = country;

  return (

    <>
      <Col lg={3} md={6} sm={6} className='d-flex justify-content-center'>
    <Card style={{ width: '15rem' }} className="mb-5 pb-4 shadow-lg border-0">
      <Card.Img
        height="150px"
        className="object-fit-cover border-bottom-1"
        variant="top"
        src={flags?.png}
      />
      <Card.Body>
        <Card.Title className="fs-6 fw-bold">{name?.common}</Card.Title>
        <p className="fs-7 mb-0" style={{ fontSize: '13px' }}>
          <strong>Population:</strong> {population}
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
    </>
  );
};



export default CountryCard;
