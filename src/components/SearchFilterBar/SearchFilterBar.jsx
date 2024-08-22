import { Container } from "react-bootstrap"


const SearchFilterBar = ({children,className}) => {
  return (
    <>
        <Container className={className}>
           
        <div className="d-flex flex-column flex-md-row justify-content-start justify-content-md-between gap-5">
  {children}
</div>
           
           
        </Container>
    </>
  )
}

export default SearchFilterBar
