import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  title: string;
  subtitle: string;
  basic?: boolean;
  showBreadcrumb?: boolean;
}

const TitleSection: React.FC<Props> = (props) => {
  return (
    <Container basic={props.basic}>
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
      {props.showBreadcrumb && (
        <Breadcrumb
          style={{ marginTop: 40 }}
          items={[
            {
              title: (
                <>
                  <HomeOutlined /> <Link href='/'>Home</Link>
                </>
              ),
            },
            {
              title: "All Products",
            },
          ]}
        />
      )}
    </Container>
  );
};

interface ContainerProps {
  basic?: boolean;
}

const Container = styled.div<ContainerProps>`
  margin-bottom: ${(props) => (props.basic ? "0px" : "48px")};
  h3 {
    font-size: 2rem;
    margin-bottom: 0px;
    line-height: 160%;
    padding-top: 20px;
    position: relative;
  }
  h3:before {
    content: "";
    height: 3px;
    width: 60px;
    background-color: #1c83f2;
    position: absolute;
    top: 0;
    left: 0;
  }
  p {
    color: #768499;
    font-size: 1rem;
    margin: 0;
  }
`;

export default TitleSection;
