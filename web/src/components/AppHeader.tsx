import { menus } from "@/constant/menu.constant";
import { CloseOutlined, MenuOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const Logo: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const handleClickDrawer = () => {
    setOpenDrawer((val) => !val);
  };

  const handleClickMenu = (type: "download-catalog") => {
    // do something
  };

  return (
    <NavbarContainer>
      <NavBar>
        <Link href='/'>
          <img src='/assets/logo-martic.png' alt='logo-martic' height={24} />
        </Link>
        <NavDesktop>
          {menus.map((item) =>
            item.link && !item.hide ? (
              <Link scroll={false} key={item.label} href={item.link}>
                {item.label}
              </Link>
            ) : !item.hide ? (
              <LinkButton
                key={item.label}
                onClick={() => handleClickMenu("download-catalog")}
              >
                {item.label}
              </LinkButton>
            ) : (
              false
            )
          )}
        </NavDesktop>
        <NavMenuResponsive>
          <MenuOutlined style={{ fontSize: 20 }} onClick={handleClickDrawer} />
          <Drawer
            placement={"top"}
            closable={false}
            onClose={handleClickDrawer}
            open={openDrawer}
            key={"drawer-top"}
            height={450}
          >
            <DrawerHeader>
              <img
                src='/assets/logo-martic.png'
                alt='logo-martic'
                height={24}
              />
              <CloseOutlined
                style={{ fontSize: 16 }}
                onClick={handleClickDrawer}
              />
            </DrawerHeader>
            <NavMenuGroup>
              {menus.map((item) =>
                item.link ? (
                  <Link key={item.label} href={item.link}>
                    {item.label}
                  </Link>
                ) : (
                  <LinkButton
                    key={item.label}
                    onClick={() => handleClickMenu("download-catalog")}
                  >
                    {item.label}
                  </LinkButton>
                )
              )}
            </NavMenuGroup>
            <Button
              size='large'
              style={{ width: "100%", marginTop: 15 }}
              type='default'
              icon={<PhoneOutlined size={20} />}
            >
              Contact Us
            </Button>
          </Drawer>
        </NavMenuResponsive>
      </NavBar>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  background-color: white;
  width: 100%;
  border-bottom: thin solid #e8ecf3;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  a {
    color: black;
  }
`;

const NavBar = styled.div`
  background-color: white;
  padding: 24px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 1200px;
  @media (max-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
  }
`;

const NavDesktop = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  align-items: center;
  gap: 25px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavMenuResponsive = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavMenuGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  a,
  a:hover,
  a:focus {
    text-decoration: none;
    color: black;
    padding: 16px 0;
  }
`;

const LinkButton = styled.div`
  padding: 16px 0;
`;

export default Logo;
