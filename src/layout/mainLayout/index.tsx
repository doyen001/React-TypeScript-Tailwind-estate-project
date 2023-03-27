import React, { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";

type Props = {
  children: ReactNode;
  title?: string;
  section?: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children, title, section }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
