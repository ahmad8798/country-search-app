
import { Card, Col, Placeholder } from 'react-bootstrap';

const SkeletonCard = ({ isDarkModeEnabled }) => {
  return (
<Col lg={3} md={6} sm={6} className='d-flex justify-content-center'>
    <Card 
      style={{ width: '15rem' }} 
      className={`mb-5 pb-4  shadow-lg ${isDarkModeEnabled ? "dark-mode-element text-light" : ""}`}
    >
      <Placeholder animation="glow">
        <div className='rounded-top'
          style={{
            width: '100%',
            height: '150px',
            backgroundColor: 'gray',
          }}
        ></div>
      </Placeholder>

      <Card.Body >
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as="p" animation="glow" className="fs-7 mb-0" style={{ fontSize: '13px' }}>
          <Placeholder xs={8} /> <Placeholder xs={4} />
        </Placeholder>
        <Placeholder as="p" animation="glow" className="fs-7 mb-0" style={{ fontSize: '13px' }}>
          <Placeholder xs={6} /> <Placeholder xs={5} />
        </Placeholder>
      </Card.Body>
    </Card>
</Col>
  );
};

export default SkeletonCard;
