import { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { Container, Row, Col } from "react-bootstrap";

const VideoIconContent = () => {
  const [modalStatus, isOpen] = useState(false);
  return (
    <div className="video-icon-content-area space-mb--r130">
      <Container className="wide">
        <Row className="align-items-center">
          <Col lg={7}>
            <div
              className="about-video-bg about-video-bg--style-two space-mb-mobile-only--50"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL +
                  "/assets/images/backgrounds/jewelry-video-bg.png"
                  })`
              }}
            >
              <div className="about-video-content__text-icon d-flex flex-column h-100 justify-content-center">
                <div className="play-icon text-center">
                  <ModalVideo
                    channel="youtube"
                    isOpen={modalStatus}
                    videoId="CIhylLW4Fcs"
                    onClose={() => isOpen(false)}
                  />
                  <button onClick={() => isOpen(true)}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/icon/icon-play-100x100.png"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={5} className="offset-xl-1">
            <div className="video-icon-content">
              <h2 className="video-icon-content__title">
                todos os produtos são <br /> construidos com os melhores materiais.
              </h2>
              <div className="video-icon-content__icon-content-wrapper">
                <div className="single-icon-content">
                  <div className="single-icon-content__icon">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/icon/icon1.png"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-icon-content__content">
                    <h4 className="title">Qualidade premium</h4>
                    <p className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="single-icon-content">
                  <div className="single-icon-content__icon">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/icon/icon2.png"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-icon-content__content">
                    <h4 className="title">Satisfação garantida</h4>
                    <p className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VideoIconContent;
