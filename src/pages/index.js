import { connect } from "react-redux";
import { getProducts } from "../lib/product";
import { LayoutOne } from "../components/Layout";
import { HeroSliderTwo } from "../components/HeroSlider";
import { SectionTitleOne } from "../components/SectionTitle";
import { CategorySlider } from "../components/Category";
import { CountdownTimerSix } from "../components/Countdown";
import { VideoIconContent,ImageTextContent } from "../components/About";
import { TestimonialOne } from "../components/Testimonial";

import { ProductTab } from "../components/ProductTab";
import { ImageCta } from "../components/Cta";

import heroSliderData from "../data/hero-sliders/hero-slider-two.json";
import imageCtaData from "../data/image-cta/image-cta-one.json";
import categoryData from "../data/categories/category-one.json";
import testimonialOneData from "../data/testimonials/testimonial-one.json";


const Home = ({ newProducts, popularProducts, saleProducts }) => {
  return (
    <LayoutOne aboutOverlay={false}>
      {/* hero slider */}
      <HeroSliderTwo
        sliderData={heroSliderData}
        spaceBottomClass="space-mb--50"
      />


      {/* category slider */}
      <SectionTitleOne
        title="Categorias"
      />

      <CategorySlider
        categoryData={categoryData}
        spaceBottomClass="space-mb--r100"
      />

      {/* Countdown timer */}

      <CountdownTimerSix
        title="Oferta do dia!"
        image="/assets/images/countdown/countdown-5.jpg"
        dateTime="2021-05-31T17:16:46.930Z"
        url="/shop/left-sidebar"
        buttonText="Somente  R$:999,99"
        spaceBottomClass="space-mb--r100"
      />

      {/* video icon content */}
      <VideoIconContent />

      {/* testimonial */}
      <TestimonialOne
        testimonialData={testimonialOneData}
        spaceBottomClass="space-mb--r100"
      />

      {/* image text content */}
      <ImageTextContent />

    </LayoutOne>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  return {
    newProducts: getProducts(products, "decor", "new", 9),
    popularProducts: getProducts(products, "decor", "popular", 9),
    saleProducts: getProducts(products, "decor", "sale", 9)
  };
};

export default connect(mapStateToProps)(Home);
