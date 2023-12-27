const App = () => {
    return (
      <Container>
        <Row>
          <Col>
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