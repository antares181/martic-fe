import AppLayout from "@/components/AppLayout";
import CardProduct from "@/components/CardProduct";
import Hero from "@/components/landing-page/Hero";
import { HookSection } from "@/components/landing-page/HookSection";
import { MainContainer, Section } from "@/components/layout/Container";
import TitleSection from "@/components/layout/TitleSection";
import { galleries, products } from "@/constant/menu.constant";
import { productionTesting } from "@/constant/production.constant";
import { strength } from "@/constant/strength.constant";
import { AllProductProps } from "@/types/product.type";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Carousel, Image } from "antd";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Home() {
  const router = useRouter();

  const handleOnClickProduct = (product: AllProductProps) => {
    // do something
  };

  const handleGoToProduct = () => {
    router.push("/products");
  };

  return (
    <AppLayout>
      <MainContainer noPadding>
        <Section>
          <Hero />
        </Section>
      </MainContainer>

      <MainContainer odd id='about_us'>
        <Section>
          <TitleSection
            title='About Martic'
            subtitle='Leading Provider of High-Quality Flow Measurement Solutions for Industrial Applications'
          />
          <ContainerAbout>
            <img src='/assets/image-company.png' />
            <WrapperAboutLeft>
              <h4>
                Leading Provider of High-Quality Flow Measurement Solutions for
                Industrial Applications
              </h4>
              <p>
                Welcome to Martic, a leading provider of high-quality flow
                meters for various industrial applications. We are committed to
                providing reliable, accurate, and cost-effective flow
                measurement solutions to our customers worldwide.
                <br />
                <br />
                With years of experience in the industry, we have a team of
                experts who are dedicated to delivering exceptional customer
                service and technical support. Our products are designed and
                manufactured to meet the highest standards of quality and
                performance, ensuring that our customers receive the best
                possible value for their investment.
                <br />
                <br />
                At Martic, we understand that each customer's needs are unique,
                and we strive to offer a wide range of products to meet those
                needs. Whether you require a simple flow meter or a
                custom-designed solution, we have the expertise and resources to
                deliver the right solution for your application.
                <br />
                <br />
                We are committed to continuous improvement and innovation, and
                we work closely with our customers to ensure that our products
                meet their evolving needs. We are proud of our reputation for
                excellence in the industry and are confident that we can exceed
                your expectations.
                <br />
                <br />
                Thank you for choosing Martic as your partner in flow
                measurement solutions.
              </p>
            </WrapperAboutLeft>
          </ContainerAbout>
        </Section>
      </MainContainer>

      <MainContainer id='our_strength'>
        <Section>
          <TitleSection
            title='Our Strength'
            subtitle='Reliable, Accurate, and Cost-Effective Flow Measurement Solutions to Meet Your Needs'
          />
          <ContainerStrength>
            {strength.map((item) => (
              <StrengthItem key={item.title}>
                <img src={"/assets/" + item.image} />
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
              </StrengthItem>
            ))}
          </ContainerStrength>
        </Section>
      </MainContainer>

      <MainContainer odd id='products'>
        <Section>
          <TitleSection
            title='Our Products'
            subtitle='Comprehensive Range of Flow Meters Designed for Various Industrial Applications'
          />
          <CardContainer>
            {products
              .filter((item) => item.highlightLanding)
              .map((item) => (
                <CardProduct product={item} onClick={handleOnClickProduct} />
              ))}
          </CardContainer>
          <ButtonText onClick={handleGoToProduct}>See All Products</ButtonText>
        </Section>
      </MainContainer>

      <MainContainer id='production_testing'>
        <Section>
          <GridProduction>
            <TitleGrid>
              <TitleSection
                title='Production & Testing Equipment'
                subtitle='State-of-the-Art Production and Testing Equipment to Ensure the Highest Quality Standards'
              />
            </TitleGrid>
            {productionTesting.map((item) => (
              <GridItem>
                <img src={"/assets/" + item.image} />
                <div>
                  <p>{item.title}</p>
                </div>
              </GridItem>
            ))}
          </GridProduction>
        </Section>
      </MainContainer>

      <HookSection />

      <MainContainer id='galleries'>
        <Section>
          <TitleSection
            title='Galleries'
            subtitle='Explore Our Range of Flow Meters and Installation Examples'
          />
          <Carousel autoplay pauseOnHover>
            {galleries.map((item) => (
              <div>
                <GalleryImageItem
                  src={"/assets/galleries/" + item}
                  alt='image-gallery'
                />
              </div>
            ))}
          </Carousel>
        </Section>
      </MainContainer>
    </AppLayout>
  );
}

const GalleryImageItem = styled.img`
  height: 500px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const GridItem = styled.div`
  width: 100%;
  height: 380;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
  div {
    z-index: 10;
    position: absolute;
    width: 100%;
    height: 200px;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    p {
      margin-bottom: 0;
      position: absolute;
      left: 24px;
      right: 24px;
      bottom: 24px;
      color: white;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
  @media (max-width: 768px) {
    height: 280;
  }
`;

const TitleGrid = styled.div`
  display: flex;
  align-items: center;
`;

const GridProduction = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 24px;
  @media (max-width: 768px) {
    gap: 15px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 200px);
  }
`;

const ButtonText = styled.div`
  margin-top: 40px;
  text-align: center;
  font-weight: bold;
  color: #1c83f2;
  cursor: pointer;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-rows: 1;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
`;

const StrengthItem = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  background-color: white;
  justify-items: center;
  text-align: center;
  padding: 40px;
  img {
    margin-bottom: 20px;
    width: 50px;
  }
  h4 {
    font-size: 1.2rem;
  }
  p {
    font-size: 0.9rem;
    color: #768499;
    margin: 0;
  }
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ContainerStrength = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  border: 1px solid #e8ecf3;
  background-color: #e8ecf3;
  gap: 1px;
  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
`;

const ContainerAbout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px;
  img {
    height: 520px;
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    gap: 40px;
    grid-template-columns: 1fr;
    grid-template-rows: 400px 1fr;
    img {
      height: 400px;
    }
  }
`;

const WrapperAboutLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h4 {
    font-size: 1.8rem;
    color: #21466e;
    margin-bottom: 36px;
  }
  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;
