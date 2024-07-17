import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore } from "../../stores/store";

const Hero = () => {
  const { heroStore } = useStore();
  return (
    <Container className="pt-5 mt-5 " fluid={true}>
      <Row>
        <Col className="text-center col-8 offset-2 ">
          <h2 className="hero-heading">{heroStore.headline}</h2>
        </Col>
        <Col className="text-center col-8 offset-2 pt-3 ">
          <h4>{heroStore.subHeadLine}</h4>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col className="col-10 offset-1 rounded p-0 bg">
          <img
            src={heroStore.image}
            width={"100%"}
            height={"100%"}
            style={{ objectFit: "contain" }}
            alt=""
            className="img-fluid rounded"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
