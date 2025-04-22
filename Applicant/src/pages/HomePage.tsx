import { ROUTER_INDEX } from "../constant/routerConstant";
import Banner from "../features/home/Banner";
import Content from "../features/home/Content";
import { useDynamicTitle, useScrollTop } from "../hooks";

const HomePage: React.FC = () => {
  useDynamicTitle(ROUTER_INDEX.HomePage.title);
  useScrollTop();
  return (
    <div>
      <Banner />
      <Content />
    </div>
  );
};

export default HomePage;
