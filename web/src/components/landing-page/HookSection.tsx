import { ArrowRightOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { MainContainer, Section } from "../layout/Container";

export function HookSection() {
  return (
    <MainContainer odd image='bg-hook.png'>
      <Section>
        <ContentHook>
          <div>
            <h4>Contact Our Team of Flow Measurement Experts</h4>
            <p>
              Let Us Help You Find the Right Flow Meter Solution for Your
              Application
            </p>
          </div>
          <ButtonHook>
            <span>Contact Us</span>
            <ArrowRightOutlined color='#10284F' />
          </ButtonHook>
        </ContentHook>
      </Section>
    </MainContainer>
  );
}

const ButtonHook = styled.div`
  border-radius: 5px;
  background-color: white;
  color: #10284f;
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  padding: 16px 24px;
  span {
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const ContentHook = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 20px 0;
  div {
    max-width: 600px;
  }
  h4 {
    font-size: 2.4rem;
  }
  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;
