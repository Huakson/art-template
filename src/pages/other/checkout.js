import { useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getDiscountPrice } from "../../lib/product";
import { IoMdCash } from "react-icons/io";
import { LayoutOne } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";

const Checkout = ({ cartItems }) => {
  let cartTotalPrice = 0;

  useEffect(() => {
    document.querySelector("body").classList.remove("overflow-hidden");
  });

  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="Checkout"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-1.png"
      >

      </BreadcrumbOne>
      <div className="checkout-area space-mt--r130 space-mb--r130">
        <Container>
          {cartItems && cartItems.length >= 1 ? (
            <Row>
              <Col>
                <div className="lezada-form">
                  <form className="checkout-form">
                    <div className="row row-40">
                      <div className="col-lg-7 space-mb--20">
                        {/* Billing Address */}
                        <div id="billing-form" className="space-mb--40">
                          <h4 className="checkout-title">Endereço de cobrança</h4>
                          <div className="row">
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>Nome*</label>
                              <input type="text" placeholder="Nome" />
                            </div>
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>Sobrenome*</label>
                              <input type="text" placeholder="Sobrenome" />
                            </div>
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>Email*</label>
                              <input type="email" placeholder="Email" />
                            </div>
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>Telefone*</label>
                              <input type="text" placeholder="Telefone" />
                            </div>
                            <div className="col-12 space-mb--20">
                              <label>Endereço*</label>
                              <input type="text" placeholder="Endereço" />
                            </div>
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>Cidade*</label>
                              <input type="text" placeholder="Cidade" />
                            </div>
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>Estado*</label>
                              <input type="text" placeholder="Estado" />
                            </div>
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>CEP*</label>
                              <input type="text" placeholder="CEP" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="row">
                          {/* Cart Total */}
                          <div className="col-12 space-mb--50">
                            <h4 className="checkout-title">Total da compra</h4>
                            <div className="checkout-cart-total">
                              <h4>
                                Produto <span>Total</span>
                              </h4>
                              <ul>
                                {cartItems.map((product, i) => {
                                  const discountedPrice = getDiscountPrice(
                                    product.price,
                                    product.discount
                                  ).toFixed(2);

                                  cartTotalPrice +=
                                    discountedPrice * product.quantity;
                                  return (
                                    <li key={i}>
                                      {product.name} X {product.quantity}{" "}
                                      <span>R$: {discountedPrice}</span>
                                    </li>
                                  );
                                })}
                              </ul>
                              <p>
                                Sub Total{" "}
                                <span>R$: {cartTotalPrice.toFixed(2)}</span>
                              </p>
                              <p>
                                Desconto <span>R$: 00.00</span>
                              </p>
                              <h4>
                                Total{" "}
                                <span>R$: {cartTotalPrice.toFixed(2)}</span>
                              </h4>
                            </div>
                          </div>
                          {/* Payment Method */}
                          <div className="col-12">
                            <h4 className="checkout-title">Metodo de pagamento</h4>
                            <div className="checkout-payment-method">
                              <div className="single-method">
                                <input
                                  type="radio"
                                  id="payment_check"
                                  name="payment-method"
                                  defaultValue="check"
                                />
                                <label htmlFor="payment_check">
                                  Boleto
                                </label>
                              </div>
                              <div className="single-method">
                                <input
                                  type="radio"
                                  id="payment_bank"
                                  name="payment-method"
                                  defaultValue="bank"
                                />
                                <label htmlFor="payment_bank">
                                  Cartão de crédito
                                </label>
                              </div>

                              <div className="single-method">
                                <input
                                  type="radio"
                                  id="payment_paypal"
                                  name="payment-method"
                                  defaultValue="paypal"
                                />
                                <label htmlFor="payment_paypal">Cartão de debito</label>
                              </div>
                              <div className="single-method">
                                <input type="checkbox" id="accept_terms" />
                                <label htmlFor="accept_terms">
                                  Aceito os termos de politica da empresa
                                </label>
                              </div>
                            </div>
                            <button className="lezada-button lezada-button--medium space-mt--20">
                              Finalizar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <IoMdCash />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">
                      Nenhum item no carinho
                    </p>
                    <Link
                      href="/shop/left-sidebar"
                      as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                    >
                      <a className="lezada-button lezada-button--medium">
                        Compre agora
                      </a>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </LayoutOne>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData
  };
};

export default connect(mapStateToProps)(Checkout);
