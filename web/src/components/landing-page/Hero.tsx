import { heros } from "@/constant/hero.constant";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Carousel } from "antd";
import styled from "styled-components";

const Hero: React.FC = () => {
  return (
    <Carousel autoplay={false} pauseOnHover dots={{ className: "custom-dots" }}>
      {heros.map((item) => (
        <CarouselItem key={item.title}>
          <WrapperLeft>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
            <BtnWrapper>
              <Button
                id='btn-product'
                size='large'
                type='primary'
                style={{ width: 200, marginRight: 20, height: 55 }}
              >
                See Our Products
              </Button>
              <Button
                size='large'
                type='ghost'
                style={{ width: 200, height: 55 }}
                icon={<DownloadOutlined />}
              >
                Download Catalog
              </Button>
            </BtnWrapper>
          </WrapperLeft>
          <WrapperRight>
            <img src={"/assets/" + item.image} />
          </WrapperRight>
        </CarouselItem>
      ))}
    </Carousel>
  );
};

const BtnWrapper = styled.div`
  display: inline-block;
  margin-top: 60px;
  @media (max-width: 768px) {
    display: block;
    button {
      display: block;
    }
    #btn-product {
      margin-bottom: 20px;
      margin-right: 0 !important;
    }
  }
`;

const WrapperLeft = styled.div`
  flex: 1;
  margin-bottom: 40px;
  h3 {
    font-size: 3.8rem;
    margin: 0;
    margin-bottom: 20px;
    line-height: 150%;
  }
  p {
    max-width: 80%;
    font-size: 1rem;
    margin: 0;
    color: #768499;
  }
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    h3 {
      font-size: 3.2rem;
      max-width: 80%;
      line-height: 140%;
    }
  }
`;

const WrapperRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 400px;
  }
  @media (max-width: 768px) {
    flex: 0.5;
    img {
      width: 300px;
      /* display: none; */
    }
  }
`;

const CarouselItem = styled.div`
  height: 600px;
  width: 100%;
  background: white;
  display: flex !important;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    height: 900px;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    /* margin: 40px 0; */
  }
`;

export default Hero;
