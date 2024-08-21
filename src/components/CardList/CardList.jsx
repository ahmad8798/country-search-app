/* eslint-disable react/prop-types */

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardList = ({children}) => {
  return (
    <>

        <Container fluid className='mt-5'>
            <Row>
                {children}
            </Row>
        </Container>
     
    </>
  )
}

export default CardList
