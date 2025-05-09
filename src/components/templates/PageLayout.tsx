import { PropsWithChildren } from "react";
import { Footer } from "../UI/organisms/Footer";
import { Header } from "../UI/organisms/Header";
import { SideMenu } from "../UI/organisms/SideMenu/SideMenu";

export const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>
        <SideMenu />
        {children}
      </main>
      <Footer />
    </>
  );
};
