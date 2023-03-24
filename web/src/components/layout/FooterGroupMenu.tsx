import Link from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  menus: { label: string; link?: string; action?: string }[];
  onCLick?: (type: string) => void;
  customContent?: ReactNode;
}

const FooterGroupMenu: React.FC<Props> = (props) => {
  const handleClickMenu = (type?: string) => {
    // do something
  };

  return (
    <GroupMenu>
      <h4>{props.title}</h4>
      {props.customContent ? (
        props.customContent
      ) : (
        <MenuWrapper>
          {props.menus.map((item) =>
            !item.action ? (
              <Link key={item.label} href={item.link || "#"}>
                {item.label}
              </Link>
            ) : (
              <p key={item.label} onClick={() => handleClickMenu(item.action)}>
                {item.label}
              </p>
            )
          )}
        </MenuWrapper>
      )}
    </GroupMenu>
  );
};

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 15px;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
`;

const GroupMenu = styled.div`
  h4 {
    font-weight: 400;
    color: #768499;
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  a,
  a:hover,
  a:focus {
    text-decoration: none;
    color: black;
    font-size: 0.85rem;
  }
`;

export default FooterGroupMenu;
