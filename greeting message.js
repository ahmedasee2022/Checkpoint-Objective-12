const firstName = "John"; // Replace with your first name or set it to an empty string

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          {firstName ? (
            <div>
              <h2>Hello, {firstName}!</h2>
              <img src={product.image} alt="Profile" />
            </div>
          ) : (
            <h2>Hello, there!</h2>
          )}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Name name={product.name} />
              <Price price={product.price} />
              <Description description={product.description} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};