import { menus, products } from "@/constant/menu.constant";
import { Layout } from "antd";
import styled from "styled-components";
import FooterGroupMenu from "./layout/FooterGroupMenu";
import slugify from "slugify";

const AppFooter: React.FC = () => {
  return (
    <FooterContainer>
      <Footer>
        <Brand>
          <img src='/assets/logo-martic.png' alt='logo-martic' height={32} />
          <Subtitle>
            Perfectionist and top quality material is our priority to support
            all ship tool needs
          </Subtitle>
        </Brand>

        <FooterGroupMenu
          title='Quick Links'
          menus={menus.filter((item) => item.link)}
        />

        <FooterGroupMenu
          title='Our Products'
          menus={products
            .filter((item) => item.highlight)
            .map((item) => ({
              label: item.name || "-",
              link: slugify(item.name || "", {
                replacement: "-",
                lower: true,
              }),
            }))}
        />

        <FooterGroupMenu
          title='Get Connected'
          menus={[]}
          customContent={
            <ConnectWrapper>
              <ConnectGroup>
                <h4>Office</h4>
                <p>
                  Buliding 10 chuang xin road 6,No.2 xiqing district, tianjin
                  China.
                </p>
              </ConnectGroup>
              <ConnectGroup>
                <h4>Contact</h4>
                <p>+628912001232</p>
              </ConnectGroup>
              <ConnectGroup>
                <h4>Email</h4>
                <p>office@martic.com</p>
              </ConnectGroup>
            </ConnectWrapper>
          }
        />
      </Footer>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: #e8ecf3;
  width: 100%;
`;

const ConnectGroup = styled.div`
  h4 {
    font-weight: 400;
    color: #768499;
    font-size: 0.85rem;
    margin-bottom: 0.25rem;
  }
  p {
    margin: 0;
    font-size: 0.85rem;
  }
`;

const ConnectWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 10px;
`;

const Footer = styled.div`
  padding: 100px 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 36px;
  margin: 0 auto;
  width: 1200px;
  @media (max-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: auto;
  }
`;

const Brand = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 20px;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 0.85rem;
  line-height: 150%;
  width: 300px;
`;

export default AppFooter;
