import AppLayout from "@/components/AppLayout";
import CardProduct from "@/components/CardProduct";
import { HookSection } from "@/components/landing-page/HookSection";
import { MainContainer, Section } from "@/components/layout/Container";
import TitleSection from "@/components/layout/TitleSection";
import { products } from "@/constant/menu.constant";
import useResetScroll from "@/hook/useResetScroll";
import { AllProductProps } from "@/types/product.type";
import { Modal } from "antd";
import { useState } from "react";
import styled from "styled-components";

export default function ProductPage() {
  const _ = useResetScroll();

  const handleOpenProduct = () => {
    setIsModalOpen(true);
  };
  const handleCloseProduct = () => {
    setIsModalOpen(false);
  };
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <AppLayout>
      <MainContainer odd>
        <Section>
          <TitleSection
            basic
            showBreadcrumb
            title='Our Products'
            subtitle='We also improve ideas and innovations with product quality. Customer integrity and satisfaction are our achievements'
          />
        </Section>
      </MainContainer>

      <MainContainer>
        <Section>
          <CardContainer>
            {products.map((item) => (
              <CardProduct product={item} onClick={handleOpenProduct} />
            ))}
          </CardContainer>
        </Section>
      </MainContainer>

      <HookSection />

      <Modal
        title='Basic Modal'
        open={isModalOpen}
        footer={null}
        onCancel={handleCloseProduct}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </AppLayout>
  );
}

const CardContainer = styled.div`
  display: grid;
  grid-template-rows: 1;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  column-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
`;
