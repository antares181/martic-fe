import { ReactNode } from "react";
import styled from "styled-components";
import AppContent from "./AppContent";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

interface Props {
  children: ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AppHeader />
      <AppContent>{children}</AppContent>
      <AppFooter />
    </>
  );
};

export default AppLayout;
