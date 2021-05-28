import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const ImageTextContent = () => {
  return (
    <div className="about-text-bg-area space-mb--r130">
      <Container className="wide">
        <Row className="no-gutters">
          <Col lg={6}>
            <div className="about-bg-content">
              <h2 className="about-bg-content__title">
                Sobre nossa empresa
              </h2>
              <p className="about-bg-content__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
              <Link
                href="/other/about"
                as={process.env.PUBLIC_URL + "/other/about"}
              >
                <a className="about-bg-content__link">clique aqui para saber mais</a>
              </Link>
            </div>
          </Col>
          <Col lg={6}>
            <div
              className="about-bg-background"
              style={{
                backgroundImage: `url("${process.env.PUBLIC_URL +
                  "/assets/images/backgrounds/bg-about.jpg"
                  }")`
              }}
            ></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageTextContent;
