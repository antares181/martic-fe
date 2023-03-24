import { Layout } from "antd";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AppContent: React.FC<Props> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default AppContent;
