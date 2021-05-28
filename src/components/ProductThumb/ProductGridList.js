import { Fragment, useState } from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";
import { IoIosHeartEmpty, IoIosShuffle, IoIosSearch } from "react-icons/io";
import { Tooltip } from "react-tippy";
import ProductModal from "./ProductModal";

const ProductGridList = ({
  product,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
  compareItem,
  bottomSpace,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  addToCompare,
  deleteFromCompare,
  addToast,
  cartItems
}) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      <Col lg={3} md={6} className={bottomSpace ? bottomSpace : ""}>
        <div className="product-grid">
          {/*=======  single product image  =======*/}
          <div className="product-grid__image">
            <Link
              href={`/shop/product-basic/[slug]?slug=${product.slug}`}
              as={
                process.env.PUBLIC_URL + "/shop/product-basic/" + product.slug
              }
            >
              <a className="image-wrap">
                <img
                  src={process.env.PUBLIC_URL + product.thumbImage[0]}
                  className="img-fluid"
                  alt={product.name}
                />
                {product.thumbImage.length > 1 ? (
                  <img
                    src={process.env.PUBLIC_URL + product.thumbImage[1]}
                    className="img-fluid"
                    alt={product.name}
                  />
                ) : (
                  ""
                )}
              </a>
            </Link>
            <div className="product-grid__floating-badges">
              {product.discount && product.discount > 0 ? (
                <span className="onsale">-{product.discount}%</span>
              ) : (
                ""
              )}
              {product.new ? <span className="hot">Novo</span> : ""}
              {product.stock === 0 ? (
                <span className="out-of-stock">off</span>
              ) : (
                ""
              )}
            </div>
           
          </div>

          {/*=======  single product content  =======*/}
          <div className="product-grid__content">
            <div className="title">
              <h3>
                <Link
                  href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                  as={
                    process.env.PUBLIC_URL +
                    "/shop/product-basic/" +
                    product.slug
                  }
                >
                  <a>{product.name}</a>
                </Link>
              </h3>
              {/* add to cart */}
              {product.affiliateLink ? (
                <a href={product.affiliateLink} target="_blank">
                  Comprar agora
                </a>
              ) : product.variation && product.variation.length >= 1 ? (
                <Link
                  href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                  as={
                    process.env.PUBLIC_URL +
                    "/shop/product-basic/" +
                    product.slug
                  }
                >
                  <a>Selecione uma opção</a>
                </Link>
              ) : product.stock && product.stock > 0 ? (
                <button
                  onClick={() => addToCart(product, addToast)}
                  disabled={
                    cartItem !== undefined &&
                    cartItem.quantity >= cartItem.stock
                  }
                >
                  {cartItem !== undefined ? "Adicionado ao carrinho" : "Adicionar ao carrinho"}
                </button>
              ) : (
                <button disabled>Sem estoque</button>
              )}
            </div>
            <div className="price">
              {product.discount > 0 ? (
                <Fragment>
                  <span className="main-price discounted">R$: {productPrice}</span>
                  <span className="discounted-price">R$: {discountedPrice}</span>
                </Fragment>
              ) : (
                <span className="main-price">R$: {productPrice}</span>
              )}
            </div>
          </div>
        </div>

        <div className="product-list">
          {/*=======  single product image  =======*/}
          <div className="product-list__image">
            <Link
              href={`/shop/product-basic/[slug]?slug=${product.slug}`}
              as={
                process.env.PUBLIC_URL + "/shop/product-basic/" + product.slug
              }
            >
              <a className="image-wrap">
                <img
                  src={process.env.PUBLIC_URL + product.thumbImage[0]}
                  className="img-fluid"
                  alt={product.name}
                />
                {product.thumbImage.length > 1 ? (
                  <img
                    src={process.env.PUBLIC_URL + product.thumbImage[1]}
                    className="img-fluid"
                    alt={product.name}
                  />
                ) : (
                  ""
                )}
              </a>
            </Link>
            <div className="product-list__floating-badges">
              {product.discount && product.discount > 0 ? (
                <span className="onsale">-{product.discount}%</span>
              ) : (
                ""
              )}
              {product.new ? <span className="hot">Novo</span> : ""}
              {product.stock === 0 ? (
                <span className="out-of-stock">off</span>
              ) : (
                ""
              )}
            </div>
           
          </div>

          {/*=======  single product content  =======*/}
          <div className="product-list__content">
            <div className="title">
              <h3>
                <Link
                  href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                  as={
                    process.env.PUBLIC_URL +
                    "/shop/product-basic/" +
                    product.slug
                  }
                >
                  <a>{product.name}</a>
                </Link>
              </h3>
            </div>
            <div className="price">
              {product.discount > 0 ? (
                <Fragment>
                  <span className="main-price discounted">R$: {productPrice}</span>
                  <span className="discounted-price">R$: {discountedPrice}</span>
                </Fragment>
              ) : (
                <span className="main-price">R$: {productPrice}</span>
              )}
            </div>

            <div className="short-description">{product.shortDescription}</div>
            <div className="add-to-cart">
              {/* add to cart */}
              {product.affiliateLink ? (
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  className="lezada-button lezada-button--medium"
                >
                  Comprar agora
                </a>
              ) : product.variation && product.variation.length >= 1 ? (
                <Link
                  href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                  as={
                    process.env.PUBLIC_URL +
                    "/shop/product-basic/" +
                    product.slug
                  }
                >
                  <a className="lezada-button lezada-button--medium">
                    Selecione uma opção
                  </a>
                </Link>
              ) : product.stock && product.stock > 0 ? (
                <button
                  onClick={() => addToCart(product, addToast)}
                  disabled={
                    cartItem !== undefined &&
                    cartItem.quantity >= cartItem.stock
                  }
                  className="lezada-button lezada-button--medium"
                >
                  {cartItem !== undefined ? "Added to cart" : "Add to cart"}
                </button>
              ) : (
                <button
                  disabled
                  className="lezada-button lezada-button--medium"
                >
                  Sem estoque
                </button>
              )}
            </div>
          </div>
        </div>
      </Col>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        discountedprice={discountedPrice}
        productprice={productPrice}
        cartitems={cartItems}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
        addtocart={addToCart}
        addtowishlist={addToWishlist}
        deletefromwishlist={deleteFromWishlist}
        addtocompare={addToCompare}
        deletefromcompare={deleteFromCompare}
        addtoast={addToast}
      />
    </Fragment>
  );
};

export default ProductGridList;
