import BodyComponent from "../common/components/BodyComponent";
import HeaderComponent from "../common/components/HeaderComponent";
import FooterComponent from "../common/components/FooterComponent";

const MainLayout: React.FC = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
};

export default MainLayout;
