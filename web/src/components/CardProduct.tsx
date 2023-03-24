import { AllProductProps } from "@/types/product.type";
import { Button } from "antd";
import styled from "styled-components";

interface Props {
  product: AllProductProps;
  onClick: (product: AllProductProps) => void;
}

const CardProduct: React.FC<Props> = ({ product, onClick }) => {
  return (
    <Container onClick={() => onClick(product)}>
      <img src={"/assets/products/" + product.image} />
      <Title>{product.name}</Title>
      <GroupWrapper>
        <Label>Model No.</Label>
        <Value>{product.modelNo || "-"}</Value>
        <Label>Certificate</Label>
        <Value>{product.certificate || "-"}</Value>
        <Label>Nominal Diameter</Label>
        <Value>{product.nominalDiameter || "-"}</Value>
        <Label>G.W.</Label>
        <Value>{product.gw || "-"}</Value>
        <Label>Warranty</Label>
        <Value>{product.warranty || "-"}</Value>
        <Label>Max. Flow Rate</Label>
        <Value>{product.maxFlowRate || "-"}</Value>
      </GroupWrapper>
      <Button
        onClick={() => onClick(product)}
        type='primary'
        size='large'
        style={{ width: "100%", marginTop: 15 }}
      >
        See Detail Product
      </Button>
    </Container>
  );
};

const Value = styled.p`
  font-size: 0.85rem;
  line-height: 1.2;
  margin: 0;
`;

const Label = styled.p`
  color: #768499;
  font-size: 0.85rem;
  line-height: 1.2;
  margin: 0;
`;

const GroupWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 80px 1fr;
  grid-template-rows: repeat(3, 1fr);
  column-gap: 0px;
  row-gap: 5px;
`;

const Container = styled.div`
  padding: 20px;
  border: 1px solid #e8ecf3;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  img {
    margin-bottom: 15px;
    width: 100%;
    object-fit: cover;
    height: 380px;
  }
  @media (max-width: 768px) {
    img {
      height: 240px;
    }
  }
`;

const Title = styled.p`
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
  margin: 0;
  margin-bottom: 15px;
`;

export default CardProduct;
