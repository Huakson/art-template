import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

const ProductDescriptionTab = ({ product }) => {
  return (
    <div className="product-description-tab space-pt--r100 space-mt--r100 border-top--grey">
      <Tab.Container defaultActiveKey="description">
        <Nav
          variant="pills"
          className="product-description-tab__navigation text-center justify-content-center space-mb--50"
        >
          <Nav.Item>
            <Nav.Link eventKey="description">Descrição</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="additionalInfo">
              Informações adicionais
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="reviews">
              Avaliações {product.ratingCount ? `(${product.ratingCount})` : ""}
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="description">
            <div className="product-description-tab__details">
              {product.fullDescription}
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="additionalInfo">
            <div className="product-description-tab__additional-info">
              <table className="shop-attributes">
                <tbody>
                  <tr>
                    <th>Tamanho</th>
                    <td>
                      <p>L, M, S, XS</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Cor</th>
                    <td>
                      <p>Preto, Azul, Amarelo</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="reviews">
            <div className="product-description-tab__review">
              <h2 className="review-title space-mb--20">
                {product.ratingCount ? product.ratingCount : ""} avaliações para {" "}
                {product.name}
              </h2>
              {/*=======  single review  =======*/}
              <div className="single-review">
                <div className="single-review__image">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/user/user1.jpeg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="single-review__content">
                  {/*=======  rating  =======*/}
                  <div className="single-review__rating">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarOutline />
                  </div>

                  {/*=======  username and date  =======*/}
                  <p className="username">
                    Fulano de tal <span className="date">/ 12/5/2021</span>
                  </p>

                  {/*=======  message  =======*/}
                  <p className="message">
                    Lorem ipsum dolor!
                  </p>
                  {/*=======  End of message  =======*/}
                </div>
              </div>
              {/*=======  End of single review  =======*/}
              {/*=======  single review  =======*/}
              <div className="single-review">
                <div className="single-review__image">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/user/user2.jpeg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="single-review__content">
                  {/*=======  rating  =======*/}
                  <div className="single-review__rating">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarOutline />
                  </div>
                  {/*=======  End of rating  =======*/}
                  {/*=======  username and date  =======*/}
                  <p className="username">
                    Ciclano de tal <span className="date">/ 12/5/2021</span>
                  </p>
                  {/*=======  message  =======*/}
                  <p className="message">
                    Lorem ipsum dolor!
                  </p>
                  {/*=======  End of message  =======*/}
                </div>
              </div>
              {/*=======  End of single review  =======*/}
              {/*=======  single review  =======*/}
              <div className="single-review">
                <div className="single-review__image">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/user/user3.jpeg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="single-review__content">
                  {/*=======  rating  =======*/}
                  <div className="single-review__rating">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarOutline />
                  </div>
                  {/*=======  End of rating  =======*/}
                  {/*=======  username and date  =======*/}
                  <p className="username">
                    Beltrano de tal <span className="date">/ 12/5/2021</span>
                  </p>

                  {/*=======  message  =======*/}
                  <p className="message">
                    Lorem ipsum dolor!
                  </p>
                  {/*=======  End of message  =======*/}
                </div>
              </div>
              {/*=======  End of single review  =======*/}
              <h2 className="review-title space-mb--20">Avaliar</h2>
              <p className="text-center">
                Por favor, preencha todos os campos marcados com *
              </p>
              {/*=======  review form  =======*/}
              <div className="lezada-form lezada-form--review">
                <form>
                  <div className="row">
                    <div className="col-lg-6 space-mb--20">
                      <input type="text" placeholder="Nome *" required />
                    </div>
                    <div className="col-lg-6 space-mb--20">
                      <input type="email" placeholder="Email *" required />
                    </div>
                    <div className="col-lg-12 space-mb--20">
                      <span className="rating-title space-mr--20">
                        Sua avaliação
                      </span>
                      <span className="product-rating">
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                      </span>
                    </div>
                    <div className="col-lg-12 space-mb--20">
                      <textarea
                        cols={30}
                        rows={10}
                        placeholder="Sua avaliação *"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-lg-12 text-center">
                      <button
                        type="submit"
                        className="lezada-button lezada-button--medium"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/*=======  End of review form  =======*/}
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default ProductDescriptionTab;
